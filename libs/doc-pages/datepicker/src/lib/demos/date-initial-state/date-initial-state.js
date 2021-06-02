import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let DemoDatepickerDateInitialStateComponent = class DemoDatepickerDateInitialStateComponent {
    constructor() {
        this.bsValue = new Date();
        this.maxDate = new Date();
        this.maxDate.setDate(this.maxDate.getDate() + 7);
        this.bsRangeValue = [this.bsValue, this.maxDate];
    }
};
DemoDatepickerDateInitialStateComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-datepicker-date-initial-state',
        templateUrl: './date-initial-state.html'
    }),
    __metadata("design:paramtypes", [])
], DemoDatepickerDateInitialStateComponent);
export { DemoDatepickerDateInitialStateComponent };
//# sourceMappingURL=date-initial-state.js.map