import { __decorate, __metadata } from "tslib";
import { TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import { BsDatepickerModule } from '../bs-datepicker.module';
import { BsDatepickerInlineDirective } from '../bs-datepicker-inline.component';
import { getYearsCalendarInitialDate } from '../utils/bs-calendar-utils';
let TestComponent = class TestComponent {
    constructor() {
        this.bsConfig = {
            customTodayClass: 'custom-today-class',
            minMode: 'year'
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
    return fixture.componentInstance.datepicker;
}
function getDatepickerInlineContainer(datepicker) {
    return datepicker[`_datepickerRef`] ? datepicker[`_datepickerRef`].instance : null;
}
xdescribe('datepicker inline minMode="year":', () => {
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
    it('should not reorder years when the first year is selected', () => {
        const datepicker = getDatepickerInlineDirective(fixture);
        const datepickerContainerInstance = getDatepickerInlineContainer(datepicker);
        datepickerContainerInstance[`_store`]
            .select(state => state)
            .pipe(take(1))
            .subscribe(initialState => {
            const initialFirstDate = getYearsCalendarInitialDate(initialState);
            const initialFirstYear = initialFirstDate && initialFirstDate.getFullYear();
            const yearSelection = { date: new Date(initialFirstYear, 1, 1), label: 'label' };
            datepickerContainerInstance.yearSelectHandler(yearSelection);
            fixture.detectChanges();
            datepickerContainerInstance[`_store`]
                .select(state => state)
                .pipe(take(1))
                .subscribe(state => {
                const selectedYear = state.view.date.getFullYear();
                expect(selectedYear).toEqual(initialFirstYear);
                const firstDate = getYearsCalendarInitialDate(state);
                const firstYear = firstDate && firstDate.getFullYear();
                expect(firstYear).toEqual(initialFirstYear);
            });
        });
    });
});
//# sourceMappingURL=bs-inline-datepicker-minmode-year.spec.js.map