import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoPaginationContentSwitchingComponent = class DemoPaginationContentSwitchingComponent {
    constructor() {
        this.contentArray = new Array(90).fill('');
    }
    ngOnInit() {
        this.contentArray = this.contentArray.map((v, i) => `Content line ${i + 1}`);
        this.returnedArray = this.contentArray.slice(0, 10);
    }
    pageChanged(event) {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.returnedArray = this.contentArray.slice(startItem, endItem);
    }
};
DemoPaginationContentSwitchingComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-pagination-content-switching',
        templateUrl: './content-switching.html',
        styles: [`
    .content-wrapper {
      border: 1px solid #ddd;
      border-radius: 4px;
      padding-left: 10px;
      margin-bottom: 10px;
    }
  `]
    })
], DemoPaginationContentSwitchingComponent);
export { DemoPaginationContentSwitchingComponent };
//# sourceMappingURL=content-switching.js.map