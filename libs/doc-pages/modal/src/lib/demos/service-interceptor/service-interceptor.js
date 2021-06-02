import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
let DemoModalServiceWithInterceptorComponent = class DemoModalServiceWithInterceptorComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    openModalWithInterceptor(confirmTemplate) {
        const closeInterceptor = () => {
            this.confirmPromise = new Promise((resolve, reject) => {
                this.confirmResolve = resolve;
                this.confirmReject = reject;
            });
            this.confirmModalRef = this.modalService.show(confirmTemplate, { class: 'modal-sm' });
            return this.confirmPromise;
        };
        this.bsModalRef = this.modalService.show(ModalContentWithInterceptorComponent, { closeInterceptor });
        this.bsModalRef.content.closeBtnName = 'Close';
    }
    confirm() {
        this.confirmResolve();
        this.confirmModalRef.hide();
    }
    decline() {
        this.confirmReject();
        this.confirmModalRef.hide();
    }
};
DemoModalServiceWithInterceptorComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-modal-service-interceptor',
        templateUrl: './service-interceptor.html'
    }),
    __metadata("design:paramtypes", [BsModalService])
], DemoModalServiceWithInterceptorComponent);
export { DemoModalServiceWithInterceptorComponent };
let ModalContentWithInterceptorComponent = class ModalContentWithInterceptorComponent {
    constructor(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
};
ModalContentWithInterceptorComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'modal-content-with-interceptor',
        template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">Modal with interceptor</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">This modal has closing interceptor</div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">Close</button>
    </div>
  `
    }),
    __metadata("design:paramtypes", [BsModalRef])
], ModalContentWithInterceptorComponent);
export { ModalContentWithInterceptorComponent };
//# sourceMappingURL=service-interceptor.js.map