import { __decorate } from "tslib";
// https://api.jqueryui.com/datepicker/
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { demoComponentContent, demoComponentContentOld } from './datepicker-section.list';
let DatepickerSectionComponent = class DatepickerSectionComponent {
    constructor() {
        this.name = 'Datepicker';
        this.src = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/datepicker';
        this.componentContent = demoComponentContent;
    }
    changeContent(name) {
        switch (name) {
            case ('old'):
                this.componentContent = demoComponentContentOld;
                break;
            case ('new'):
            default:
                this.componentContent = demoComponentContent;
        }
        if (typeof window['PR'] !== 'undefined') {
            setTimeout(() => window['PR'].prettyPrint(), 10);
        }
    }
};
DatepickerSectionComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'datepicker-section',
        templateUrl: './datepicker-section.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], DatepickerSectionComponent);
export { DatepickerSectionComponent };
//# sourceMappingURL=datepicker-section.component.js.map