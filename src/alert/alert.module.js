var AlertModule_1;
import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert.component';
let AlertModule = AlertModule_1 = class AlertModule {
    static forRoot() {
        return { ngModule: AlertModule_1, providers: [] };
    }
};
AlertModule = AlertModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [AlertComponent],
        exports: [AlertComponent],
        entryComponents: [AlertComponent]
    })
], AlertModule);
export { AlertModule };
//# sourceMappingURL=alert.module.js.map