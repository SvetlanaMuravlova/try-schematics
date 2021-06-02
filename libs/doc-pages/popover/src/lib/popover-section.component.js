import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { demoComponentContent } from './popover-section.list';
let PopoverSectionComponent = class PopoverSectionComponent {
    constructor() {
        this.name = 'Popover';
        this.src = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/popover';
        this.componentContent = demoComponentContent;
    }
};
PopoverSectionComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'tooltip-section',
        templateUrl: './popover-section.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], PopoverSectionComponent);
export { PopoverSectionComponent };
//# sourceMappingURL=popover-section.component.js.map