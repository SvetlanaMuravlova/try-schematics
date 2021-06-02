import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
let DemoModalScrollingLongContentComponent = class DemoModalScrollingLongContentComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.items = Array(15).fill(0);
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
};
DemoModalScrollingLongContentComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-modal-scrolling-long-content',
        templateUrl: './scrolling-long-content.html'
    }),
    __metadata("design:paramtypes", [BsModalService])
], DemoModalScrollingLongContentComponent);
export { DemoModalScrollingLongContentComponent };
//# sourceMappingURL=scrolling-long-content.js.map