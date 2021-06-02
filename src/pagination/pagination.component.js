import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PaginationConfig } from './pagination.config';
export const PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PaginationComponent),
    multi: true
};
let PaginationComponent = class PaginationComponent {
    constructor(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /** if `true` aligns each link to the sides of pager */
        this.align = true;
        /** if false first and last buttons will be hidden */
        this.boundaryLinks = false;
        /** if false previous and next buttons will be hidden */
        this.directionLinks = true;
        // labels
        /** first button text */
        this.firstText = 'First';
        /** previous button text */
        this.previousText = 'Previous';
        /** next button text */
        this.nextText = 'Next';
        /** last button text */
        this.lastText = 'Last';
        /** if true current page will in the middle of pages list */
        this.rotate = true;
        // css
        /** add class to <code><li\></code> */
        this.pageBtnClass = '';
        /** if true pagination component will be disabled */
        this.disabled = false;
        /** fired when total pages count changes, $event:number equals to total pages count */
        this.numPages = new EventEmitter();
        /** fired when page was changed, $event:{page, itemsPerPage} equals to object
         * with current page index and number of items per page
         */
        this.pageChanged = new EventEmitter();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.classMap = '';
        this.inited = false;
        this._itemsPerPage = 10;
        this._totalItems = 0;
        this._totalPages = 0;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(paginationConfig.main);
        }
    }
    /** maximum number of items per page. If value less than 1 will display all items on one page */
    get itemsPerPage() {
        return this._itemsPerPage;
    }
    set itemsPerPage(v) {
        this._itemsPerPage = v;
        this.totalPages = this.calculateTotalPages();
    }
    /** total number of items in all pages */
    get totalItems() {
        return this._totalItems;
    }
    set totalItems(v) {
        this._totalItems = v;
        this.totalPages = this.calculateTotalPages();
    }
    get totalPages() {
        return this._totalPages;
    }
    set totalPages(v) {
        this._totalPages = v;
        this.numPages.emit(v);
        if (this.inited) {
            this.selectPage(this.page);
        }
    }
    get page() {
        return this._page;
    }
    set page(value) {
        const _previous = this._page;
        this._page = value > this.totalPages ? this.totalPages : value || 1;
        this.changeDetection.markForCheck();
        if (_previous === this._page || typeof _previous === 'undefined') {
            return;
        }
        this.pageChanged.emit({
            page: this._page,
            itemsPerPage: this.itemsPerPage
        });
    }
    configureOptions(config) {
        this.config = Object.assign({}, config);
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f;
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        if (typeof this.maxSize === 'undefined') {
            this.maxSize = ((_a = this.config) === null || _a === void 0 ? void 0 : _a.maxSize) || 0;
        }
        if (typeof this.rotate === 'undefined') {
            this.rotate = !!((_b = this.config) === null || _b === void 0 ? void 0 : _b.rotate);
        }
        if (typeof this.boundaryLinks === 'undefined') {
            this.boundaryLinks = !!((_c = this.config) === null || _c === void 0 ? void 0 : _c.boundaryLinks);
        }
        if (typeof this.directionLinks === 'undefined') {
            this.directionLinks = !!((_d = this.config) === null || _d === void 0 ? void 0 : _d.directionLinks);
        }
        if (typeof this.pageBtnClass === 'undefined') {
            this.pageBtnClass = ((_e = this.config) === null || _e === void 0 ? void 0 : _e.pageBtnClass) || '';
        }
        // base class
        if (typeof this.itemsPerPage === 'undefined') {
            this.itemsPerPage = ((_f = this.config) === null || _f === void 0 ? void 0 : _f.itemsPerPage) || 0;
        }
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    }
    writeValue(value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    }
    getText(key) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return this[`${key}Text`] || this.config[`${key}Text`];
    }
    noPrevious() {
        return this.page === 1;
    }
    noNext() {
        return this.page === this.totalPages;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    selectPage(page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    }
    // Create page object used in template
    makePage(num, text, active) {
        return { text, number: num, active };
    }
    getPages(currentPage, totalPages) {
        const pages = [];
        // Default page limits
        let startPage = 1;
        let endPage = totalPages;
        const isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized && this.maxSize) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (let num = startPage; num <= endPage; num++) {
            const page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                const previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                const nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    }
    // base class
    calculateTotalPages() {
        const totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "align", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "maxSize", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "boundaryLinks", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "directionLinks", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "firstText", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "previousText", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "nextText", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "lastText", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "rotate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "pageBtnClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], PaginationComponent.prototype, "customPageTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], PaginationComponent.prototype, "customNextTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], PaginationComponent.prototype, "customPreviousTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], PaginationComponent.prototype, "customFirstTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], PaginationComponent.prototype, "customLastTemplate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "numPages", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "pageChanged", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], PaginationComponent.prototype, "itemsPerPage", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], PaginationComponent.prototype, "totalItems", null);
PaginationComponent = __decorate([
    Component({
        selector: 'pagination',
        templateUrl: './pagination.component.html',
        providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [ElementRef,
        PaginationConfig,
        ChangeDetectorRef])
], PaginationComponent);
export { PaginationComponent };
//# sourceMappingURL=pagination.component.js.map