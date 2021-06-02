import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionConfig, AccordionModule } from '../index';
let TestAccordionComponent = class TestAccordionComponent {
    constructor(config) {
        this.oneAtATime = true;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.panels = [
            { isOpen: false, isDisabled: false },
            { isOpen: false, isDisabled: false },
            { isOpen: false, isDisabled: false }
        ];
        Object.assign(this, config);
    }
};
TestAccordionComponent = __decorate([
    Component({
        selector: 'accordion-test',
        template: ''
    }),
    __metadata("design:paramtypes", [AccordionConfig])
], TestAccordionComponent);
const html = `
  <accordion [closeOthers]="oneAtATime">

    <accordion-group heading="Panel 1"
                     [(isOpen)]="panels[0].isOpen"
                     [isDisabled]="panels[0].isDisabled">
      Content of panel 1
    </accordion-group>

    <accordion-group heading="Panel 2"
                     [(isOpen)]="panels[1].isOpen"
                     [isDisabled]="panels[1].isDisabled">
      Content of panel 2
    </accordion-group>

    <accordion-group heading="Panel 3"
                     [(isOpen)]="panels[2].isOpen"
                     [isDisabled]="panels[2].isDisabled">
      Content of panel 3
    </accordion-group>

  </accordion>
`;
function getPanels(element) {
    return Array.from(element.querySelectorAll('accordion-group'));
}
function expectOpenPanels(nativeEl, openPanelsDef) {
    const panels = getPanels(nativeEl);
    expect(panels.length).toBe(openPanelsDef.length);
    for (let i = 0; i < panels.length; i++) {
        if (openPanelsDef[i]) {
            expect(panels[i].classList).toContain('panel-open');
        }
        else {
            expect(panels[i].classList).not.toContain('panel-open');
        }
    }
}
function hasTitle(element, str) {
    var _a;
    return ((_a = element.textContent) === null || _a === void 0 ? void 0 : _a.trim()) === str;
}
describe('Component: Accordion', () => {
    let fixture;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let context;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let element;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestAccordionComponent],
            imports: [
                AccordionModule.forRoot(),
                BrowserAnimationsModule
            ]
        });
        TestBed.overrideComponent(TestAccordionComponent, {
            set: { template: html }
        });
        fixture = TestBed.createComponent(TestAccordionComponent);
        context = fixture.componentInstance;
        element = fixture.nativeElement;
        fixture.detectChanges();
    });
    it('should have no open panels', () => {
        expectOpenPanels(element, [false, false, false]);
    });
    it('should have open panel based on binding', () => {
        context.panels[0].isOpen = true;
        fixture.detectChanges();
        expectOpenPanels(element, [true, false, false]);
    });
    it('should toggle panels independently', () => {
        context.oneAtATime = false;
        context.panels[1].isOpen = true;
        fixture.detectChanges();
        expectOpenPanels(element, [false, true, false]);
        context.panels[0].isOpen = true;
        fixture.detectChanges();
        expectOpenPanels(element, [true, true, false]);
        context.panels[1].isOpen = false;
        fixture.detectChanges();
        expectOpenPanels(element, [true, false, false]);
        context.panels[2].isOpen = true;
        fixture.detectChanges();
        expectOpenPanels(element, [true, false, true]);
        context.panels[0].isOpen = false;
        fixture.detectChanges();
        expectOpenPanels(element, [false, false, true]);
        context.panels[2].isOpen = false;
        fixture.detectChanges();
        expectOpenPanels(element, [false, false, false]);
    });
    it('should have the appropriate heading', () => {
        element.querySelectorAll('.panel-heading .accordion-toggle button')
            .forEach((title, idx) => {
            const expectedTitle = `Panel ${idx + 1}`;
            expect(hasTitle(title, expectedTitle)).toBeTruthy();
        });
    });
    it('should only open one at a time', () => {
        const headingLinks = element.querySelectorAll('.accordion-toggle');
        headingLinks[0].click();
        fixture.detectChanges();
        expectOpenPanels(element, [true, false, false]);
        headingLinks[2].click();
        fixture.detectChanges();
        expectOpenPanels(element, [false, false, true]);
        headingLinks[2].click();
        fixture.detectChanges();
        expectOpenPanels(element, [false, false, false]);
    });
    it('should have only one open panel even if binding says otherwise', () => {
        context.panels[0].isOpen = true;
        context.panels[1].isOpen = true;
        // which of panels should be opened there? the first or the last one? (now - last)
        fixture.detectChanges();
        expectOpenPanels(element, [false, true, false]);
    });
    it('should not open disabled panels from click', () => {
        context.panels[0].isDisabled = true;
        fixture.detectChanges();
        const headingLinks = element.querySelectorAll('.panel-title .accordion-toggle');
        headingLinks[0].click();
        fixture.detectChanges();
        expectOpenPanels(element, [false, false, false]);
    });
    it('should modify the parent isOpen state when changed internally (2 way binding)', fakeAsync(() => {
        const headingLinks = element.querySelectorAll('.accordion-toggle');
        // Clicking (internal state modified)
        headingLinks[0].click();
        fixture.detectChanges();
        expectOpenPanels(element, [true, false, false]);
        // State modified by parent component
        headingLinks[2].click();
        fixture.detectChanges();
        expectOpenPanels(element, [false, false, true]);
        // Modified by binding
        context.panels[1].isOpen = true;
        fixture.detectChanges();
        tick();
        expect(context.panels[0].isOpen).toBe(false);
        expect(context.panels[1].isOpen).toBe(true);
        expect(context.panels[2].isOpen).toBe(false);
    }));
});
//# sourceMappingURL=accordion.component.spec.js.map