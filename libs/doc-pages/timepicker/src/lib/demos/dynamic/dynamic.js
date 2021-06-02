import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoTimepickerDynamicComponent = class DemoTimepickerDynamicComponent {
    constructor() {
        this.mytime = new Date();
    }
    update() {
        const time = new Date();
        time.setHours(14);
        time.setMinutes(0);
        this.mytime = time;
    }
    changed() {
        console.log(`Time changed to: ${this.mytime}`);
    }
    clear() {
        this.mytime = void 0;
    }
};
DemoTimepickerDynamicComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-timepicker-dynamic',
        templateUrl: './dynamic.html'
    })
], DemoTimepickerDynamicComponent);
export { DemoTimepickerDynamicComponent };
//# sourceMappingURL=dynamic.js.map