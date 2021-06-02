import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { TabsetConfig } from 'ngx-bootstrap/tabs';
// such override allows to keep some initial values
export function getTabsetConfig() {
    return Object.assign(new TabsetConfig(), { type: 'pills', isKeysAllowed: true });
}
let DemoTabsConfigComponent = class DemoTabsConfigComponent {
};
DemoTabsConfigComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-tabs-config',
        templateUrl: './config.html',
        providers: [{ provide: TabsetConfig, useFactory: getTabsetConfig }]
    })
], DemoTabsConfigComponent);
export { DemoTabsConfigComponent };
//# sourceMappingURL=config.js.map