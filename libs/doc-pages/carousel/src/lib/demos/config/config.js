import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
let DemoCarouselConfigComponent = class DemoCarouselConfigComponent {
};
DemoCarouselConfigComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-carousel-config',
        templateUrl: './config.html',
        providers: [
            { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
        ]
    })
], DemoCarouselConfigComponent);
export { DemoCarouselConfigComponent };
//# sourceMappingURL=config.js.map