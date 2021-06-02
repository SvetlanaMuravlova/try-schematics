import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoCarouselMultilistComponent = class DemoCarouselMultilistComponent {
    constructor() {
        this.itemsPerSlide = 3;
        this.singleSlideOffset = false;
        this.noWrap = false;
        this.slidesChangeMessage = '';
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
    onSlideRangeChange(indexes) {
        this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
    }
};
DemoCarouselMultilistComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-carousel-multilist',
        templateUrl: './multilist.html'
    })
], DemoCarouselMultilistComponent);
export { DemoCarouselMultilistComponent };
//# sourceMappingURL=multilist.js.map