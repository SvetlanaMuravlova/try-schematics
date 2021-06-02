import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let TabsetConfig = class TabsetConfig {
    constructor() {
        /** provides default navigation context class: 'tabs' or 'pills' */
        this.type = 'tabs';
        /** provides possibility to set keyNavigations enable or disable, by default is enable */
        this.isKeysAllowed = true;
        /** aria label for tab list */
        this.ariaLabel = 'Tabs';
    }
};
TabsetConfig = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TabsetConfig);
export { TabsetConfig };
//# sourceMappingURL=tabset.config.js.map