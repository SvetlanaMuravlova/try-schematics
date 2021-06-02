import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { BsDatepickerConfig } from '../bs-datepicker.config';
import { BsDatepickerDayDecoratorComponent } from '../themes/bs/bs-datepicker-day-decorator.directive';
import '../../../scripts/jest/toHaveCssClass';
let TestComponent = class TestComponent {
    constructor() {
        this.day = { date: new Date(), label: '' };
    }
};
TestComponent = __decorate([
    Component({
        selector: 'test-cmp',
        template: `<span bsDatepickerDayDecorator [day]='day'>{{ day.label }}</span>`
    })
], TestComponent);
function getDayElement(fixture) {
    return fixture.nativeElement.querySelector('[bsDatepickerDayDecorator]');
}
function setDay(fixture, day) {
    fixture.componentInstance.day = day;
    fixture.detectChanges();
}
describe('datepicker: [bsDatepickerDayDecorator]', () => {
    let fixture;
    beforeEach(waitForAsync(() => TestBed.configureTestingModule({
        declarations: [TestComponent, BsDatepickerDayDecoratorComponent],
        providers: [BsDatepickerConfig]
    }).compileComponents()));
    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
    });
    it('should display date', () => {
        // arrange
        const label = 'some label';
        setDay(fixture, { label });
        const el = getDayElement(fixture);
        // assert
        expect(el.innerHTML).toBe(label);
    });
    it('should not add any special classes by default', () => {
        fixture.detectChanges();
        const el = getDayElement(fixture);
        expect(el).not.toHaveCssClass('disabled');
        expect(el).not.toHaveCssClass('is-highlighted');
        expect(el).not.toHaveCssClass('is-other-month');
        expect(el).not.toHaveCssClass('in-range');
        expect(el).not.toHaveCssClass('select-start');
        expect(el).not.toHaveCssClass('select-end');
        expect(el).not.toHaveCssClass('selected');
        expect(el).not.toHaveCssClass('custom1');
        expect(el).not.toHaveCssClass('custom2');
    });
    it('should add classes corresponding to day state', () => {
        setDay(fixture, {
            isDisabled: true,
            isHovered: true,
            isOtherMonth: true,
            isInRange: true,
            isSelectionStart: true,
            isSelectionEnd: true,
            isSelected: true
        });
        const el = getDayElement(fixture);
        expect(el).toHaveCssClass('disabled');
        expect(el).toHaveCssClass('is-highlighted');
        expect(el).toHaveCssClass('is-other-month');
        expect(el).toHaveCssClass('in-range');
        expect(el).toHaveCssClass('select-start');
        expect(el).toHaveCssClass('select-end');
        expect(el).toHaveCssClass('selected');
        expect(el).not.toHaveCssClass('custom1');
        expect(el).not.toHaveCssClass('custom2');
    });
    it('should add custom and state classes corresponding to day state', () => {
        setDay(fixture, {
            isDisabled: true,
            isHovered: true,
            isOtherMonth: true,
            isInRange: true,
            isSelectionStart: true,
            isSelectionEnd: true,
            isSelected: true,
            customClasses: 'custom1 custom2'
        });
        const el = getDayElement(fixture);
        expect(el).toHaveCssClass('disabled');
        expect(el).toHaveCssClass('is-highlighted');
        expect(el).toHaveCssClass('is-other-month');
        expect(el).toHaveCssClass('in-range');
        expect(el).toHaveCssClass('select-start');
        expect(el).toHaveCssClass('select-end');
        expect(el).toHaveCssClass('selected');
        expect(el).toHaveCssClass('custom1');
        expect(el).toHaveCssClass('custom2');
    });
});
//# sourceMappingURL=bs-datepicker-day-decorator.spec.js.map