import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoPaginationPageChangedComponent = class DemoPaginationPageChangedComponent {
    constructor() {
        this.currentPage = 4;
    }
    pageChanged(event) {
        this.page = event.page;
    }
};
DemoPaginationPageChangedComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-pagination-page-changed-event',
        templateUrl: './page-changed-event.html'
    })
], DemoPaginationPageChangedComponent);
export { DemoPaginationPageChangedComponent };
//# sourceMappingURL=page-changed-event.js.map