import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { DocsModule } from '@ngx-bootstrap-doc/docs';
import { AccordionSectionComponent } from './accordion-section.component';
import { DEMO_COMPONENTS } from './demos/index';
import { routes } from './demo-accordion.routes';
/* export */
export { AccordionSectionComponent } from './accordion-section.component';
let DemoAccordionModule = class DemoAccordionModule {
};
DemoAccordionModule.routes = routes;
DemoAccordionModule = __decorate([
    NgModule({
        declarations: [
            AccordionSectionComponent,
            ...DEMO_COMPONENTS
        ],
        imports: [
            AccordionModule.forRoot(),
            CommonModule,
            FormsModule,
            DocsModule,
            RouterModule.forChild(routes)
        ],
        exports: [AccordionSectionComponent],
        entryComponents: [...DEMO_COMPONENTS]
    })
], DemoAccordionModule);
export { DemoAccordionModule };
//# sourceMappingURL=accordion.module.js.map