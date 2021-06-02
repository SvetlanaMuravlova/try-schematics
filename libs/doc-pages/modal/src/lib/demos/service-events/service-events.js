import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { combineLatest } from 'rxjs';
let DemoModalServiceEventsComponent = class DemoModalServiceEventsComponent {
    constructor(modalService, changeDetection) {
        this.modalService = modalService;
        this.changeDetection = changeDetection;
        this.subscriptions = [];
        this.messages = [];
    }
    openModal(template) {
        this.messages = [];
        const _combine = combineLatest(this.modalService.onShow, this.modalService.onShown, this.modalService.onHide, this.modalService.onHidden).subscribe(() => this.changeDetection.markForCheck());
        this.subscriptions.push(this.modalService.onShow.subscribe(() => {
            this.messages.push(`onShow event has been fired`);
        }));
        this.subscriptions.push(this.modalService.onShown.subscribe(() => {
            this.messages.push(`onShown event has been fired`);
        }));
        this.subscriptions.push(this.modalService.onHide.subscribe((reason) => {
            if (typeof reason !== 'string') {
                reason = `onHide(), modalId is : ${reason.id}`;
            }
            const _reason = reason ? `, dismissed by ${reason}` : '';
            this.messages.push(`onHide event has been fired${_reason}`);
        }));
        this.subscriptions.push(this.modalService.onHidden.subscribe((reason) => {
            if (typeof reason !== 'string') {
                reason = `onHide(), modalId is : ${reason.id}`;
            }
            const _reason = reason ? `, dismissed by ${reason}` : '';
            this.messages.push(`onHidden event has been fired${_reason}`);
            this.unsubscribe();
        }));
        this.subscriptions.push(_combine);
        this.modalRef = this.modalService.show(template);
    }
    unsubscribe() {
        this.subscriptions.forEach((subscription) => {
            subscription.unsubscribe();
        });
        this.subscriptions = [];
    }
};
DemoModalServiceEventsComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-modal-service-events',
        templateUrl: './service-events.html',
        styles: [`
    .card {
      margin-bottom: 0.75rem;
      padding: 8px;
    }
  `]
    }),
    __metadata("design:paramtypes", [BsModalService, ChangeDetectorRef])
], DemoModalServiceEventsComponent);
export { DemoModalServiceEventsComponent };
//# sourceMappingURL=service-events.js.map