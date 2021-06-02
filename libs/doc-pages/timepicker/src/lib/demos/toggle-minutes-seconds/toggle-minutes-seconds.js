import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoTimepickerToggleMinutesSecondsComponent = class DemoTimepickerToggleMinutesSecondsComponent {
    constructor() {
        this.myTime = new Date();
        this.showMin = true;
        this.showSec = true;
    }
    toggleMinutes() {
        this.showMin = !this.showMin;
    }
    toggleSeconds() {
        this.showSec = !this.showSec;
    }
};
DemoTimepickerToggleMinutesSecondsComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-timepicker-seconds',
        templateUrl: './toggle-minutes-seconds.html'
    })
], DemoTimepickerToggleMinutesSecondsComponent);
export { DemoTimepickerToggleMinutesSecondsComponent };
//# sourceMappingURL=toggle-minutes-seconds.js.map