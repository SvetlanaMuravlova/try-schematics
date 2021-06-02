var AccordionModule_1;
import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion.component';
import { AccordionPanelComponent } from './accordion-group.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
let AccordionModule = AccordionModule_1 = class AccordionModule {
    static forRoot() {
        return { ngModule: AccordionModule_1, providers: [] };
    }
};
AccordionModule = AccordionModule_1 = __decorate([
    NgModule({
        imports: [CommonModule, CollapseModule],
        declarations: [AccordionComponent, AccordionPanelComponent],
        exports: [AccordionComponent, AccordionPanelComponent]
    })
], AccordionModule);
export { AccordionModule };
//# sourceMappingURL=accordion.module.js.map