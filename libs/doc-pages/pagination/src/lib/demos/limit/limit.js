import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoPaginationLimitComponent = class DemoPaginationLimitComponent {
    constructor() {
        this.maxSize = 5;
        this.bigTotalItems = 175;
        this.bigCurrentPage = 1;
    }
};
DemoPaginationLimitComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-pagination-limit',
        templateUrl: './limit.html'
    })
], DemoPaginationLimitComponent);
export { DemoPaginationLimitComponent };
//# sourceMappingURL=limit.js.map