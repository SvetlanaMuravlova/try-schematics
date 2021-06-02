import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let DemoDatepickerMinMaxComponent = class DemoDatepickerMinMaxComponent {
    constructor() {
        this.minDate = new Date();
        this.maxDate = new Date();
        this.minDate.setDate(this.minDate.getDate() - 1);
        this.maxDate.setDate(this.maxDate.getDate() + 7);
    }
};
DemoDatepickerMinMaxComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-datepicker-min-max',
        templateUrl: './min-max.component.html'
    }),
    __metadata("design:paramtypes", [])
], DemoDatepickerMinMaxComponent);
export { DemoDatepickerMinMaxComponent };
//# sourceMappingURL=min-max.component.js.map