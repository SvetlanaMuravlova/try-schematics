import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
let DemoTimepickerFormComponent = class DemoTimepickerFormComponent {
    constructor() {
        this.form = new FormGroup({
            myControl: new FormControl(new Date())
        });
    }
};
DemoTimepickerFormComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-timepicker-form',
        templateUrl: './form.html'
    })
], DemoTimepickerFormComponent);
export { DemoTimepickerFormComponent };
//# sourceMappingURL=form.js.map