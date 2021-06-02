import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
let DemoDatepickerReactiveFormsComponent = class DemoDatepickerReactiveFormsComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.myForm = this.formBuilder.group({
            date: null,
            range: null
        });
    }
};
DemoDatepickerReactiveFormsComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-datepicker-reactive-forms',
        templateUrl: './reactive-forms.component.html'
    }),
    __metadata("design:paramtypes", [FormBuilder])
], DemoDatepickerReactiveFormsComponent);
export { DemoDatepickerReactiveFormsComponent };
//# sourceMappingURL=reactive-forms.component.js.map