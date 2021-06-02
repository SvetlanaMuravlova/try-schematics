import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
let DemoModalWithPopupsComponent = class DemoModalWithPopupsComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
};
DemoModalWithPopupsComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-modal-with-popups',
        templateUrl: './modal-with-popups.html'
    }),
    __metadata("design:paramtypes", [BsModalService])
], DemoModalWithPopupsComponent);
export { DemoModalWithPopupsComponent };
//# sourceMappingURL=modal-with-popups.js.map