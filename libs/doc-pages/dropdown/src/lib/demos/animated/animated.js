import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
let DemoDropdownAnimatedComponent = class DemoDropdownAnimatedComponent {
};
DemoDropdownAnimatedComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-dropdown-animation',
        templateUrl: './animated.html',
        providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
    })
], DemoDropdownAnimatedComponent);
export { DemoDropdownAnimatedComponent };
//# sourceMappingURL=animated.js.map