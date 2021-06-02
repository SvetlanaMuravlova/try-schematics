import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
let DemoModalServiceCustomCSSClassComponent = class DemoModalServiceCustomCSSClassComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    openModalWithClass(template) {
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
    }
};
DemoModalServiceCustomCSSClassComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-modal-service-custom-css-class',
        templateUrl: './custom-css-class.html'
    }),
    __metadata("design:paramtypes", [BsModalService])
], DemoModalServiceCustomCSSClassComponent);
export { DemoModalServiceCustomCSSClassComponent };
//# sourceMappingURL=custom-css-class.js.map