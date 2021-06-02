import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoTimepickerCustomMeridianComponent = class DemoTimepickerCustomMeridianComponent {
    constructor() {
        this.mytime = new Date();
        this.meridians = ['AM(Midnight to Noon)', 'PM(Noon to Midnight)'];
    }
};
DemoTimepickerCustomMeridianComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-timepicker-custom-meridian',
        templateUrl: './custom-meridian.html'
    })
], DemoTimepickerCustomMeridianComponent);
export { DemoTimepickerCustomMeridianComponent };
//# sourceMappingURL=custom-meridian.js.map