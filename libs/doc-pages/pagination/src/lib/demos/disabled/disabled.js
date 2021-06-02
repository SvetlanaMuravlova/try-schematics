import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoPaginationDisabledComponent = class DemoPaginationDisabledComponent {
    constructor() {
        this.disabled = false;
    }
    toggleState() {
        this.disabled = !this.disabled;
    }
};
DemoPaginationDisabledComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-pagination-disabled',
        templateUrl: './disabled.html'
    })
], DemoPaginationDisabledComponent);
export { DemoPaginationDisabledComponent };
//# sourceMappingURL=disabled.js.map