import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
let DemoTabsDisabledComponent = class DemoTabsDisabledComponent {
    disableEnable() {
        this.staticTabs.tabs[2].disabled = !this.staticTabs.tabs[2].disabled;
    }
};
__decorate([
    ViewChild('staticTabs', { static: false }),
    __metadata("design:type", TabsetComponent)
], DemoTabsDisabledComponent.prototype, "staticTabs", void 0);
DemoTabsDisabledComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-tabs-disabled',
        templateUrl: './disabled.html'
    })
], DemoTabsDisabledComponent);
export { DemoTabsDisabledComponent };
//# sourceMappingURL=disabled.js.map