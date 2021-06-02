var TooltipModule_1;
import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipContainerComponent } from './tooltip-container.component';
import { TooltipDirective } from './tooltip.directive';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
let TooltipModule = TooltipModule_1 = class TooltipModule {
    static forRoot() {
        return {
            ngModule: TooltipModule_1,
            providers: [ComponentLoaderFactory, PositioningService]
        };
    }
};
TooltipModule = TooltipModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [TooltipDirective, TooltipContainerComponent],
        exports: [TooltipDirective],
        entryComponents: [TooltipContainerComponent]
    })
], TooltipModule);
export { TooltipModule };
//# sourceMappingURL=tooltip.module.js.map