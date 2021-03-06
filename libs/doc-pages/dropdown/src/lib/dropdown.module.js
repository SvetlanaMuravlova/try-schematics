import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DocsModule } from '@ngx-bootstrap-doc/docs';
import { DropdownSectionComponent } from './dropdown-section.component';
import { DEMO_COMPONENTS } from './demos/index';
import { routes } from './demo-dropdown.routes';
/*exports*/
export { DropdownSectionComponent } from './dropdown-section.component';
let DemoDropdownModule = class DemoDropdownModule {
};
DemoDropdownModule = __decorate([
    NgModule({
        declarations: [
            DropdownSectionComponent,
            ...DEMO_COMPONENTS
        ],
        imports: [
            BsDropdownModule.forRoot(),
            CommonModule,
            FormsModule,
            DocsModule,
            RouterModule.forChild(routes)
        ],
        exports: [DropdownSectionComponent],
        entryComponents: [...DEMO_COMPONENTS]
    })
], DemoDropdownModule);
export { DemoDropdownModule };
//# sourceMappingURL=dropdown.module.js.map