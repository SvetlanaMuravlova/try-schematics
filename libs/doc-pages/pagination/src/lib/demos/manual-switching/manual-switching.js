import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoPaginationManualSwitchingComponent = class DemoPaginationManualSwitchingComponent {
    constructor() {
        this.totalItems = 64;
        this.currentPage = 4;
    }
    setPage(pageNo) {
        this.currentPage = pageNo;
    }
};
DemoPaginationManualSwitchingComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-pagination-manual-switching',
        templateUrl: './manual-switching.html'
    })
], DemoPaginationManualSwitchingComponent);
export { DemoPaginationManualSwitchingComponent };
//# sourceMappingURL=manual-switching.js.map