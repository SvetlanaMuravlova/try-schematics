import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { combineLatest } from 'rxjs';
let DemoModalRefEventsComponent = class DemoModalRefEventsComponent {
    constructor(modalService, changeDetection) {
        this.modalService = modalService;
        this.changeDetection = changeDetection;
        this.subscriptions = [];
        this.messages = [];
    }
    openModal(template) {
        this.messages = [];
        this.modalRef = this.modalService.show(template);
        const _combine = combineLatest(this.modalRef.onHide, this.modalRef.onHidden).subscribe(() => this.changeDetection.markForCheck());
        this.subscriptions.push(this.modalRef.onHide.subscribe((reason) => {
            if (typeof reason !== 'string') {
                reason = `onHide(), modalId is : ${reason.id}`;
            }
            const _reason = reason ? `, dismissed by ${reason}` : '';
            this.messages.push(`onHide event has been fired${_reason}`);
        }));
        this.subscriptions.push(this.modalRef.onHidden.subscribe((reason) => {
            if (typeof reason !== 'string') {
                reason = `onHide(), modalId is : ${reason.id}`;
            }
            const _reason = reason ? `, dismissed by ${reason}` : '';
            this.messages.push(`onHidden event has been fired${_reason}`);
            this.unsubscribe();
        }));
        this.subscriptions.push(_combine);
    }
    unsubscribe() {
        this.subscriptions.forEach((subscription) => {
            subscription.unsubscribe();
        });
        this.subscriptions = [];
    }
};
DemoModalRefEventsComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-modal-ref-events',
        templateUrl: './modal-ref-events.html',
        styles: [`
    .card {
      margin-bottom: 0.75rem;
      padding: 8px;
    }
  `]
    }),
    __metadata("design:paramtypes", [BsModalService, ChangeDetectorRef])
], DemoModalRefEventsComponent);
export { DemoModalRefEventsComponent };
//# sourceMappingURL=modal-ref-events.js.map