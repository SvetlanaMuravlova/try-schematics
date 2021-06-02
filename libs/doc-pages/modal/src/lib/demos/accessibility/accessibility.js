import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
let DemoAccessibilityComponent = class DemoAccessibilityComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, {
            ariaDescribedby: 'my-modal-description',
            ariaLabelledBy: 'my-modal-title'
        });
    }
};
DemoAccessibilityComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-accessibility',
        templateUrl: './accessibility.html'
    }),
    __metadata("design:paramtypes", [BsModalService])
], DemoAccessibilityComponent);
export { DemoAccessibilityComponent };
//# sourceMappingURL=accessibility.js.map