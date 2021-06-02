import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
let DemoDropdownConfigComponent = class DemoDropdownConfigComponent {
};
DemoDropdownConfigComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-dropdown-config',
        templateUrl: './config.html',
        providers: [{ provide: BsDropdownConfig, useValue: { autoClose: false } }]
    })
], DemoDropdownConfigComponent);
export { DemoDropdownConfigComponent };
//# sourceMappingURL=config.js.map