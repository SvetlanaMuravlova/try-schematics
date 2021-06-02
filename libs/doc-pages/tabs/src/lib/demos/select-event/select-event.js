import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoTabsSelectEventComponent = class DemoTabsSelectEventComponent {
    onSelect(data) {
        this.value = data.heading;
    }
};
DemoTabsSelectEventComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-tabs-select-event',
        templateUrl: './select-event.html'
    })
], DemoTabsSelectEventComponent);
export { DemoTabsSelectEventComponent };
//# sourceMappingURL=select-event.js.map