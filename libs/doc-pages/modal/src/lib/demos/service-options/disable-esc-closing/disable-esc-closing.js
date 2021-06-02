import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
let DemoModalServiceDisableEscClosingComponent = class DemoModalServiceDisableEscClosingComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.config = {
            keyboard: true
        };
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, this.config);
    }
};
DemoModalServiceDisableEscClosingComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-modal-service-disable-esc-closing',
        templateUrl: './disable-esc-closing.html'
    }),
    __metadata("design:paramtypes", [BsModalService])
], DemoModalServiceDisableEscClosingComponent);
export { DemoModalServiceDisableEscClosingComponent };
//# sourceMappingURL=disable-esc-closing.js.map