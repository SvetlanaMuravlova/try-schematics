import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { DocsModule } from '@ngx-bootstrap-doc/docs';
import { TimepickerSectionComponent } from './timepicker-section.component';
import { DEMO_COMPONENTS } from './demos/index';
import { routes } from './demo-timepicker.routes';
/*exports*/
export { TimepickerSectionComponent } from './timepicker-section.component';
let DemoTimepickerModule = class DemoTimepickerModule {
};
DemoTimepickerModule = __decorate([
    NgModule({
        declarations: [
            TimepickerSectionComponent,
            ...DEMO_COMPONENTS
        ],
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            DocsModule,
            TimepickerModule.forRoot(),
            RouterModule.forChild(routes)
        ],
        exports: [TimepickerSectionComponent],
        entryComponents: [...DEMO_COMPONENTS]
    })
], DemoTimepickerModule);
export { DemoTimepickerModule };
//# sourceMappingURL=timepicker.module.js.map