import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoTimepickerIsValidComponent = class DemoTimepickerIsValidComponent {
    constructor() {
        this.isMeridian = true;
        this.myTime = new Date();
        this.valid = true;
    }
    isValid(event) {
        this.valid = event;
    }
};
DemoTimepickerIsValidComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-timepicker-isvalid',
        templateUrl: './isvalid.html'
    })
], DemoTimepickerIsValidComponent);
export { DemoTimepickerIsValidComponent };
//# sourceMappingURL=isvalid.js.map