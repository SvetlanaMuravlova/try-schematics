import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
/** Default dropdown configuration */
let BsDropdownConfig = class BsDropdownConfig {
    constructor() {
        /** default dropdown auto closing behavior */
        this.autoClose = true;
        /** default dropdown auto closing behavior */
        this.insideClick = false;
        /** turn on/off animation */
        this.isAnimated = false;
    }
};
BsDropdownConfig = __decorate([
    Injectable({
        providedIn: 'root'
    })
], BsDropdownConfig);
export { BsDropdownConfig };
//# sourceMappingURL=bs-dropdown.config.js.map