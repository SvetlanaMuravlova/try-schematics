import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoCarouselIntervalComponent = class DemoCarouselIntervalComponent {
    constructor() {
        this.myInterval = 1500;
        this.activeSlideIndex = 0;
        this.slides = [
            { image: 'assets/images/nature/3.jpg' },
            { image: 'assets/images/nature/2.jpg' },
            { image: 'assets/images/nature/1.jpg' }
        ];
    }
};
DemoCarouselIntervalComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-carousel-interval',
        templateUrl: './interval.html'
    })
], DemoCarouselIntervalComponent);
export { DemoCarouselIntervalComponent };
//# sourceMappingURL=interval.js.map