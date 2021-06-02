import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CollapseDemoEventsComponent = class CollapseDemoEventsComponent {
    constructor() {
        this.isCollapsed = false;
        this.message = 'expanded';
    }
    collapsed() {
        this.message = 'collapsed';
    }
    collapses() {
        this.message = 'collapses';
    }
    expanded() {
        this.message = 'expanded';
    }
    expands() {
        this.message = 'expands';
    }
};
CollapseDemoEventsComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'collapse-demo-events',
        templateUrl: './events.html'
    })
], CollapseDemoEventsComponent);
export { CollapseDemoEventsComponent };
//# sourceMappingURL=events.js.map