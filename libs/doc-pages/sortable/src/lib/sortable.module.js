import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { DocsModule } from '@ngx-bootstrap-doc/docs';
import { SortableSectionComponent } from './sortable-section.component';
import { DEMO_COMPONENTS } from './demos/index';
import { routes } from './demo-sortable.routes';
/*exports*/
export { SortableSectionComponent } from './sortable-section.component';
let DemoSortableModule = class DemoSortableModule {
};
DemoSortableModule = __decorate([
    NgModule({
        declarations: [
            SortableSectionComponent,
            ...DEMO_COMPONENTS
        ],
        imports: [
            CommonModule,
            FormsModule,
            DocsModule,
            SortableModule.forRoot(),
            RouterModule.forChild(routes)
        ],
        exports: [SortableSectionComponent],
        entryComponents: [...DEMO_COMPONENTS]
    })
], DemoSortableModule);
export { DemoSortableModule };
//# sourceMappingURL=sortable.module.js.map