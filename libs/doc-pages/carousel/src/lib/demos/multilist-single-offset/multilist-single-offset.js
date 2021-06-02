import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoCarouselMultilistSingleOffsetComponent = class DemoCarouselMultilistSingleOffsetComponent {
    constructor() {
        this.itemsPerSlide = 5;
        this.singleSlideOffset = true;
        this.noWrap = true;
        this.slides = [
            { image: 'assets/images/nature/1.jpg' },
            { image: 'assets/images/nature/2.jpg' },
            { image: 'assets/images/nature/3.jpg' },
            { image: 'assets/images/nature/4.jpg' },
            { image: 'assets/images/nature/5.jpg' },
            { image: 'assets/images/nature/6.jpg' },
            { image: 'assets/images/nature/7.jpg' },
            { image: 'assets/images/nature/8.jpg' },
            { image: 'assets/images/nature/1.jpg' },
            { image: 'assets/images/nature/2.jpg' }
        ];
    }
};
DemoCarouselMultilistSingleOffsetComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-carousel-multilist-single-offset',
        templateUrl: './multilist-single-offset.html'
    })
], DemoCarouselMultilistSingleOffsetComponent);
export { DemoCarouselMultilistSingleOffsetComponent };
//# sourceMappingURL=multilist-single-offset.js.map