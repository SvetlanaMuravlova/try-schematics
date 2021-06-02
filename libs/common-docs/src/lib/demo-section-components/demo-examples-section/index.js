import { __decorate } from "tslib";
/**
 * @author ng-team
 * @copyright ng-bootstrap
 */
// todo: add configuration of base url for source code
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesComponent } from './examples.component';
import { NgApiDocModule } from '../../api-docs/index';
import { RouterModule } from '@angular/router';
export { ExamplesComponent } from './examples.component';
let ExamplesComponentModule = class ExamplesComponentModule {
};
ExamplesComponentModule = __decorate([
    NgModule({
        declarations: [
            ExamplesComponent
        ],
        imports: [
            CommonModule,
            NgApiDocModule,
            RouterModule
        ],
        exports: [
            ExamplesComponent,
            RouterModule
        ],
        providers: []
    })
], ExamplesComponentModule);
export { ExamplesComponentModule };
//# sourceMappingURL=index.js.map