import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
let DemoModalEventsComponent = class DemoModalEventsComponent {
    showModal() {
        this.messages = [];
        this.modal.show();
    }
    handler(type, $event) {
        this.messages.push(`event ${type} is fired${$event.dismissReason
            ? ', dismissed by ' + $event.dismissReason
            : ''}`);
    }
};
__decorate([
    ViewChild(ModalDirective, { static: false }),
    __metadata("design:type", ModalDirective)
], DemoModalEventsComponent.prototype, "modal", void 0);
DemoModalEventsComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-modal-events',
        templateUrl: './events.html',
        styles: [`
    .card {
      margin-bottom: 0.75rem;
      padding: 8px;
    }
  `]
    })
], DemoModalEventsComponent);
export { DemoModalEventsComponent };
//# sourceMappingURL=events.js.map