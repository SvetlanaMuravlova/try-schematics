import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoDatePickerVisibilityEventsComponent = class DemoDatePickerVisibilityEventsComponent {
    constructor() {
        this.messages = [];
        this.message = 'onShown';
    }
    handler(value) {
        if (this.message === value) {
            this.messages = [];
        }
        this.messages.push(`Event ${value} is fired`);
    }
};
DemoDatePickerVisibilityEventsComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-datepicker-visibility-events',
        templateUrl: './visibility-events.html'
    })
], DemoDatePickerVisibilityEventsComponent);
export { DemoDatePickerVisibilityEventsComponent };
//# sourceMappingURL=visibility-events.js.map