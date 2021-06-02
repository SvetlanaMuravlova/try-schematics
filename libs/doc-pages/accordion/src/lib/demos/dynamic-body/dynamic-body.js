import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoAccordionDynamicBodyComponent = class DemoAccordionDynamicBodyComponent {
    constructor() {
        this.items = ['Item 1', 'Item 2', 'Item 3'];
    }
    addItem() {
        this.items.push(`Item ${this.items.length + 1}`);
    }
};
DemoAccordionDynamicBodyComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-accordion-dynamic-body',
        templateUrl: './dynamic-body.html'
    })
], DemoAccordionDynamicBodyComponent);
export { DemoAccordionDynamicBodyComponent };
//# sourceMappingURL=dynamic-body.js.map