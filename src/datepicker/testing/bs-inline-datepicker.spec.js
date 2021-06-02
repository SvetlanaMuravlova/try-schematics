import { __decorate, __metadata } from "tslib";
import { TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, ViewChild } from '@angular/core';
import { BsDatepickerModule } from '../bs-datepicker.module';
import { BsDatepickerInlineDirective } from '../bs-datepicker-inline.component';
import { initialYearShift } from '../engine/format-years-calendar';
import { take } from 'rxjs/operators';
import { getYearsCalendarInitialDate } from '../utils/bs-calendar-utils';
let TestComponent = class TestComponent {
    constructor() {
        this.bsConfig = {
            customTodayClass: 'custom-today-class'
        };
    }
};
__decorate([
    ViewChild(BsDatepickerInlineDirective, { static: false }),
    __metadata("design:type", BsDatepickerInlineDirective)
], TestComponent.prototype, "datepicker", void 0);
TestComponent = __decorate([
    Component({
        selector: 'test-cmp',
        template: `<bs-datepicker-inline [bsConfig]="bsConfig"></bs-datepicker-inline>>`
    })
], TestComponent);
function getDatepickerInlineDirective(fixture) {
    const datepicker = fixture.componentInstance.datepicker;
    return datepicker;
}
function getDatepickerInlineContainer(datepicker) {
    return datepicker[`_datepickerRef`] ? datepicker[`_datepickerRef`].instance : null;
}
describe('datepicker inline:', () => {
    let fixture;
    beforeEach(waitForAsync(() => TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [
            BsDatepickerModule.forRoot(),
            BrowserAnimationsModule
        ]
    }).compileComponents()));
    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
    });
    it('should select correct year when a month other than selected year is chosen', () => {
        const datepicker = getDatepickerInlineDirective(fixture);
        const datepickerContainerInstance = getDatepickerInlineContainer(datepicker);
        const yearSelection = { date: new Date(2017, 1, 1), label: 'label' };
        const monthSelection = { date: new Date(2018, 1, 1), label: 'label' };
        datepickerContainerInstance.yearSelectHandler(yearSelection);
        datepickerContainerInstance.monthSelectHandler(monthSelection);
        fixture.detectChanges();
        datepickerContainerInstance[`_store`]
            .select(state => state)
            .pipe(take(1))
            .subscribe(state => {
            const selectedYear = state.view.date.getFullYear();
            expect(selectedYear).toEqual(monthSelection.date.getFullYear());
            const firstDate = getYearsCalendarInitialDate(state);
            if (firstDate) {
                expect(firstDate.getFullYear()).toEqual(Number(selectedYear) + initialYearShift);
            }
        });
    });
});
//# sourceMappingURL=bs-inline-datepicker.spec.js.map