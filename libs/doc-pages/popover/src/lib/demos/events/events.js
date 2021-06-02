import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoPopoverEventsComponent = class DemoPopoverEventsComponent {
    onShown() {
        this.message = 'shown';
    }
    onHidden() {
        this.message = 'hidden';
    }
};
DemoPopoverEventsComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-popover-events',
        templateUrl: './events.html'
    })
], DemoPopoverEventsComponent);
export { DemoPopoverEventsComponent };
//# sourceMappingURL=events.js.map