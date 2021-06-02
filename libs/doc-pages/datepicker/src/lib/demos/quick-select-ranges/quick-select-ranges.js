import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoDatePickerQuickSelectRangesComponent = class DemoDatePickerQuickSelectRangesComponent {
    constructor() {
        this.ranges = [{
                value: [new Date(new Date().setDate(new Date().getDate() - 7)), new Date()],
                label: 'Last 7 Days'
            }, {
                value: [new Date(), new Date(new Date().setDate(new Date().getDate() + 7))],
                label: 'Next 7 Days'
            }];
    }
};
DemoDatePickerQuickSelectRangesComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-datepicker-quick-select-ranges',
        templateUrl: './quick-select-ranges.html'
    })
], DemoDatePickerQuickSelectRangesComponent);
export { DemoDatePickerQuickSelectRangesComponent };
//# sourceMappingURL=quick-select-ranges.js.map