import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { BsDaterangepickerDirective } from '../bs-daterangepicker.component';
import { BsDatepickerModule } from '../bs-datepicker.module';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
let TestComponent = class TestComponent {
    constructor() {
        this.bsConfig = {
            customTodayClass: 'custom-today-class'
        };
    }
};
__decorate([
    ViewChild(BsDaterangepickerDirective, { static: false }),
    __metadata("design:type", BsDaterangepickerDirective)
], TestComponent.prototype, "daterangepicker", void 0);
TestComponent = __decorate([
    Component({
        selector: 'test-cmp',
        template: `<input type="text"
    bsDaterangepicker
    [bsConfig]="bsConfig">`
    })
], TestComponent);
function getDaterangepickerDirective(fixture) {
    const daterangepicker = fixture.componentInstance.daterangepicker;
    return daterangepicker;
}
function showDatepicker(fixture) {
    const daterangepicker = getDaterangepickerDirective(fixture);
    daterangepicker.show();
    fixture.detectChanges();
    return daterangepicker;
}
function hideDatepicker(fixture) {
    const daterangepicker = getDaterangepickerDirective(fixture);
    daterangepicker.hide();
    fixture.detectChanges();
    return daterangepicker;
}
function getDaterangepickerContainer(daterangepicker) {
    return daterangepicker[`_datepickerRef`] ? daterangepicker[`_datepickerRef`].instance : null;
}
describe('daterangepicker:', () => {
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
    it('should display daterangepicker on show', () => {
        const datepicker = showDatepicker(fixture);
        expect(getDaterangepickerContainer(datepicker)).toBeDefined();
    });
    it('should hide daterangepicker on hide', () => {
        const datepicker = hideDatepicker(fixture);
        expect(getDaterangepickerContainer(datepicker)).toBeNull();
    });
    it('should display correct date range in input when selected from ranges', () => {
        const datepicker = showDatepicker(fixture);
        const ranges = [
            {
                label: 'Last 7 days',
                value: [new Date('12-10-2019'), new Date('12-16-2019')]
            },
            {
                label: 'Next 7 days',
                value: [new Date('12-16-2019'), new Date('12-22-2019')]
            }
        ];
        datepicker.bsConfig.ranges = ranges;
        const datepickerContainerInstance = getDaterangepickerContainer(datepicker);
        datepickerContainerInstance.setRangeOnCalendar(ranges[0]);
        fixture.detectChanges();
        datepickerContainerInstance[`_store`]
            .select(state => state.selectedRange)
            .subscribe(view => {
            expect(view).toEqual(ranges[0].value);
        });
    });
    it('should display correct number of ranges button', () => {
        const ranges = [
            {
                label: 'Last 7 days',
                value: [new Date('12-10-2019'), new Date('12-16-2019')]
            },
            {
                label: 'Next 7 days',
                value: [new Date('12-16-2019'), new Date('12-22-2019')]
            }
        ];
        const daterangepickerInput = fixture.debugElement.query(By.css('input[bsDaterangepicker]'));
        fixture.componentInstance.daterangepicker.bsConfig.ranges = ranges;
        daterangepickerInput.nativeElement.click();
        fixture.detectChanges();
        const rangesButton = document.querySelector('.bs-datepicker-predefined-btns');
        expect(rangesButton.childElementCount).toEqual(ranges.length + 1); // +1 for `custom range` button
    });
    it('should display correct date range in input when selected from ranges', () => {
        const datepicker = showDatepicker(fixture);
        const ranges = [
            {
                label: 'Last 7 days',
                value: [new Date('12-10-2019'), new Date('12-16-2019')]
            },
            {
                label: 'Next 7 days',
                value: [new Date('12-16-2019'), new Date('12-22-2019')]
            }
        ];
        datepicker.bsConfig.ranges = ranges;
        const datepickerContainerInstance = getDaterangepickerContainer(datepicker);
        datepickerContainerInstance.setRangeOnCalendar(ranges[0]);
        fixture.detectChanges();
        datepickerContainerInstance[`_store`]
            .select(state => state.selectedRange)
            .subscribe(view => {
            expect(view).toEqual(ranges[0].value);
        });
    });
    it('should correctly display the selected range button with active custom class', () => {
        const datepicker = showDatepicker(fixture);
        const ranges = [
            {
                label: 'Last 7 days',
                value: [new Date('12-10-2019'), new Date('12-16-2019')]
            },
            {
                label: 'Next 7 days',
                value: [new Date('12-16-2019'), new Date('12-22-2019')]
            }
        ];
        const daterangepickerInput = fixture.debugElement.query(By.css('input[bsDaterangepicker]'));
        fixture.componentInstance.daterangepicker.bsConfig.ranges = ranges;
        const datepickerContainerInstance = getDaterangepickerContainer(datepicker);
        datepickerContainerInstance.setRangeOnCalendar(ranges[0]);
        daterangepickerInput.nativeElement.click();
        fixture.detectChanges();
        // only one active element should be present
        const activeRangeButton = document.querySelectorAll('.bs-datepicker-predefined-btns button.selected');
        expect(activeRangeButton).toBeTruthy();
        expect(activeRangeButton.length).toEqual(1);
        expect(activeRangeButton[0].innerHTML.trim()).toEqual(ranges[0].label);
    });
    it('should highlight the Custom Range button when dates selected are not in ranges', () => {
        const datepicker = showDatepicker(fixture);
        const customRangeBtnLbl = 'My Custom Range';
        const ranges = [
            {
                label: 'Last 7 days',
                value: [new Date('12-10-2019'), new Date('12-16-2019')]
            },
            {
                label: 'Next 7 days',
                value: [new Date('12-16-2019'), new Date('12-22-2019')]
            }
        ];
        const selectedRange = {
            label: 'Next 7 days',
            value: [new Date('12-14-2019'), new Date('12-25-2019')]
        };
        const daterangepickerInput = fixture.debugElement.query(By.css('input[bsDaterangepicker]'));
        fixture.componentInstance.daterangepicker.bsConfig.ranges = ranges;
        fixture.componentInstance.daterangepicker.bsConfig.customRangeButtonLabel = customRangeBtnLbl;
        const datepickerContainerInstance = getDaterangepickerContainer(datepicker);
        datepickerContainerInstance.setRangeOnCalendar(selectedRange);
        daterangepickerInput.nativeElement.click();
        fixture.detectChanges();
        // only one active element should be present
        const activeRangeButton = document.querySelectorAll('.bs-datepicker-predefined-btns button.selected');
        expect(activeRangeButton).toBeTruthy();
        expect(activeRangeButton.length).toEqual(1);
        expect(activeRangeButton[0].innerHTML.trim()).toEqual(customRangeBtnLbl);
    });
    it('should not allow to select date behind max value', () => {
        const datepicker = showDatepicker(fixture);
        datepicker.bsConfig.maxDate = new Date();
        datepicker.bsConfig.maxDateRange = 10;
        const datepickerContainerInstance = getDaterangepickerContainer(datepicker);
        const correctDateStart = new Date(new Date().setDate(new Date().getDate() - 14));
        const correctDateEnd = new Date(new Date().setDate(new Date().getDate() - 7));
        const selectedRange = {
            label: '',
            value: [correctDateStart, correctDateEnd]
        };
        datepickerContainerInstance.setMaxDateRangeOnCalendar(correctDateStart);
        datepickerContainerInstance.setRangeOnCalendar(selectedRange);
        fixture.detectChanges();
        datepickerContainerInstance[`_store`]
            .select(state => state)
            .subscribe(view => {
            expect(view.maxDate).toEqual(correctDateEnd);
        });
        const incorrectCaseStart = new Date(new Date().setDate(new Date().getDate() - 5));
        const incorrectCaseEnd = new Date(new Date().setDate(new Date().getDate() + 15));
        const selectedRange1 = {
            label: '',
            value: [incorrectCaseStart, incorrectCaseEnd]
        };
        datepickerContainerInstance.setMaxDateRangeOnCalendar(incorrectCaseStart);
        datepickerContainerInstance.setRangeOnCalendar(selectedRange1);
        fixture.detectChanges();
        datepickerContainerInstance[`_store`]
            .select(state => state)
            .subscribe(view => {
            expect(view.maxDate).not.toEqual(incorrectCaseEnd);
        });
    });
});
//# sourceMappingURL=bs-daterangepicker.spec.js.map