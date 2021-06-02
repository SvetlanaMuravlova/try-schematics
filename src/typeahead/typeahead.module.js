var TypeaheadModule_1;
import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TypeaheadContainerComponent } from './typeahead-container.component';
import { TypeaheadDirective } from './typeahead.directive';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
let TypeaheadModule = TypeaheadModule_1 = class TypeaheadModule {
    static forRoot() {
        return {
            ngModule: TypeaheadModule_1,
            providers: [ComponentLoaderFactory, PositioningService]
        };
    }
};
TypeaheadModule = TypeaheadModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [TypeaheadContainerComponent, TypeaheadDirective],
        exports: [TypeaheadContainerComponent, TypeaheadDirective],
        entryComponents: [TypeaheadContainerComponent]
    })
], TypeaheadModule);
export { TypeaheadModule };
//# sourceMappingURL=typeahead.module.js.map