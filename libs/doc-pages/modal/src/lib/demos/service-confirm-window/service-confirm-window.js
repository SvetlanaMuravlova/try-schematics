import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
let DemoModalServiceConfirmWindowComponent = class DemoModalServiceConfirmWindowComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    }
    confirm() {
        this.message = 'Confirmed!';
        this.modalRef.hide();
    }
    decline() {
        this.message = 'Declined!';
        this.modalRef.hide();
    }
};
DemoModalServiceConfirmWindowComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-modal-service-confirm-window',
        templateUrl: './service-confirm-window.html'
    }),
    __metadata("design:paramtypes", [BsModalService])
], DemoModalServiceConfirmWindowComponent);
export { DemoModalServiceConfirmWindowComponent };
//# sourceMappingURL=service-confirm-window.js.map