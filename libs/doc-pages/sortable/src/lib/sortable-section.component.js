import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { demoComponentContent } from './sortable-section.list';
let SortableSectionComponent = class SortableSectionComponent {
    constructor() {
        this.name = 'Sortable';
        this.src = 'https://github.com/valor-software/ngx-bootstrap/blob/development/src/sortable';
        this.componentContent = demoComponentContent;
    }
};
SortableSectionComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'sortable-section',
        templateUrl: './sortable-section.component.html',
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], SortableSectionComponent);
export { SortableSectionComponent };
//# sourceMappingURL=sortable-section.component.js.map