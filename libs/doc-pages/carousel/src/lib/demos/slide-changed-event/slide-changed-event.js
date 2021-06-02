import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoCarouselSlideChangedEventComponent = class DemoCarouselSlideChangedEventComponent {
    constructor() {
        this.slideChangeMessage = '';
        this.slides = [
            { image: 'assets/images/nature/7.jpg' },
            { image: 'assets/images/nature/5.jpg' },
            { image: 'assets/images/nature/3.jpg' }
        ];
    }
    log(event) {
        // simple hack for expression has been changed error
        setTimeout(() => {
            this.slideChangeMessage = `Slide has been switched: ${event}`;
        });
    }
};
DemoCarouselSlideChangedEventComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-carousel-slide-changed-event',
        templateUrl: './slide-changed-event.html'
    })
], DemoCarouselSlideChangedEventComponent);
export { DemoCarouselSlideChangedEventComponent };
//# sourceMappingURL=slide-changed-event.js.map