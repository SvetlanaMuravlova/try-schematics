import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { demoComponentContent } from './timepicker-section.list';
let TimepickerSectionComponent = class TimepickerSectionComponent {
    constructor() {
        this.name = 'Timepicker';
        this.src = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/timepicker';
        this.componentContent = demoComponentContent;
    }
};
TimepickerSectionComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'timepicker-section',
        templateUrl: './timepicker-section.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], TimepickerSectionComponent);
export { TimepickerSectionComponent };
//# sourceMappingURL=timepicker-section.component.js.map