import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DocsModule } from '@ngx-bootstrap-doc/docs';
import { CarouselSectionComponent } from './carousel-section.component';
import { DEMO_COMPONENTS } from './demos/index';
import { routes } from './demo-carousel.routes';
/* export */
export { CarouselSectionComponent } from './carousel-section.component';
let DemoCarouselModule = class DemoCarouselModule {
};
DemoCarouselModule = __decorate([
    NgModule({
        declarations: [
            CarouselSectionComponent,
            ...DEMO_COMPONENTS
        ],
        imports: [
            CarouselModule.forRoot(),
            CommonModule,
            FormsModule,
            DocsModule,
            RouterModule.forChild(routes)
        ],
        exports: [CarouselSectionComponent],
        entryComponents: [...DEMO_COMPONENTS]
    })
], DemoCarouselModule);
export { DemoCarouselModule };
//# sourceMappingURL=carousel.module.js.map