import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { TooltipConfig } from 'ngx-bootstrap/tooltip';
// such override allows to keep some initial values
export function getAlertConfig() {
    return Object.assign(new TooltipConfig(), {
        placement: 'right',
        container: 'body',
        delay: 500
    });
}
let DemoTooltipConfigComponent = class DemoTooltipConfigComponent {
};
DemoTooltipConfigComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-tooltip-config',
        templateUrl: './config.html',
        providers: [{ provide: TooltipConfig, useFactory: getAlertConfig }]
    })
], DemoTooltipConfigComponent);
export { DemoTooltipConfigComponent };
//# sourceMappingURL=config.js.map