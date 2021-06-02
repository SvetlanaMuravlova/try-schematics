import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
let DemoModalServiceStaticComponent = class DemoModalServiceStaticComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
};
DemoModalServiceStaticComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-modal-service-static',
        templateUrl: './service-template.html'
    }),
    __metadata("design:paramtypes", [BsModalService])
], DemoModalServiceStaticComponent);
export { DemoModalServiceStaticComponent };
//# sourceMappingURL=service-template.js.map