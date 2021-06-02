import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AlertsSectionComponent } from './alerts-section.component';
import { DEMO_COMPONENTS } from './demos/index';
import { DocsModule } from '@ngx-bootstrap-doc/docs';
import { routes } from './demo-alerts.routes';
/* export */
export { AlertsSectionComponent } from './alerts-section.component';
let DemoAlertsModule = class DemoAlertsModule {
};
DemoAlertsModule.routes = routes;
DemoAlertsModule = __decorate([
    NgModule({
        declarations: [
            AlertsSectionComponent,
            ...DEMO_COMPONENTS
        ],
        imports: [
            AlertModule.forRoot(),
            CommonModule,
            DocsModule,
            RouterModule.forChild(routes)
        ],
        exports: [AlertsSectionComponent],
        entryComponents: [...DEMO_COMPONENTS]
    })
], DemoAlertsModule);
export { DemoAlertsModule };
//# sourceMappingURL=alerts.module.js.map