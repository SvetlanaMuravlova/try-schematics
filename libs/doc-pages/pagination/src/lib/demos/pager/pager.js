import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
let DemoPaginationPagerComponent = class DemoPaginationPagerComponent {
    constructor() {
        this.totalItems = 64;
        this.currentPage = 4;
        this.smallnumPages = 0;
    }
    pageChanged(event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    }
};
DemoPaginationPagerComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-pagination-pager',
        templateUrl: './pager.html',
        styles: ['.pager li.btn:active { box-shadow: none; }'],
        encapsulation: ViewEncapsulation.None
    })
], DemoPaginationPagerComponent);
export { DemoPaginationPagerComponent };
//# sourceMappingURL=pager.js.map