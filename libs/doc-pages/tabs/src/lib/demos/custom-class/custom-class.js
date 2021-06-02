import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoTabsCustomClassComponent = class DemoTabsCustomClassComponent {
    constructor() {
        this.tabs = [
            {
                title: 'Dynamic Title 1',
                content: 'Dynamic content 1',
                customClass: 'customClass'
            },
            {
                title: 'Dynamic Title 2',
                content: 'Dynamic content 2',
                customClass: 'customClass'
            }
        ];
    }
};
DemoTabsCustomClassComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-tabs-custom-class',
        templateUrl: './custom-class.html'
    })
], DemoTabsCustomClassComponent);
export { DemoTabsCustomClassComponent };
//# sourceMappingURL=custom-class.js.map