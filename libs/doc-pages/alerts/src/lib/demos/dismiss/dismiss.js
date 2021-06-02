import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoAlertDismissComponent = class DemoAlertDismissComponent {
    constructor() {
        this.dismissible = true;
        this.defaultAlerts = [
            {
                type: 'success',
                msg: `You successfully read this important alert message.`
            },
            {
                type: 'info',
                msg: `This alert needs your attention, but it's not super important.`
            },
            {
                type: 'danger',
                msg: `Better check yourself, you're not looking too good.`
            }
        ];
        this.alerts = this.defaultAlerts;
    }
    reset() {
        this.alerts = this.defaultAlerts;
    }
    onClosed(dismissedAlert) {
        this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
    }
};
DemoAlertDismissComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-alert-dismiss',
        templateUrl: './dismiss.html'
    })
], DemoAlertDismissComponent);
export { DemoAlertDismissComponent };
//# sourceMappingURL=dismiss.js.map