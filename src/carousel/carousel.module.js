var CarouselModule_1;
import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { SlideComponent } from './slide.component';
let CarouselModule = CarouselModule_1 = class CarouselModule {
    static forRoot() {
        return { ngModule: CarouselModule_1, providers: [] };
    }
};
CarouselModule = CarouselModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [SlideComponent, CarouselComponent],
        exports: [SlideComponent, CarouselComponent]
    })
], CarouselModule);
export { CarouselModule };
//# sourceMappingURL=carousel.module.js.map