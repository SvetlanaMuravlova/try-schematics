import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
let DemoModalServiceDisableBackdropComponent = class DemoModalServiceDisableBackdropComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.config = {
            backdrop: true,
            ignoreBackdropClick: false
        };
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, this.config);
    }
};
DemoModalServiceDisableBackdropComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-modal-service-disable-backdrop',
        templateUrl: './disable-backdrop.html'
    }),
    __metadata("design:paramtypes", [BsModalService])
], DemoModalServiceDisableBackdropComponent);
export { DemoModalServiceDisableBackdropComponent };
//# sourceMappingURL=disable-backdrop.js.map