import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoCarouselDisableLoopingComponent = class DemoCarouselDisableLoopingComponent {
    constructor() {
        this.slides = [
            { image: 'assets/images/nature/8.jpg' },
            { image: 'assets/images/nature/7.jpg' },
            { image: 'assets/images/nature/6.jpg' }
        ];
        this.noWrapSlides = false;
    }
};
DemoCarouselDisableLoopingComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-carousel-disable-looping',
        templateUrl: './disable-looping.html'
    })
], DemoCarouselDisableLoopingComponent);
export { DemoCarouselDisableLoopingComponent };
//# sourceMappingURL=disable-looping.js.map