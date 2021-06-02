import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AlertConfig } from 'ngx-bootstrap/alert';
// such override allows to keep some initial values
export function getAlertConfig() {
    return Object.assign(new AlertConfig(), { type: 'success' });
}
let DemoAlertConfigComponent = class DemoAlertConfigComponent {
};
DemoAlertConfigComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-alert-config',
        templateUrl: './config.html',
        providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
    })
], DemoAlertConfigComponent);
export { DemoAlertConfigComponent };
//# sourceMappingURL=config.js.map