import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertConfig } from './alert.config';
import { OnChange } from 'ngx-bootstrap/utils';
let AlertComponent = class AlertComponent {
    constructor(_config, changeDetection) {
        this.changeDetection = changeDetection;
        /** Alert type.
         * Provides one of four bootstrap supported contextual classes:
         * `success`, `info`, `warning` and `danger`
         */
        this.type = 'warning';
        /** If set, displays an inline "Close" button */
        this.dismissible = false;
        /** Is alert visible */
        this.isOpen = true;
        /** This event fires immediately after close instance method is called,
         * $event is an instance of Alert component.
         */
        this.onClose = new EventEmitter();
        /** This event fires when alert closed, $event is an instance of Alert component */
        this.onClosed = new EventEmitter();
        this.classes = '';
        this.dismissibleChange = new EventEmitter();
        Object.assign(this, _config);
        this.dismissibleChange.subscribe(( /*dismissible: boolean*/) => {
            this.classes = this.dismissible ? 'alert-dismissible' : '';
            this.changeDetection.markForCheck();
        });
    }
    ngOnInit() {
        if (this.dismissOnTimeout) {
            // if dismissOnTimeout used as attr without binding, it will be a string
            setTimeout(() => this.close(), parseInt(this.dismissOnTimeout, 10));
        }
    }
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     */
    close() {
        if (!this.isOpen) {
            return;
        }
        this.onClose.emit(this);
        this.isOpen = false;
        this.changeDetection.markForCheck();
        this.onClosed.emit(this);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], AlertComponent.prototype, "type", void 0);
__decorate([
    OnChange(),
    Input(),
    __metadata("design:type", Object)
], AlertComponent.prototype, "dismissible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AlertComponent.prototype, "dismissOnTimeout", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AlertComponent.prototype, "isOpen", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], AlertComponent.prototype, "onClose", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], AlertComponent.prototype, "onClosed", void 0);
AlertComponent = __decorate([
    Component({
        selector: 'alert,bs-alert',
        templateUrl: './alert.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [AlertConfig, ChangeDetectorRef])
], AlertComponent);
export { AlertComponent };
//# sourceMappingURL=alert.component.js.map