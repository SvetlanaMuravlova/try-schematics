import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
let DemoTabsDynamicComponent = class DemoTabsDynamicComponent {
    constructor() {
        this.tabs = [
            { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
            { title: 'Dynamic Title 2', content: 'Dynamic content 2' },
            { title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true }
        ];
    }
    addNewTab() {
        const newTabIndex = this.tabs.length + 1;
        this.tabs.push({
            title: `Dynamic Title ${newTabIndex}`,
            content: `Dynamic content ${newTabIndex}`,
            disabled: false,
            removable: true
        });
    }
    removeTabHandler(tab) {
        this.tabs.splice(this.tabs.indexOf(tab), 1);
        console.log('Remove Tab handler');
    }
};
DemoTabsDynamicComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-tabs-dynamic',
        changeDetection: ChangeDetectionStrategy.OnPush,
        templateUrl: './dynamic.html'
    })
], DemoTabsDynamicComponent);
export { DemoTabsDynamicComponent };
//# sourceMappingURL=dynamic.js.map