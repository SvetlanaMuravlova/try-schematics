import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DocsModule } from '@ngx-bootstrap-doc/docs';
import { ButtonsSectionComponent } from './buttons-section.component';
import { DEMO_COMPONENTS } from './demos/index';
import { routes } from './demo-buttons.routes';
/* export */
export { ButtonsSectionComponent } from './buttons-section.component';
let DemoButtonsModule = class DemoButtonsModule {
};
DemoButtonsModule = __decorate([
    NgModule({
        declarations: [
            ButtonsSectionComponent,
            ...DEMO_COMPONENTS
        ],
        imports: [
            FormsModule,
            ReactiveFormsModule,
            CommonModule,
            DocsModule,
            RouterModule.forChild(routes),
            ButtonsModule.forRoot()
        ],
        exports: [ButtonsSectionComponent],
        entryComponents: [...DEMO_COMPONENTS]
    })
], DemoButtonsModule);
export { DemoButtonsModule };
//# sourceMappingURL=buttons.module.js.map