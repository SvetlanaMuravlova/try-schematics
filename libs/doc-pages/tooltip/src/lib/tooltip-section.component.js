import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { demoComponentContent } from './tooltip-section.list';
let TooltipSectionComponent = class TooltipSectionComponent {
    constructor() {
        this.name = 'Tooltip';
        this.src = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/tooltip';
        this.componentContent = demoComponentContent;
    }
};
TooltipSectionComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'tooltip-section',
        templateUrl: './tooltip-section.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], TooltipSectionComponent);
export { TooltipSectionComponent };
//# sourceMappingURL=tooltip-section.component.js.map