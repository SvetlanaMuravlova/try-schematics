import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoRatingDynamicComponent = class DemoRatingDynamicComponent {
    constructor() {
        this.max = 10;
        this.rate = 7;
        this.isReadonly = false;
    }
    hoveringOver(value) {
        this.overStar = value;
        this.percent = (value / this.max) * 100;
    }
    resetStar() {
        this.overStar = void 0;
    }
};
DemoRatingDynamicComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-rating-dynamic',
        templateUrl: './dynamic.html'
    })
], DemoRatingDynamicComponent);
export { DemoRatingDynamicComponent };
//# sourceMappingURL=dynamic.js.map