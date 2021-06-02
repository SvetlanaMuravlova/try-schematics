import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let DemoDatepickerInlineComponent = class DemoDatepickerInlineComponent {
    constructor() {
        this.bsInlineValue = new Date();
        this.maxDate = new Date();
        this.maxDate.setDate(this.maxDate.getDate() + 7);
        this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
    }
};
DemoDatepickerInlineComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-datepicker-inline',
        templateUrl: './inline-datepicker.component.html'
    }),
    __metadata("design:paramtypes", [])
], DemoDatepickerInlineComponent);
export { DemoDatepickerInlineComponent };
//# sourceMappingURL=inline-datepicker.component.js.map