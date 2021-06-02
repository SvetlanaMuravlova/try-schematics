import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
/**
 * A service to open modals
 */
let ModalService = class ModalService {
    /**
     * A method to open a modal
     */
    open(content, options = {}) {
        return Promise.resolve();
    }
    /**
     * Checks if a modal is open
     */
    isOpen() {
        return false;
    }
};
ModalService = __decorate([
    Injectable()
], ModalService);
export { ModalService };
//# sourceMappingURL=services-with-methods.js.map