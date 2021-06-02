import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let DemoDateRangePickerMaxDateRangeComponent = class DemoDateRangePickerMaxDateRangeComponent {
    constructor() {
        this.maxDate = new Date();
        this.maxDate.setDate(this.maxDate.getDate() + 30);
    }
};
DemoDateRangePickerMaxDateRangeComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-datepicker-max-date-range',
        templateUrl: './max-date-range.html'
    }),
    __metadata("design:paramtypes", [])
], DemoDateRangePickerMaxDateRangeComponent);
export { DemoDateRangePickerMaxDateRangeComponent };
//# sourceMappingURL=max-date-range.js.map