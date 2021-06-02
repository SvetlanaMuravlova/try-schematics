import { __decorate, __metadata } from "tslib";
import { EventEmitter, Injectable } from '@angular/core';
let BsDropdownState = class BsDropdownState {
    constructor() {
        this.direction = 'down';
        this.autoClose = true;
        this.insideClick = false;
        this.isAnimated = false;
        this.isOpenChange = new EventEmitter();
        this.isDisabledChange = new EventEmitter();
        this.toggleClick = new EventEmitter();
        this.dropdownMenu = new Promise(resolve => {
            this.resolveDropdownMenu = resolve;
        });
    }
};
BsDropdownState = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], BsDropdownState);
export { BsDropdownState };
//# sourceMappingURL=bs-dropdown.state.js.map