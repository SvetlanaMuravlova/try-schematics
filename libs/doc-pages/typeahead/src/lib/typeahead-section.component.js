import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { demoComponentContent } from './typeahead-section.list';
let TypeaheadSectionComponent = class TypeaheadSectionComponent {
    constructor() {
        this.name = 'Typeahead';
        this.src = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/typeahead';
        this.componentContent = demoComponentContent;
    }
};
TypeaheadSectionComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'typeahead-section',
        templateUrl: './typeahead-section.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], TypeaheadSectionComponent);
export { TypeaheadSectionComponent };
//# sourceMappingURL=typeahead-section.component.js.map