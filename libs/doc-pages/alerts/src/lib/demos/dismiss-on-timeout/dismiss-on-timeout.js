import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoAlertTimeoutComponent = class DemoAlertTimeoutComponent {
    constructor() {
        this.alerts = [{
                type: 'success',
                msg: `Well done! You successfully read this important alert message. (added: ${new Date().toLocaleTimeString()})`,
                timeout: 5000
            }];
    }
    add() {
        this.alerts.push({
            type: 'info',
            msg: `This alert will be closed in 5 seconds (added: ${new Date().toLocaleTimeString()})`,
            timeout: 5000
        });
    }
    onClosed(dismissedAlert) {
        this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
    }
};
DemoAlertTimeoutComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-alert-timeout',
        templateUrl: './dismiss-on-timeout.html'
    })
], DemoAlertTimeoutComponent);
export { DemoAlertTimeoutComponent };
//# sourceMappingURL=dismiss-on-timeout.js.map