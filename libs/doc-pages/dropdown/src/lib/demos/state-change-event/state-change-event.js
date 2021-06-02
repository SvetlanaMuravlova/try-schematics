import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoDropdownStateChangeEventComponent = class DemoDropdownStateChangeEventComponent {
    onOpenChange(data) {
        this.text = data ? 'opened' : 'closed';
    }
};
DemoDropdownStateChangeEventComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-dropdown-state-change-event',
        templateUrl: './state-change-event.html'
    })
], DemoDropdownStateChangeEventComponent);
export { DemoDropdownStateChangeEventComponent };
//# sourceMappingURL=state-change-event.js.map