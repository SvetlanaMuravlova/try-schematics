import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoPaginationStylingComponent = class DemoPaginationStylingComponent {
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
DemoPaginationStylingComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-pagination-styling',
        templateUrl: './styling-global.html',
        styles: [
            `
    .btn-custom a {
       background: #31b0d5;
    }
  `
        ]
    })
], DemoPaginationStylingComponent);
export { DemoPaginationStylingComponent };
//# sourceMappingURL=styling-global.js.map