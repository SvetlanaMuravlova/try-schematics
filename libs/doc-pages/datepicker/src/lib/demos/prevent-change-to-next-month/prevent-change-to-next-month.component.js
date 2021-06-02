import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let DemoDatepickerPreventChangeToNextMonthComponent = class DemoDatepickerPreventChangeToNextMonthComponent {
    constructor() {
        this.maxDate = new Date();
        this.maxDate.setDate(this.maxDate.getDate() + 7);
    }
};
DemoDatepickerPreventChangeToNextMonthComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-prevent-change-to-next-month',
        templateUrl: './prevent-change-to-next-month.component.html'
    }),
    __metadata("design:paramtypes", [])
], DemoDatepickerPreventChangeToNextMonthComponent);
export { DemoDatepickerPreventChangeToNextMonthComponent };
//# sourceMappingURL=prevent-change-to-next-month.component.js.map