var ButtonsModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { ButtonCheckboxDirective } from './button-checkbox.directive';
import { ButtonRadioDirective } from './button-radio.directive';
import { ButtonRadioGroupDirective } from './button-radio-group.directive';
let ButtonsModule = ButtonsModule_1 = class ButtonsModule {
    static forRoot() {
        return { ngModule: ButtonsModule_1, providers: [] };
    }
};
ButtonsModule = ButtonsModule_1 = __decorate([
    NgModule({
        declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective],
        exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective]
    })
], ButtonsModule);
export { ButtonsModule };
//# sourceMappingURL=buttons.module.js.map