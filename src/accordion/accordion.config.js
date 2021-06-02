import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
/**
 * Configuration service, provides default values for the AccordionComponent.
 */
let AccordionConfig = class AccordionConfig {
    constructor() {
        /** Whether the other panels should be closed when a panel is opened */
        this.closeOthers = false;
        /** turn on/off animation */
        this.isAnimated = false;
    }
};
AccordionConfig = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AccordionConfig);
export { AccordionConfig };
//# sourceMappingURL=accordion.config.js.map