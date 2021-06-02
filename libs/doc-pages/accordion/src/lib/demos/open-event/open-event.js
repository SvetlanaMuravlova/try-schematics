import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoAccordionOpenEventComponent = class DemoAccordionOpenEventComponent {
    log(event) {
        console.log(`Accordion has been ${event ? 'opened' : 'closed'}`);
    }
};
DemoAccordionOpenEventComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-accordion-open-event',
        templateUrl: './open-event.html'
    })
], DemoAccordionOpenEventComponent);
export { DemoAccordionOpenEventComponent };
//# sourceMappingURL=open-event.js.map