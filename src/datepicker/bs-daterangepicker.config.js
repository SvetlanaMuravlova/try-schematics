import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BsDatepickerConfig } from './bs-datepicker.config';
let BsDaterangepickerConfig = class BsDaterangepickerConfig extends BsDatepickerConfig {
    constructor() {
        super(...arguments);
        // DatepickerRenderOptions
        this.displayMonths = 2;
    }
};
BsDaterangepickerConfig = __decorate([
    Injectable({
        providedIn: 'root'
    })
], BsDaterangepickerConfig);
export { BsDaterangepickerConfig };
//# sourceMappingURL=bs-daterangepicker.config.js.map