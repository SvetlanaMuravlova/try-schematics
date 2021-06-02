import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BsDatepickerConfig } from './bs-datepicker.config';
let BsDaterangepickerInlineConfig = class BsDaterangepickerInlineConfig extends BsDatepickerConfig {
    constructor() {
        super(...arguments);
        // DatepickerRenderOptions
        this.displayMonths = 2;
        /** turn on/off animation */
        this.isAnimated = false;
    }
};
BsDaterangepickerInlineConfig = __decorate([
    Injectable({
        providedIn: 'root'
    })
], BsDaterangepickerInlineConfig);
export { BsDaterangepickerInlineConfig };
//# sourceMappingURL=bs-daterangepicker-inline.config.js.map