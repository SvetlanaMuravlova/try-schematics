import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
let DemoTimepickerCustomValidationComponent = class DemoTimepickerCustomValidationComponent {
    constructor() {
        this.ctrl = new FormControl('', (control) => {
            const value = control.value;
            if (!value) {
                return null;
            }
            const hours = value.getHours();
            if (hours < 11 || hours > 12) {
                return { outOfRange: true };
            }
            return null;
        });
    }
};
DemoTimepickerCustomValidationComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-timepicker-custom-validation',
        templateUrl: './custom-validation.html'
    })
], DemoTimepickerCustomValidationComponent);
export { DemoTimepickerCustomValidationComponent };
//# sourceMappingURL=custom-validation.js.map