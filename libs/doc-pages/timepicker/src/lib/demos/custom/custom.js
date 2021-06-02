import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoTimepickerCustomComponent = class DemoTimepickerCustomComponent {
    constructor() {
        this.hstep = 1;
        this.mstep = 15;
        this.sstep = 10;
        this.mytime = new Date();
        this.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30],
            sstep: [5, 10, 20, 30]
        };
    }
};
DemoTimepickerCustomComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-timepicker-custom',
        templateUrl: './custom.html'
    })
], DemoTimepickerCustomComponent);
export { DemoTimepickerCustomComponent };
//# sourceMappingURL=custom.js.map