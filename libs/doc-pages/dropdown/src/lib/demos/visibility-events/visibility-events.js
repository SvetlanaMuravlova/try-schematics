import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoDropdownVisibilityEventsComponent = class DemoDropdownVisibilityEventsComponent {
    constructor() {
        this.messages = [];
        this.message = 'onShown';
    }
    handler(value) {
        this.messages.push(`Event ${value} is fired`);
        this.messages = this.messages.length > 2 ? this.messages.slice(0, 1) : this.messages;
    }
};
DemoDropdownVisibilityEventsComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-dropdown-visibility-events',
        templateUrl: './visibility-events.html'
    })
], DemoDropdownVisibilityEventsComponent);
export { DemoDropdownVisibilityEventsComponent };
//# sourceMappingURL=visibility-events.js.map