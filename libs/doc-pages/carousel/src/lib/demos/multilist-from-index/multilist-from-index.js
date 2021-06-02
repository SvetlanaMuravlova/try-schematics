import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoCarouselMultilistFromIndexComponent = class DemoCarouselMultilistFromIndexComponent {
    constructor() {
        this.itemsPerSlide = 5;
        this.singleSlideOffset = true;
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
DemoCarouselMultilistFromIndexComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-carousel-multilist-from-index',
        templateUrl: './multilist-from-index.html'
    })
], DemoCarouselMultilistFromIndexComponent);
export { DemoCarouselMultilistFromIndexComponent };
//# sourceMappingURL=multilist-from-index.js.map