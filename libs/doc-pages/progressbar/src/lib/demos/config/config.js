import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ProgressbarConfig } from 'ngx-bootstrap/progressbar';
// such override allows to keep some initial values
export function getProgressbarConfig() {
    return Object.assign(new ProgressbarConfig(), { animate: true, striped: true, max: 150 });
}
let DemoProgressbarConfigComponent = class DemoProgressbarConfigComponent {
};
DemoProgressbarConfigComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-progressbar-config',
        templateUrl: './config.html',
        providers: [{ provide: ProgressbarConfig, useFactory: getProgressbarConfig }]
    })
], DemoProgressbarConfigComponent);
export { DemoProgressbarConfigComponent };
//# sourceMappingURL=config.js.map