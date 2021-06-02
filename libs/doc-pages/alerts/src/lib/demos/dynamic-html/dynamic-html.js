import { __decorate, __metadata } from "tslib";
import { Component, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
let DemoAlertDynamicHtmlComponent = class DemoAlertDynamicHtmlComponent {
    constructor(sanitizer) {
        this.alerts = [
            {
                type: 'success',
                msg: `<strong>Well done!</strong> You successfully read this important alert message.`
            },
            {
                type: 'info',
                msg: `<strong>Heads up!</strong> This alert needs your attention, but it's not super important.`
            },
            {
                type: 'danger',
                msg: `<strong>Warning!</strong> Better check yourself, you're not looking too good.`
            }
        ];
        this.alerts = this.alerts.map((alert) => ({
            type: alert.type,
            msg: sanitizer.sanitize(SecurityContext.HTML, alert.msg)
        }));
    }
};
DemoAlertDynamicHtmlComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-alert-dynamic-html',
        templateUrl: './dynamic-html.html'
    }),
    __metadata("design:paramtypes", [DomSanitizer])
], DemoAlertDynamicHtmlComponent);
export { DemoAlertDynamicHtmlComponent };
//# sourceMappingURL=dynamic-html.js.map