import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoCarouselDisableIndicatorComponent = class DemoCarouselDisableIndicatorComponent {
    constructor() {
        this.slides = [
            { image: 'assets/images/nature/5.jpg' },
            { image: 'assets/images/nature/4.jpg' },
            { image: 'assets/images/nature/3.jpg' }
        ];
        this.showIndicator = true;
    }
    switchIndicator() {
        this.showIndicator = !this.showIndicator;
    }
};
DemoCarouselDisableIndicatorComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-carousel-disable-indicator',
        templateUrl: './disable-indicator.html'
    })
], DemoCarouselDisableIndicatorComponent);
export { DemoCarouselDisableIndicatorComponent };
//# sourceMappingURL=disable-indicator.js.map