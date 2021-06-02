var PaginationModule_1;
import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagerComponent } from './pager.component';
import { PaginationComponent } from './pagination.component';
let PaginationModule = PaginationModule_1 = class PaginationModule {
    static forRoot() {
        return { ngModule: PaginationModule_1, providers: [] };
    }
};
PaginationModule = PaginationModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [PagerComponent, PaginationComponent],
        exports: [PagerComponent, PaginationComponent]
    })
], PaginationModule);
export { PaginationModule };
//# sourceMappingURL=pagination.module.js.map