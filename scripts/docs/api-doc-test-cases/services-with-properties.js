import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
/**
 * Service defining default values for progress bars
 */
let ProgressbarConfig = class ProgressbarConfig {
    constructor() {
        /**
         * Maximal value to be displayed in the progressbar.
         */
        this.max = 100;
    }
};
ProgressbarConfig = __decorate([
    Injectable()
], ProgressbarConfig);
export { ProgressbarConfig };
//# sourceMappingURL=services-with-properties.js.map