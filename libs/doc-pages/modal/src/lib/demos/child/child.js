import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
let DemoModalChildComponent = class DemoModalChildComponent {
    showChildModal() {
        this.childModal.show();
    }
    hideChildModal() {
        this.childModal.hide();
    }
};
__decorate([
    ViewChild('childModal', { static: false }),
    __metadata("design:type", ModalDirective)
], DemoModalChildComponent.prototype, "childModal", void 0);
DemoModalChildComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-modal-child',
        templateUrl: './child.html'
    })
], DemoModalChildComponent);
export { DemoModalChildComponent };
//# sourceMappingURL=child.js.map