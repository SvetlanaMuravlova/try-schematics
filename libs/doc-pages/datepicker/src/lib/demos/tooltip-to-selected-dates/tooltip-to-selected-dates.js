import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoDatePickerTooltipToSelectedDates = 
// eslint-disable-next-line @angular-eslint/component-class-suffix
class DemoDatePickerTooltipToSelectedDates {
    constructor() {
        this.selectedDates = [{ date: new Date('2020-08-08'), tooltipText: '8th of August' },
            { date: new Date('2020-08-09'), tooltipText: '9th of August' },
            { date: new Date('2020-08-07'), tooltipText: '7th of August' }
        ];
    }
};
DemoDatePickerTooltipToSelectedDates = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-datepicker-tooltip-to-selected-dates',
        templateUrl: './tooltip-to-selected-dates.html'
    })
    // eslint-disable-next-line @angular-eslint/component-class-suffix
], DemoDatePickerTooltipToSelectedDates);
export { DemoDatePickerTooltipToSelectedDates };
//# sourceMappingURL=tooltip-to-selected-dates.js.map