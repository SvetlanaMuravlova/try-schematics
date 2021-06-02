import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
let DemoModalServiceDisableAnimationComponent = class DemoModalServiceDisableAnimationComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.config = {
            animated: true
        };
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, this.config);
    }
};
DemoModalServiceDisableAnimationComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-modal-service-disable-animation',
        templateUrl: './disable-animation.html'
    }),
    __metadata("design:paramtypes", [BsModalService])
], DemoModalServiceDisableAnimationComponent);
export { DemoModalServiceDisableAnimationComponent };
//# sourceMappingURL=disable-animation.js.map