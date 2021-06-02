import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoDatepickerMinModeComponent = class DemoDatepickerMinModeComponent {
    constructor() {
        this.datePickerValue = new Date(2020, 7);
        this.range1 = new Date(2020, 5);
        this.range2 = new Date(2020, 8);
        this.minMode = 'month';
    }
    ngOnInit() {
        this.dateRangePickerValue = [this.range1, this.range2];
        this.bsConfig = Object.assign({}, {
            minMode: this.minMode
        });
    }
};
DemoDatepickerMinModeComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-datepicker-min-mode',
        templateUrl: './min-mode.component.html'
    })
], DemoDatepickerMinModeComponent);
export { DemoDatepickerMinModeComponent };
//# sourceMappingURL=min-mode.component.js.map