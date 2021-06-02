import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { BsNavigationDirection } from '../models';
import { BsDatepickerNavigationViewComponent } from '../themes/bs/bs-datepicker-navigation-view.component';
let TestComponent = class TestComponent {
    navTo(event) {
        this._navTo = event;
    }
};
TestComponent = __decorate([
    Component({
        selector: 'test-cmp',
        template: `
    <bs-datepicker-navigation-view
      [calendar]="month"
      (onNavigate)="navTo($event)"
    ></bs-datepicker-navigation-view>`
    })
], TestComponent);
const titleSelector = '.current';
const prevNavSelector = '.previous';
const nextNavSelector = '.next';
function getTitles(fixture) {
    const elements = fixture.nativeElement.querySelectorAll(titleSelector);
    return [elements[0].textContent, elements[1].textContent];
}
function getPrevNavButton(fixture) {
    return fixture.nativeElement.querySelector(prevNavSelector);
}
function getNextNavButton(fixture) {
    return fixture.nativeElement.querySelector(nextNavSelector);
}
function getNavEvent(fixture) {
    return fixture.componentInstance._navTo;
}
function setMonth(fixture, month) {
    fixture.componentInstance.month = month;
    fixture.detectChanges();
}
describe('datepicker: bs-datepicker-navigation-view', () => {
    let fixture;
    beforeEach(waitForAsync(() => TestBed.configureTestingModule({
        declarations: [TestComponent, BsDatepickerNavigationViewComponent]
    }).compileComponents()));
    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
    });
    it('should display month and year titles', () => {
        const monthTitle = 'Some month';
        const yearTitle = 'Some year';
        setMonth(fixture, { monthTitle, yearTitle });
        const titles = getTitles(fixture);
        expect(titles[0].trim()).toBe(monthTitle);
        expect(titles[1].trim()).toBe(yearTitle);
    });
    it('should display navigation buttons by default', () => {
        const prev = getPrevNavButton(fixture);
        const next = getNextNavButton(fixture);
        setMonth(fixture, {});
        expect(prev.style.visibility).toBe('visible');
        expect(next.style.visibility).toBe('visible');
    });
    it('should hide prev nav button', () => {
        const prev = getPrevNavButton(fixture);
        setMonth(fixture, { hideLeftArrow: true });
        expect(prev.style.visibility).toBe('hidden');
    });
    it('should hide next nav button', () => {
        const next = getNextNavButton(fixture);
        setMonth(fixture, { hideRightArrow: true });
        expect(next.style.visibility).toBe('hidden');
    });
    it('on prev nav button click should nav DOWN', () => {
        const prev = getPrevNavButton(fixture);
        prev.click();
        expect(getNavEvent(fixture)).toBe(BsNavigationDirection.DOWN);
    });
    it('on next nav button click should nav UP', () => {
        const next = getNextNavButton(fixture);
        next.click();
        expect(getNavEvent(fixture)).toBe(BsNavigationDirection.UP);
    });
});
//# sourceMappingURL=bs-datepicker-navigation-view.spec.js.map