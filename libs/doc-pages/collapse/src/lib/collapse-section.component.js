import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { demoComponentContent } from './collapse-section.list';
let CollapseSectionComponent = class CollapseSectionComponent {
    constructor() {
        this.name = 'Collapse';
        this.src = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/collapse';
        this.componentContent = demoComponentContent;
    }
};
CollapseSectionComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'collapse-section',
        templateUrl: './collapse-section.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CollapseSectionComponent);
export { CollapseSectionComponent };
//# sourceMappingURL=collapse-section.component.js.map