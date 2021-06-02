import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AlertConfig = class AlertConfig {
    constructor() {
        /** default alert type */
        this.type = 'warning';
        /** is alerts are dismissible by default */
        this.dismissible = false;
        /** default time before alert will dismiss */
        this.dismissOnTimeout = undefined;
    }
};
AlertConfig = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AlertConfig);
export { AlertConfig };
//# sourceMappingURL=alert.config.js.map