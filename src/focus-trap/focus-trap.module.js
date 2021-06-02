var FocusTrapModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusTrapManager } from './focus-trap-manager';
import { InteractivityChecker } from './interactivity-checker';
import { FocusTrapDirective } from './focus-trap';
import { Platform } from './platform';
let FocusTrapModule = FocusTrapModule_1 = class FocusTrapModule {
    static forRoot() {
        return {
            ngModule: FocusTrapModule_1,
            providers: [
                FocusTrapManager,
                Platform,
                InteractivityChecker
            ]
        };
    }
};
FocusTrapModule = FocusTrapModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [FocusTrapDirective],
        exports: [FocusTrapDirective]
    })
], FocusTrapModule);
export { FocusTrapModule };
//# sourceMappingURL=focus-trap.module.js.map