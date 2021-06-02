import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { PopoverConfig } from 'ngx-bootstrap/popover';
// such override allows to keep some initial values
export function getPopoverConfig() {
    return Object.assign(new PopoverConfig(), {
        placement: 'right',
        container: 'body',
        triggers: 'focus',
        delay: 500
    });
}
let DemoPopoverConfigComponent = class DemoPopoverConfigComponent {
};
DemoPopoverConfigComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-popover-config',
        templateUrl: './config.html',
        providers: [{ provide: PopoverConfig, useFactory: getPopoverConfig }]
    })
], DemoPopoverConfigComponent);
export { DemoPopoverConfigComponent };
//# sourceMappingURL=config.js.map