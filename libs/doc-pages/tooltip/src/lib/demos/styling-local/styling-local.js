import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoTooltipStylingLocalComponent = class DemoTooltipStylingLocalComponent {
};
DemoTooltipStylingLocalComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-tooltip-styling-local',
        templateUrl: './styling-local.html',
        styles: [
            `
      :host >>> .tooltip-inner {
        background-color: #009688;
        color: #fff;
      }
      :host >>> .tooltip.top .tooltip-arrow:before,
      :host >>> .tooltip.top .tooltip-arrow {
        border-top-color: #009688;
      }
    `
        ]
    })
], DemoTooltipStylingLocalComponent);
export { DemoTooltipStylingLocalComponent };
//# sourceMappingURL=styling-local.js.map