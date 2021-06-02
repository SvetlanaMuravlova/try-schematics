import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoTimepickerDisabledComponent = class DemoTimepickerDisabledComponent {
    constructor() {
        this.isMeridian = true;
        this.isDisabled = true;
        this.myTime = new Date();
    }
};
DemoTimepickerDisabledComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-timepicker-disabled',
        templateUrl: './disabled.html'
    })
], DemoTimepickerDisabledComponent);
export { DemoTimepickerDisabledComponent };
//# sourceMappingURL=disabled.js.map