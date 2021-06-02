import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let DemoCarouselDynamicComponent = class DemoCarouselDynamicComponent {
    constructor() {
        this.slides = [];
        this.activeSlideIndex = 0;
        for (let i = 0; i < 4; i++) {
            this.addSlide();
        }
    }
    addSlide() {
        this.slides.push({
            image: `assets/images/nature/${this.slides.length % 8 + 1}.jpg`
        });
    }
    removeSlide(index) {
        const toRemove = index ? index : this.activeSlideIndex;
        this.slides.splice(toRemove, 1);
    }
};
DemoCarouselDynamicComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-carousel-dynamic',
        templateUrl: './dynamic.html'
    }),
    __metadata("design:paramtypes", [])
], DemoCarouselDynamicComponent);
export { DemoCarouselDynamicComponent };
//# sourceMappingURL=dynamic.js.map