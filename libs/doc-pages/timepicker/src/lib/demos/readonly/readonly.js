import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoTimepickerReadonlyComponent = class DemoTimepickerReadonlyComponent {
    constructor() {
        this.isMeridian = false;
        this.readonly = true;
        this.myTime = new Date();
    }
};
DemoTimepickerReadonlyComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-timepicker-readonly',
        templateUrl: './readonly.html'
    })
], DemoTimepickerReadonlyComponent);
export { DemoTimepickerReadonlyComponent };
//# sourceMappingURL=readonly.js.map