import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
let DemoAutoShownModalComponent = class DemoAutoShownModalComponent {
    constructor() {
        this.isModalShown = false;
    }
    showModal() {
        this.isModalShown = true;
    }
    hideModal() {
        this.autoShownModal.hide();
    }
    onHidden() {
        this.isModalShown = false;
    }
};
__decorate([
    ViewChild('autoShownModal', { static: false }),
    __metadata("design:type", ModalDirective)
], DemoAutoShownModalComponent.prototype, "autoShownModal", void 0);
DemoAutoShownModalComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-modal-auto-shown',
        templateUrl: './auto-shown.html'
    })
], DemoAutoShownModalComponent);
export { DemoAutoShownModalComponent };
//# sourceMappingURL=auto-shown.js.map