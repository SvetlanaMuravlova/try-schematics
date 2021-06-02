import { __decorate, __metadata } from "tslib";
import { Component, HostBinding, Input } from '@angular/core';
import { CarouselComponent } from './carousel.component';
let SlideComponent = class SlideComponent {
    constructor(carousel) {
        /** Is current slide active */
        this.active = false;
        this.itemWidth = '100%';
        this.order = 0;
        this.isAnimated = false;
        /** Wraps element by appropriate CSS classes */
        this.addClass = true;
        this.carousel = carousel;
    }
    /** Fires changes in container collection after adding a new slide instance */
    ngOnInit() {
        this.carousel.addSlide(this);
        this.itemWidth = `${100 / this.carousel.itemsPerSlide}%`;
    }
    /** Fires changes in container collection after removing of this slide instance */
    ngOnDestroy() {
        this.carousel.removeSlide(this);
    }
};
__decorate([
    HostBinding('class.active'),
    Input(),
    __metadata("design:type", Object)
], SlideComponent.prototype, "active", void 0);
__decorate([
    HostBinding('style.width'),
    __metadata("design:type", Object)
], SlideComponent.prototype, "itemWidth", void 0);
__decorate([
    HostBinding('style.order'),
    __metadata("design:type", Object)
], SlideComponent.prototype, "order", void 0);
__decorate([
    HostBinding('class.carousel-animation'),
    __metadata("design:type", Object)
], SlideComponent.prototype, "isAnimated", void 0);
__decorate([
    HostBinding('class.item'),
    HostBinding('class.carousel-item'),
    __metadata("design:type", Object)
], SlideComponent.prototype, "addClass", void 0);
SlideComponent = __decorate([
    Component({
        selector: 'slide',
        template: `
    <div [class.active]="active" class="item">
      <ng-content></ng-content>
    </div>
  `,
        // eslint-disable-next-line @angular-eslint/no-host-metadata-property
        host: {
            '[attr.aria-hidden]': '!active'
        },
        styles: [`
    :host.carousel-animation {
       transition: opacity 0.6s ease, visibility 0.6s ease;
       float: left;
    }
    :host.carousel-animation.active {
      opacity: 1;
      visibility: visible;
    }
    :host.carousel-animation:not(.active) {
      display: block;
      position: absolute;
      opacity: 0;
      visibility: hidden;
    }
  `]
    }),
    __metadata("design:paramtypes", [CarouselComponent])
], SlideComponent);
export { SlideComponent };
//# sourceMappingURL=slide.component.js.map