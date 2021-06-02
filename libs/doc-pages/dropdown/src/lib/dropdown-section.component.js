import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { demoComponentContent } from './dropdown-section.list';
let DropdownSectionComponent = class DropdownSectionComponent {
    constructor() {
        this.name = 'Dropdowns';
        this.src = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/dropdown';
        this.componentContent = demoComponentContent;
    }
};
DropdownSectionComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'dropdown-section',
        templateUrl: './dropdown-section.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], DropdownSectionComponent);
export { DropdownSectionComponent };
//# sourceMappingURL=dropdown-section.component.js.map