import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { demoComponentContent } from './alerts-section.list';
let AlertsSectionComponent = class AlertsSectionComponent {
    constructor() {
        this.name = 'Alerts';
        this.src = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/alert';
        this.componentContent = demoComponentContent;
    }
};
AlertsSectionComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'alert-section',
        templateUrl: './alerts-section.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], AlertsSectionComponent);
export { AlertsSectionComponent };
//# sourceMappingURL=alerts-section.component.js.map