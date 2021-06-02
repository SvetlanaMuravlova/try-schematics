import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AccordionConfig } from 'ngx-bootstrap/accordion';
// such override allows to keep some initial values
export function getAccordionConfig() {
    return Object.assign(new AccordionConfig(), { closeOthers: true });
}
let DemoAccordionConfigComponent = class DemoAccordionConfigComponent {
};
DemoAccordionConfigComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-accordion-config',
        templateUrl: './config.html',
        providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
    })
], DemoAccordionConfigComponent);
export { DemoAccordionConfigComponent };
//# sourceMappingURL=config.js.map