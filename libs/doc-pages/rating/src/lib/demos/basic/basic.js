import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoRatingBasicComponent = class DemoRatingBasicComponent {
    constructor() {
        this.max = 10;
        this.rate = 7;
        this.isReadonly = true;
    }
};
DemoRatingBasicComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-rating-basic',
        templateUrl: './basic.html'
    })
], DemoRatingBasicComponent);
export { DemoRatingBasicComponent };
//# sourceMappingURL=basic.js.map