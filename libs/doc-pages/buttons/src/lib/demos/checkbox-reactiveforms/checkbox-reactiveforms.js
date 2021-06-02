import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
let DemoButtonsCheckboxReactiveFormsComponent = class DemoButtonsCheckboxReactiveFormsComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.myForm = this.formBuilder.group({
            left: false,
            middle: true,
            right: false
        });
    }
};
DemoButtonsCheckboxReactiveFormsComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-buttons-checkbox-reactiveforms',
        templateUrl: './checkbox-reactiveforms.html'
    }),
    __metadata("design:paramtypes", [FormBuilder])
], DemoButtonsCheckboxReactiveFormsComponent);
export { DemoButtonsCheckboxReactiveFormsComponent };
//# sourceMappingURL=checkbox-reactiveforms.js.map