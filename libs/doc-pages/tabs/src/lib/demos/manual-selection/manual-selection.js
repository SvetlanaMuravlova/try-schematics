import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
let DemoTabsManualSelectionComponent = class DemoTabsManualSelectionComponent {
    selectTab(tabId) {
        this.staticTabs.tabs[tabId].active = true;
    }
};
__decorate([
    ViewChild('staticTabs', { static: false }),
    __metadata("design:type", TabsetComponent)
], DemoTabsManualSelectionComponent.prototype, "staticTabs", void 0);
DemoTabsManualSelectionComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-tabs-manual-selection',
        templateUrl: './manual-selection.html'
    })
], DemoTabsManualSelectionComponent);
export { DemoTabsManualSelectionComponent };
//# sourceMappingURL=manual-selection.js.map