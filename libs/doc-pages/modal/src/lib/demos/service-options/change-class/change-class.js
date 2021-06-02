import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
let DemoModalServiceChangeClassComponent = class DemoModalServiceChangeClassComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.valueWidth = false;
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-sm' }));
    }
    setModalClass() {
        this.valueWidth = !this.valueWidth;
        const modalWidth = this.valueWidth ? 'modal-lg' : 'modal-sm';
        this.modalRef.setClass(modalWidth);
    }
};
DemoModalServiceChangeClassComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-modal-change-class',
        templateUrl: './change-class.html'
    }),
    __metadata("design:paramtypes", [BsModalService])
], DemoModalServiceChangeClassComponent);
export { DemoModalServiceChangeClassComponent };
//# sourceMappingURL=change-class.js.map