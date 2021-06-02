import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoDatepickerDatesDisabledComponent = class DemoDatepickerDatesDisabledComponent {
    constructor() {
        this.disabledDates = [
            new Date('2020-02-05'),
            new Date('2020-02-09')
        ];
    }
};
DemoDatepickerDatesDisabledComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-datepicker-datesdisabled',
        templateUrl: './disable-dates.html'
    })
], DemoDatepickerDatesDisabledComponent);
export { DemoDatepickerDatesDisabledComponent };
//# sourceMappingURL=disable-dates.js.map