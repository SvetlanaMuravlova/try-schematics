import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
/** Default values provider for tooltip */
let TooltipConfig = class TooltipConfig {
    constructor() {
        /** sets disable adaptive position */
        this.adaptivePosition = true;
        /** tooltip placement, supported positions: 'top', 'bottom', 'left', 'right' */
        this.placement = 'top';
        /** array of event names which triggers tooltip opening */
        this.triggers = 'hover focus';
        /** delay before showing the tooltip */
        this.delay = 0;
    }
};
TooltipConfig = __decorate([
    Injectable({ providedIn: 'root' })
], TooltipConfig);
export { TooltipConfig };
//# sourceMappingURL=tooltip.config.js.map