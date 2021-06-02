import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { demoComponentContent } from './carousel-section.list';
let CarouselSectionComponent = class CarouselSectionComponent {
    constructor() {
        this.name = 'Carousel';
        this.src = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/carousel';
        this.componentContent = demoComponentContent;
    }
};
CarouselSectionComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'carousel-section',
        templateUrl: './carousel-section.component.html'
    })
], CarouselSectionComponent);
export { CarouselSectionComponent };
//# sourceMappingURL=carousel-section.component.js.map