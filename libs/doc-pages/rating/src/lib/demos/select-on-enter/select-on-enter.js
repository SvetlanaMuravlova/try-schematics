import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoRatingSelectOnEnterComponent = class DemoRatingSelectOnEnterComponent {
    constructor() {
        this.max = 10;
        this.rate = 7;
        this.isReadonly = false;
    }
    confirmSelection(event) {
        if (event.keyCode === 13 || event.key === 'Enter') {
            this.isReadonly = true;
        }
    }
    resetStars() {
        this.rate = 0;
        this.isReadonly = false;
    }
};
DemoRatingSelectOnEnterComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-select-on-enter',
        templateUrl: './select-on-enter.html'
    })
], DemoRatingSelectOnEnterComponent);
export { DemoRatingSelectOnEnterComponent };
//# sourceMappingURL=select-on-enter.js.map