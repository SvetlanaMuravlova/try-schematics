import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let DemoDateRangePickerDisplayOneMonth = 
// eslint-disable-next-line @angular-eslint/component-class-suffix
class DemoDateRangePickerDisplayOneMonth {
    constructor() {
        this.today = new Date();
        this.minDate = new Date(this.today.getFullYear(), this.today.getMonth(), 2);
        this.maxDate = new Date(this.today.getFullYear(), this.today.getMonth(), 25);
    }
};
DemoDateRangePickerDisplayOneMonth = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-daterangepicker-display-one-month',
        templateUrl: './display-one-month.html'
    })
    // eslint-disable-next-line @angular-eslint/component-class-suffix
    ,
    __metadata("design:paramtypes", [])
], DemoDateRangePickerDisplayOneMonth);
export { DemoDateRangePickerDisplayOneMonth };
//# sourceMappingURL=display-one-month.js.map