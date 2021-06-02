import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoAccordionDynamicComponent = class DemoAccordionDynamicComponent {
    constructor() {
        this.groups = [
            {
                title: 'Dynamic Group Header - 1',
                content: 'Dynamic Group Body - 1'
            },
            {
                title: 'Dynamic Group Header - 2',
                content: 'Dynamic Group Body - 2'
            }
        ];
    }
    addGroupItem() {
        this.groups.push({
            title: `Dynamic Group Header - ${this.groups.length + 1}`,
            content: `Dynamic Group Body - ${this.groups.length + 1}`
        });
    }
};
DemoAccordionDynamicComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-accordion-dynamic',
        templateUrl: './dynamic.html'
    })
], DemoAccordionDynamicComponent);
export { DemoAccordionDynamicComponent };
//# sourceMappingURL=dynamic.js.map