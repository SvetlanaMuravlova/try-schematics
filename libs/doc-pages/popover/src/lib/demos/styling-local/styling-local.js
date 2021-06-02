import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoPopoverStylingLocalComponent = class DemoPopoverStylingLocalComponent {
};
DemoPopoverStylingLocalComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-popover-styling-local',
        templateUrl: './styling-local.html',
        styles: [
            `
:host >>> .popover {
  background-color: #009688;
  color: #fff;
}
:host >>> .popover>.arrow:after {
  border-top-color: #009688;
}
  `
        ]
    })
], DemoPopoverStylingLocalComponent);
export { DemoPopoverStylingLocalComponent };
//# sourceMappingURL=styling-local.js.map