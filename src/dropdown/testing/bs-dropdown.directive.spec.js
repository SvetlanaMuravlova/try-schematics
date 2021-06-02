import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownConfig, BsDropdownDirective, BsDropdownModule } from '../index';
let TestDropdownComponent = class TestDropdownComponent {
    constructor(config) {
        this.isOpen = false;
        this.dropup = false;
        this.isDisabled = false;
        this.autoClose = true;
        this.isOpenChangeValue = false;
        this.insideClick = false;
        this.container = '';
        this.placement = '';
        Object.assign(this, config);
    }
};
TestDropdownComponent = __decorate([
    Component({
        selector: 'dropdown-test',
        template: ''
    }),
    __metadata("design:paramtypes", [BsDropdownConfig])
], TestDropdownComponent);
const defaultHtml = `
  <div dropdown [isDisabled]="isDisabled"
                [dropup]="dropup"
                (isOpenChange)="isOpenChangeValue = true"
                [(isOpen)]="isOpen"
                [insideClick]="insideClick"
                [autoClose]="autoClose">
    <button aria-expanded="false" dropdownToggle class="dropdown-toggle">Dropdown</button>
    <ul *dropdownMenu>
      <li><a href="#">One</a></li>
      <li><a href="#">Two</a></li>
      <li>Three</li>
    </ul>
  </div>
  <h1>Title outside dropdown</h1>
`;
describe('Directive: Dropdown', () => {
    let fixture;
    let element;
    let context;
    let directive;
    beforeEach((() => {
        TestBed.configureTestingModule({
            declarations: [TestDropdownComponent],
            imports: [
                BsDropdownModule.forRoot(),
                BrowserAnimationsModule
            ]
        });
        TestBed.overrideComponent(TestDropdownComponent, {
            set: { template: defaultHtml }
        });
        fixture = TestBed.createComponent(TestDropdownComponent);
        element = fixture.nativeElement;
        context = fixture.componentInstance;
        // get the typeahead directive instance
        const inputs = fixture.debugElement.queryAll(By.directive(BsDropdownDirective));
        directive = inputs.map((de) => de.injector.get(BsDropdownDirective))[0];
        fixture.detectChanges();
    }));
    it('should be closed by default', () => {
        const dropdown = element.querySelector('[dropdown]');
        expect(dropdown === null || dropdown === void 0 ? void 0 : dropdown.classList).not.toContain('open');
    });
    it('autoClose value should be true by default', () => {
        expect(directive.autoClose).toBeTruthy();
    });
    it('insideClick value should be true by default', () => {
        expect(directive.insideClick).toBeFalsy();
    });
    it('should be opened if isOpen === true and toggle on isOpen changes', () => {
        var _a, _b, _c;
        context.isOpen = true;
        fixture.detectChanges();
        expect((_a = element.querySelector('[dropdown]')) === null || _a === void 0 ? void 0 : _a.classList).toContain('open');
        context.isOpen = false;
        fixture.detectChanges();
        expect((_b = element.querySelector('[dropdown]')) === null || _b === void 0 ? void 0 : _b.classList).not.toContain('open');
        context.isOpen = true;
        fixture.detectChanges();
        expect((_c = element.querySelector('[dropdown]')) === null || _c === void 0 ? void 0 : _c.classList).toContain('open');
    });
    it('should toggle by click', () => {
        var _a, _b, _c, _d, _e;
        expect((_a = element.querySelector('[dropdown]')) === null || _a === void 0 ? void 0 : _a.classList).not.toContain('open');
        (_b = element.querySelector('button')) === null || _b === void 0 ? void 0 : _b.click();
        fixture.detectChanges();
        expect((_c = element.querySelector('[dropdown]')) === null || _c === void 0 ? void 0 : _c.classList).toContain('open');
        (_d = element.querySelector('button')) === null || _d === void 0 ? void 0 : _d.click();
        fixture.detectChanges();
        expect((_e = element.querySelector('[dropdown]')) === null || _e === void 0 ? void 0 : _e.classList).not.toContain('open');
    });
    it('should be closed if was opened by click and then isOpen === false was set', () => {
        var _a, _b, _c, _d;
        expect((_a = element.querySelector('[dropdown]')) === null || _a === void 0 ? void 0 : _a.classList).not.toContain('open');
        (_b = element.querySelector('button')) === null || _b === void 0 ? void 0 : _b.click();
        fixture.detectChanges();
        expect((_c = element.querySelector('[dropdown]')) === null || _c === void 0 ? void 0 : _c.classList).toContain('open');
        context.isOpen = false;
        fixture.detectChanges();
        expect((_d = element.querySelector('[dropdown]')) === null || _d === void 0 ? void 0 : _d.classList).not.toContain('open');
    });
    it('should close by click on any element inside the dropdown', fakeAsync(() => {
        var _a, _b, _c, _d, _e, _f, _g;
        (_a = element.querySelector('button')) === null || _a === void 0 ? void 0 : _a.click();
        fixture.detectChanges();
        expect((_b = element.querySelector('[dropdown]')) === null || _b === void 0 ? void 0 : _b.classList).toContain('open');
        tick();
        (_c = element.querySelector('li')) === null || _c === void 0 ? void 0 : _c.click();
        fixture.detectChanges();
        expect((_d = element.querySelector('[dropdown]')) === null || _d === void 0 ? void 0 : _d.classList).not.toContain('open');
        tick();
        (_e = element.querySelector('button')) === null || _e === void 0 ? void 0 : _e.click();
        fixture.detectChanges();
        expect((_f = element.querySelector('[dropdown]')) === null || _f === void 0 ? void 0 : _f.classList).toContain('open');
        tick();
        element.click();
        fixture.detectChanges();
        expect((_g = element.querySelector('[dropdown]')) === null || _g === void 0 ? void 0 : _g.classList).not.toContain('open');
    }));
    it('should close by click on any element outside the dropdown', () => {
        var _a, _b, _c, _d;
        (_a = element.querySelector('button')) === null || _a === void 0 ? void 0 : _a.click();
        fixture.detectChanges();
        expect((_b = element.querySelector('[dropdown]')) === null || _b === void 0 ? void 0 : _b.classList).toContain('open');
        (_c = element.querySelector('h1')) === null || _c === void 0 ? void 0 : _c.click();
        fixture.detectChanges();
        expect((_d = element.querySelector('[dropdown]')) === null || _d === void 0 ? void 0 : _d.classList).not.toContain('open');
    });
    it('should be opened if isOpen === true and toggle on isOpen changes', () => {
        var _a, _b;
        context.isOpen = true;
        fixture.detectChanges();
        expect((_a = element.querySelector('[dropdown]')) === null || _a === void 0 ? void 0 : _a.classList).toContain('open');
        context.isOpen = false;
        fixture.detectChanges();
        expect((_b = element.querySelector('[dropdown]')) === null || _b === void 0 ? void 0 : _b.classList).not.toContain('open');
    });
    it('should change and update isOpen when it is opened or closed', fakeAsync(() => {
        var _a, _b, _c, _d;
        (_a = element.querySelector('button')) === null || _a === void 0 ? void 0 : _a.click();
        fixture.detectChanges();
        expect((_b = element.querySelector('[dropdown]')) === null || _b === void 0 ? void 0 : _b.classList).toContain('open');
        expect(context.isOpen).toBe(true);
        tick();
        (_c = element.querySelector('li')) === null || _c === void 0 ? void 0 : _c.click();
        fixture.detectChanges();
        expect((_d = element.querySelector('[dropdown]')) === null || _d === void 0 ? void 0 : _d.classList).not.toContain('open');
        expect(context.isOpen).toBe(false);
    }));
    it('should has class dropup if property dropup equal true', () => {
        var _a;
        context.dropup = true;
        fixture.detectChanges();
        expect((_a = element.querySelector('[dropdown]')) === null || _a === void 0 ? void 0 : _a.classList).toContain('dropup');
    });
    it('should not open if isDisabled equal true', () => {
        var _a, _b, _c, _d, _e;
        context.isDisabled = true;
        fixture.detectChanges();
        expect((_a = element.querySelector('[dropdown]')) === null || _a === void 0 ? void 0 : _a.classList).not.toContain('open');
        (_b = element.querySelector('button')) === null || _b === void 0 ? void 0 : _b.click();
        fixture.detectChanges();
        expect((_c = element.querySelector('[dropdown]')) === null || _c === void 0 ? void 0 : _c.classList).not.toContain('open');
        context.isDisabled = false;
        fixture.detectChanges();
        (_d = element.querySelector('button')) === null || _d === void 0 ? void 0 : _d.click();
        fixture.detectChanges();
        expect((_e = element.querySelector('[dropdown]')) === null || _e === void 0 ? void 0 : _e.classList).toContain('open');
    });
    it('should close if only dropdown button was clicked if autoClose equal false', fakeAsync(() => {
        var _a, _b, _c, _d, _e, _f, _g;
        context.autoClose = false;
        fixture.detectChanges();
        (_a = element.querySelector('button')) === null || _a === void 0 ? void 0 : _a.click();
        fixture.detectChanges();
        expect((_b = element.querySelector('[dropdown]')) === null || _b === void 0 ? void 0 : _b.classList).toContain('open');
        tick();
        element.click();
        fixture.detectChanges();
        expect((_c = element.querySelector('[dropdown]')) === null || _c === void 0 ? void 0 : _c.classList).toContain('open');
        tick();
        (_d = element.querySelector('h1')) === null || _d === void 0 ? void 0 : _d.click();
        fixture.detectChanges();
        expect((_e = element.querySelector('[dropdown]')) === null || _e === void 0 ? void 0 : _e.classList).toContain('open');
        tick();
        (_f = element.querySelector('button')) === null || _f === void 0 ? void 0 : _f.click();
        fixture.detectChanges();
        expect((_g = element.querySelector('[dropdown]')) === null || _g === void 0 ? void 0 : _g.classList).not.toContain('open');
    }));
    it('should not close by click on menu item if autoClose equal true', fakeAsync(() => {
        var _a, _b, _c, _d;
        context.autoClose = true;
        fixture.detectChanges();
        (_a = element.querySelector('button')) === null || _a === void 0 ? void 0 : _a.click();
        fixture.detectChanges();
        expect((_b = element.querySelector('[dropdown]')) === null || _b === void 0 ? void 0 : _b.classList).toContain('open');
        tick();
        (_c = element.querySelector('li')) === null || _c === void 0 ? void 0 : _c.click();
        fixture.detectChanges();
        expect((_d = element.querySelector('[dropdown]')) === null || _d === void 0 ? void 0 : _d.classList).not.toContain('open');
    }));
    it('value isOpenChange emits event', () => {
        var _a, _b;
        (_a = element.querySelector('button')) === null || _a === void 0 ? void 0 : _a.click();
        fixture.detectChanges();
        expect((_b = element.querySelector('[dropdown]')) === null || _b === void 0 ? void 0 : _b.classList).toContain('open');
        expect(context.isOpenChangeValue).toBeTruthy();
    });
    it('should close if only dropdown button was clicked if autoClose equal false', fakeAsync(() => {
        var _a, _b, _c, _d, _e, _f, _g;
        context.autoClose = false;
        fixture.detectChanges();
        (_a = element.querySelector('button')) === null || _a === void 0 ? void 0 : _a.click();
        fixture.detectChanges();
        expect((_b = element.querySelector('[dropdown]')) === null || _b === void 0 ? void 0 : _b.classList).toContain('open');
        tick();
        element.click();
        fixture.detectChanges();
        expect((_c = element.querySelector('[dropdown]')) === null || _c === void 0 ? void 0 : _c.classList).toContain('open');
        tick();
        (_d = element.querySelector('h1')) === null || _d === void 0 ? void 0 : _d.click();
        fixture.detectChanges();
        expect((_e = element.querySelector('[dropdown]')) === null || _e === void 0 ? void 0 : _e.classList).toContain('open');
        tick();
        (_f = element.querySelector('button')) === null || _f === void 0 ? void 0 : _f.click();
        fixture.detectChanges();
        expect((_g = element.querySelector('[dropdown]')) === null || _g === void 0 ? void 0 : _g.classList).not.toContain('open');
    }));
    it('should not close by click on menu item if insideClick equal true', fakeAsync(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        context.insideClick = true;
        fixture.detectChanges();
        (_a = element.querySelector('button')) === null || _a === void 0 ? void 0 : _a.click();
        fixture.detectChanges();
        expect((_b = element.querySelector('[dropdown]')) === null || _b === void 0 ? void 0 : _b.classList).toContain('open');
        tick();
        (_c = element.querySelector('li')) === null || _c === void 0 ? void 0 : _c.click();
        fixture.detectChanges();
        expect((_d = element.querySelector('[dropdown]')) === null || _d === void 0 ? void 0 : _d.classList).toContain('open');
        tick();
        (_e = element.querySelector('ul')) === null || _e === void 0 ? void 0 : _e.click();
        fixture.detectChanges();
        expect((_f = element.querySelector('[dropdown]')) === null || _f === void 0 ? void 0 : _f.classList).toContain('open');
        tick();
        (_g = element.querySelector('h1')) === null || _g === void 0 ? void 0 : _g.click();
        fixture.detectChanges();
        expect((_h = element.querySelector('[dropdown]')) === null || _h === void 0 ? void 0 : _h.classList).not.toContain('open');
    }));
    it('should close by click on menu item if insideClick equal false', fakeAsync(() => {
        var _a, _b, _c, _d;
        context.insideClick = false;
        fixture.detectChanges();
        (_a = element.querySelector('button')) === null || _a === void 0 ? void 0 : _a.click();
        fixture.detectChanges();
        expect((_b = element.querySelector('[dropdown]')) === null || _b === void 0 ? void 0 : _b.classList).toContain('open');
        tick();
        (_c = element.querySelector('li')) === null || _c === void 0 ? void 0 : _c.click();
        fixture.detectChanges();
        expect((_d = element.querySelector('[dropdown]')) === null || _d === void 0 ? void 0 : _d.classList).not.toContain('open');
    }));
    it('should close by click on menu item if insideClick equal false', fakeAsync(() => {
        var _a, _b, _c, _d;
        context.insideClick = false;
        fixture.detectChanges();
        (_a = element.querySelector('button')) === null || _a === void 0 ? void 0 : _a.click();
        fixture.detectChanges();
        expect((_b = element.querySelector('[dropdown]')) === null || _b === void 0 ? void 0 : _b.classList).toContain('open');
        tick();
        (_c = element.querySelector('li')) === null || _c === void 0 ? void 0 : _c.click();
        fixture.detectChanges();
        expect((_d = element.querySelector('[dropdown]')) === null || _d === void 0 ? void 0 : _d.classList).not.toContain('open');
    }));
    it('should change aria-expanded property, when dropdown was opened', fakeAsync(() => {
        var _a, _b, _c, _d, _e;
        (_a = element.querySelector('button')) === null || _a === void 0 ? void 0 : _a.click();
        fixture.detectChanges();
        expect((_b = element.querySelector('[dropdown]')) === null || _b === void 0 ? void 0 : _b.classList).toContain('open');
        expect((_c = element.querySelector('[dropdownToggle]')) === null || _c === void 0 ? void 0 : _c.getAttribute('aria-expanded')).toEqual('true');
        tick();
        (_d = element.querySelector('li')) === null || _d === void 0 ? void 0 : _d.click();
        fixture.detectChanges();
        expect((_e = element.querySelector('[dropdownToggle]')) === null || _e === void 0 ? void 0 : _e.getAttribute('aria-expanded')).toEqual('false');
    }));
    it('should change disabled property, when dropdown was opened', fakeAsync(() => {
        var _a, _b, _c, _d;
        context.isDisabled = true;
        fixture.detectChanges();
        expect((_a = element.querySelector('[dropdown]')) === null || _a === void 0 ? void 0 : _a.classList).not.toContain('open');
        (_b = element.querySelector('button')) === null || _b === void 0 ? void 0 : _b.click();
        fixture.detectChanges();
        expect((_c = element.querySelector('[dropdown]')) === null || _c === void 0 ? void 0 : _c.classList).not.toContain('open');
        expect((_d = element.querySelector('[dropdownToggle]')) === null || _d === void 0 ? void 0 : _d.getAttribute('disabled')).toEqual('true');
    }));
    it('should open if container is body', () => {
        var _a, _b, _c, _d, _e;
        context.container = 'body';
        fixture.detectChanges();
        expect((_a = element.querySelector('[dropdown]')) === null || _a === void 0 ? void 0 : _a.classList).not.toContain('open');
        (_b = element.querySelector('button')) === null || _b === void 0 ? void 0 : _b.click();
        fixture.detectChanges();
        expect((_c = element.querySelector('[dropdown]')) === null || _c === void 0 ? void 0 : _c.classList).toContain('open');
        (_d = element.querySelector('button')) === null || _d === void 0 ? void 0 : _d.click();
        fixture.detectChanges();
        expect((_e = element.querySelector('[dropdown]')) === null || _e === void 0 ? void 0 : _e.classList).not.toContain('open');
    });
    it('should open if isBs3 method return true', fakeAsync(() => {
        var _a, _b, _c, _d;
        context.placement = 'bottom';
        const tempVal = window['__theme'];
        // eslint-disable-next-line
        window['__theme'] = 'bs4';
        fixture.detectChanges();
        (_a = element.querySelector('button')) === null || _a === void 0 ? void 0 : _a.click();
        fixture.detectChanges();
        expect((_b = element.querySelector('[dropdown]')) === null || _b === void 0 ? void 0 : _b.classList).toContain('open');
        expect((_c = element.querySelector('[dropdownToggle]')) === null || _c === void 0 ? void 0 : _c.getAttribute('aria-expanded')).toEqual('true');
        tick();
        expect((_d = element.querySelector('[dropdown]')) === null || _d === void 0 ? void 0 : _d.classList).toContain('open');
        // eslint-disable-next-line
        window['__theme'] = tempVal;
    }));
});
//# sourceMappingURL=bs-dropdown.directive.spec.js.map