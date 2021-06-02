import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { demoComponentContent } from './tabs-section.list';
let TabsSectionComponent = class TabsSectionComponent {
    constructor() {
        this.name = 'Tabs';
        this.src = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/tabs';
        this.componentContent = demoComponentContent;
    }
};
TabsSectionComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'tabs-section',
        templateUrl: './tabs-section.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], TabsSectionComponent);
export { TabsSectionComponent };
//# sourceMappingURL=tabs-section.component.js.map