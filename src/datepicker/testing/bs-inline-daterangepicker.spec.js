import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from '../bs-datepicker.module';
import { BsDaterangepickerInlineDirective } from '../bs-daterangepicker-inline.component';
import { take } from 'rxjs/operators';
import { getYearsCalendarInitialDate } from '../utils/bs-calendar-utils';
import { initialYearShift } from '../engine/format-years-calendar';
let TestComponent = class TestComponent {
    constructor() {
        this.bsConfig = {
            customTodayClass: 'custom-today-class'
        };
    }
};
__decorate([
    ViewChild(BsDaterangepickerInlineDirective, { static: false }),
    __metadata("design:type", BsDaterangepickerInlineDirective)
], TestComponent.prototype, "datepicker", void 0);
TestComponent = __decorate([
    Component({
        selector: 'test-cmp',
        template: `
    <bs-daterangepicker-inline [bsConfig]="bsConfig"></bs-daterangepicker-inline>`
    })
], TestComponent);
function getDaterangepickerInlineDirective(fixture) {
    const datepicker = fixture.componentInstance.datepicker;
    return datepicker;
}
function getDatepickerInlineContainer(datepicker) {
    return datepicker[`_datepickerRef`] ? datepicker[`_datepickerRef`].instance : null;
}
describe('daterangepicker inline:', () => {
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
    it('should select correct year when a month other than selected year chosen', () => {
        const datepicker = getDaterangepickerInlineDirective(fixture);
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
//# sourceMappingURL=bs-inline-daterangepicker.spec.js.map