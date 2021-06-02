import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
let DemoModalServiceNestedComponent = class DemoModalServiceNestedComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, { id: 1, class: 'modal-lg' });
    }
    openModal2(template) {
        this.modalRef2 = this.modalService.show(template, { id: 2, class: 'second' });
    }
    closeFirstModal() {
        if (!this.modalRef) {
            return;
        }
        this.modalRef.hide();
        this.modalRef = null;
    }
    closeModal(modalId) {
        this.modalService.hide(modalId);
    }
};
DemoModalServiceNestedComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-modal-service-nested',
        templateUrl: './service-nested.html'
    }),
    __metadata("design:paramtypes", [BsModalService])
], DemoModalServiceNestedComponent);
export { DemoModalServiceNestedComponent };
//# sourceMappingURL=service-nested.js.map