import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let DemoTimepickerMinMaxComponent = class DemoTimepickerMinMaxComponent {
    constructor() {
        this.myTime = new Date();
        this.minTime = new Date();
        this.maxTime = new Date();
        this.minTime.setHours(8);
        this.minTime.setMinutes(0);
        this.maxTime.setHours(23);
        this.maxTime.setMinutes(55);
    }
};
DemoTimepickerMinMaxComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-timepicker-min-max',
        templateUrl: './min-max.html'
    }),
    __metadata("design:paramtypes", [])
], DemoTimepickerMinMaxComponent);
export { DemoTimepickerMinMaxComponent };
//# sourceMappingURL=min-max.js.map