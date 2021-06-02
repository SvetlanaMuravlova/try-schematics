import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { demoComponentContent } from './pagination-section.list';
let PaginationSectionComponent = class PaginationSectionComponent {
    constructor() {
        this.name = 'Pagination';
        this.src = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/pagination';
        this.componentContent = demoComponentContent;
    }
};
PaginationSectionComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'pagination-section',
        templateUrl: './pagination-section.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], PaginationSectionComponent);
export { PaginationSectionComponent };
//# sourceMappingURL=pagination-section.component.js.map