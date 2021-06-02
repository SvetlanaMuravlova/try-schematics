import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
let DemoButtonsRadioReactiveFormsComponent = class DemoButtonsRadioReactiveFormsComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.myForm = this.formBuilder.group({
            radio: 'C'
        });
    }
};
DemoButtonsRadioReactiveFormsComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-buttons-radio-reactiveforms',
        templateUrl: './radio-reactiveforms.html'
    }),
    __metadata("design:paramtypes", [FormBuilder])
], DemoButtonsRadioReactiveFormsComponent);
export { DemoButtonsRadioReactiveFormsComponent };
//# sourceMappingURL=radio-reactiveforms.js.map