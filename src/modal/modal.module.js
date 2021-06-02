var ModalModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { FocusTrapModule } from 'ngx-bootstrap/focus-trap';
import { ModalBackdropComponent } from './modal-backdrop.component';
import { ModalDirective } from './modal.directive';
import { ModalContainerComponent } from './modal-container.component';
import { BsModalService } from './bs-modal.service';
export const focusTrapModule = FocusTrapModule.forRoot();
let ModalModule = ModalModule_1 = class ModalModule {
    static forRoot() {
        return {
            ngModule: ModalModule_1,
            providers: [BsModalService, ComponentLoaderFactory, PositioningService]
        };
    }
    static forChild() {
        return {
            ngModule: ModalModule_1,
            providers: [BsModalService, ComponentLoaderFactory, PositioningService]
        };
    }
};
ModalModule = ModalModule_1 = __decorate([
    NgModule({
        imports: [FocusTrapModule],
        declarations: [
            ModalBackdropComponent,
            ModalDirective,
            ModalContainerComponent
        ],
        exports: [ModalBackdropComponent, ModalDirective],
        entryComponents: [ModalBackdropComponent, ModalContainerComponent]
    })
], ModalModule);
export { ModalModule };
//# sourceMappingURL=modal.module.js.map