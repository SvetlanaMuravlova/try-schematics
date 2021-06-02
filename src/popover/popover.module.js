var PopoverModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { PopoverDirective } from './popover.directive';
import { PopoverContainerComponent } from './popover-container.component';
let PopoverModule = PopoverModule_1 = class PopoverModule {
    static forRoot() {
        return {
            ngModule: PopoverModule_1,
            providers: [ComponentLoaderFactory, PositioningService]
        };
    }
};
PopoverModule = PopoverModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [PopoverDirective, PopoverContainerComponent],
        exports: [PopoverDirective],
        entryComponents: [PopoverContainerComponent]
    })
], PopoverModule);
export { PopoverModule };
//# sourceMappingURL=popover.module.js.map