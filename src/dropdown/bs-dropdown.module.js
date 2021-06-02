var BsDropdownModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { BsDropdownContainerComponent } from './bs-dropdown-container.component';
import { BsDropdownMenuDirective } from './bs-dropdown-menu.directive';
import { BsDropdownToggleDirective } from './bs-dropdown-toggle.directive';
import { BsDropdownDirective } from './bs-dropdown.directive';
import { BsDropdownState } from './bs-dropdown.state';
let BsDropdownModule = BsDropdownModule_1 = class BsDropdownModule {
    static forRoot() {
        return {
            ngModule: BsDropdownModule_1,
            providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDropdownState
            ]
        };
    }
};
BsDropdownModule = BsDropdownModule_1 = __decorate([
    NgModule({
        declarations: [
            BsDropdownMenuDirective,
            BsDropdownToggleDirective,
            BsDropdownContainerComponent,
            BsDropdownDirective
        ],
        exports: [
            BsDropdownMenuDirective,
            BsDropdownToggleDirective,
            BsDropdownDirective
        ],
        entryComponents: [BsDropdownContainerComponent]
    })
], BsDropdownModule);
export { BsDropdownModule };
//# sourceMappingURL=bs-dropdown.module.js.map