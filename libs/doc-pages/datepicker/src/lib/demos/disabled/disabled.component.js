import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoDatepickerDisabledComponent = class DemoDatepickerDisabledComponent {
    constructor() {
        this.isDisabled = false;
    }
    toggleDisabling() {
        this.isDisabled = !this.isDisabled;
    }
};
DemoDatepickerDisabledComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-datepicker-disabled',
        templateUrl: './disabled.component.html'
    })
], DemoDatepickerDisabledComponent);
export { DemoDatepickerDisabledComponent };
//# sourceMappingURL=disabled.component.js.map