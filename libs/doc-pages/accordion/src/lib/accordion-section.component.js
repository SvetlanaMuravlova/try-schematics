// todo: add more samples https://jqueryui.com/accordion/#default
// todo: add more samples https://getbootstrap.com/docs/3.3/components/#panels-alternatives
import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { demoComponentContent } from './accordion-section.list';
// webpack html imports
let AccordionSectionComponent = class AccordionSectionComponent {
    constructor() {
        this.name = 'Accordion';
        this.src = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/accordion';
        this.componentContent = demoComponentContent;
        // componentContent: any[] = demoComponentContent;
    }
};
AccordionSectionComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'accordion-section',
        templateUrl: './accordion-section.components.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], AccordionSectionComponent);
export { AccordionSectionComponent };
//# sourceMappingURL=accordion-section.component.js.map