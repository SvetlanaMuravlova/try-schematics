import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
let DemoModalServiceFromComponent = class DemoModalServiceFromComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    openModalWithComponent() {
        const initialState = {
            list: [
                'Open a modal with component',
                'Pass your data',
                'Do something else',
                '...'
            ],
            title: 'Modal with component'
        };
        this.bsModalRef = this.modalService.show(ModalContentComponent, { initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
    }
};
DemoModalServiceFromComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-modal-service-component',
        templateUrl: './service-component.html'
    }),
    __metadata("design:paramtypes", [BsModalService])
], DemoModalServiceFromComponent);
export { DemoModalServiceFromComponent };
/* This is a component which we pass in modal*/
let ModalContentComponent = class ModalContentComponent {
    constructor(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.list = [];
    }
    ngOnInit() {
        this.list.push('PROFIT!!!');
    }
};
ModalContentComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'modal-content',
        template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">{{title}}</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <ul *ngIf="list.length">
        <li *ngFor="let item of list">{{item}}</li>
      </ul>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">{{closeBtnName}}</button>
    </div>
  `
    }),
    __metadata("design:paramtypes", [BsModalRef])
], ModalContentComponent);
export { ModalContentComponent };
//# sourceMappingURL=service-component.js.map