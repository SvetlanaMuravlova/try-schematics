import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { TabsetConfig } from 'ngx-bootstrap/tabs';
export function getTabsetConfig() {
    return Object.assign(new TabsetConfig(), { type: 'tabs', isKeysAllowed: false });
}
let DemoDisabledKeyNavigationsComponent = class DemoDisabledKeyNavigationsComponent {
};
DemoDisabledKeyNavigationsComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-disabled-key-navigations',
        templateUrl: './disabled-key-navigations.html',
        providers: [{ provide: TabsetConfig, useFactory: getTabsetConfig }]
    })
], DemoDisabledKeyNavigationsComponent);
export { DemoDisabledKeyNavigationsComponent };
//# sourceMappingURL=disabled-key-navigations.js.map