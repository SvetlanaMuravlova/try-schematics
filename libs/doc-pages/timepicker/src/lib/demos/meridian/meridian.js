import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoTimepickerMeridianComponent = class DemoTimepickerMeridianComponent {
    constructor() {
        this.ismeridian = true;
        this.mytime = new Date();
    }
    toggleMode() {
        this.ismeridian = !this.ismeridian;
    }
};
DemoTimepickerMeridianComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-timepicker-meridian',
        templateUrl: './meridian.html'
    })
], DemoTimepickerMeridianComponent);
export { DemoTimepickerMeridianComponent };
//# sourceMappingURL=meridian.js.map