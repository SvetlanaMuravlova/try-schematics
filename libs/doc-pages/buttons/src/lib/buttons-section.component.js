import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { demoComponentContent } from './buttons-section.list';
let ButtonsSectionComponent = class ButtonsSectionComponent {
    constructor() {
        this.name = 'Buttons';
        this.src = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/buttons';
        this.componentContent = demoComponentContent;
    }
};
ButtonsSectionComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'buttons-section',
        templateUrl: './buttons-section.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ButtonsSectionComponent);
export { ButtonsSectionComponent };
//# sourceMappingURL=buttons-section.component.js.map