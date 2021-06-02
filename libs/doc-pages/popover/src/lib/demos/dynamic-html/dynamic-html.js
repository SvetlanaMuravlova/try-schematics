import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoPopoverDynamicHtmlComponent = class DemoPopoverDynamicHtmlComponent {
    constructor() {
        this.html = `<span class="btn btn-danger">Never trust not sanitized HTML!!!</span>`;
    }
};
DemoPopoverDynamicHtmlComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-popover-dynamic-html',
        templateUrl: './dynamic-html.html'
    })
], DemoPopoverDynamicHtmlComponent);
export { DemoPopoverDynamicHtmlComponent };
//# sourceMappingURL=dynamic-html.js.map