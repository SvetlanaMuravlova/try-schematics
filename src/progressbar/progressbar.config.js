import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ProgressbarConfig = class ProgressbarConfig {
    constructor() {
        /** if `true` changing value of progress bar will be animated */
        this.animate = false;
        /** maximum total value of progress element */
        this.max = 100;
    }
};
ProgressbarConfig = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ProgressbarConfig);
export { ProgressbarConfig };
//# sourceMappingURL=progressbar.config.js.map