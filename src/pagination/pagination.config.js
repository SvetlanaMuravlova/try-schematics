import { __decorate } from "tslib";
// todo: split
import { Injectable } from '@angular/core';
/** Provides default values for Pagination and pager components */
let PaginationConfig = class PaginationConfig {
    constructor() {
        this.main = {
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
};
PaginationConfig = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PaginationConfig);
export { PaginationConfig };
//# sourceMappingURL=pagination.config.js.map