var ProgressbarModule_1;
import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarComponent } from './bar.component';
import { ProgressbarComponent } from './progressbar.component';
let ProgressbarModule = ProgressbarModule_1 = class ProgressbarModule {
    static forRoot() {
        return { ngModule: ProgressbarModule_1, providers: [] };
    }
};
ProgressbarModule = ProgressbarModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [BarComponent, ProgressbarComponent],
        exports: [BarComponent, ProgressbarComponent]
    })
], ProgressbarModule);
export { ProgressbarModule };
//# sourceMappingURL=progressbar.module.js.map