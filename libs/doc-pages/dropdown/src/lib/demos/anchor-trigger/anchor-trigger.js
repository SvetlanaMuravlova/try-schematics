import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoDropdownAnchorTriggerComponent = class DemoDropdownAnchorTriggerComponent {
    constructor() {
        this.items = [
            'The first choice!',
            'And another choice for you.',
            'but wait! A third!'
        ];
    }
    onHidden() {
        console.log('Dropdown is hidden');
    }
    onShown() {
        console.log('Dropdown is shown');
    }
    isOpenChange() {
        console.log('Dropdown state is changed');
    }
};
DemoDropdownAnchorTriggerComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-dropdown-anchor-trigger',
        templateUrl: './anchor-trigger.html'
    })
], DemoDropdownAnchorTriggerComponent);
export { DemoDropdownAnchorTriggerComponent };
//# sourceMappingURL=anchor-trigger.js.map