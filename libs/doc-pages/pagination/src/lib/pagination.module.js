import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { DocsModule } from '@ngx-bootstrap-doc/docs';
import { PaginationSectionComponent } from './pagination-section.component';
import { DEMO_COMPONENTS } from './demos/index';
import { routes } from './demo-pagination.routes';
/*exports*/
export { PaginationSectionComponent } from './pagination-section.component';
let DemoPaginationModule = class DemoPaginationModule {
};
DemoPaginationModule = __decorate([
    NgModule({
        declarations: [
            PaginationSectionComponent,
            ...DEMO_COMPONENTS
        ],
        imports: [
            PaginationModule.forRoot(),
            CommonModule,
            FormsModule,
            DocsModule,
            RouterModule.forChild(routes)
        ],
        exports: [PaginationSectionComponent],
        entryComponents: [...DEMO_COMPONENTS]
    })
], DemoPaginationModule);
export { DemoPaginationModule };
//# sourceMappingURL=pagination.module.js.map