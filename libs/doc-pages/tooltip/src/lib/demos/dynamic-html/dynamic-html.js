import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoTooltipDynamicHtmlComponent = class DemoTooltipDynamicHtmlComponent {
    constructor() {
        this.html = `<span class="btn-block btn-danger well-sm">Never trust not sanitized HTML!!!</span>`;
    }
};
DemoTooltipDynamicHtmlComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-tooltip-dynamic-html',
        templateUrl: './dynamic-html.html'
    })
], DemoTooltipDynamicHtmlComponent);
export { DemoTooltipDynamicHtmlComponent };
//# sourceMappingURL=dynamic-html.js.map