import { __decorate, __metadata } from "tslib";
import { Component, InjectionToken } from '@angular/core';
import { ContentSection } from '../../models/content-section.model';
export const DEMO_TOP_SECTION_TOKEN = new InjectionToken('DemoTopSectionComponent');
let DemoTopSectionComponent = class DemoTopSectionComponent {
    constructor(section) {
        this.section = section;
        this.sectionContent = section.content;
    }
};
DemoTopSectionComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-top-section',
        templateUrl: './demo-top-section.component.html'
    }),
    __metadata("design:paramtypes", [ContentSection])
], DemoTopSectionComponent);
export { DemoTopSectionComponent };
//# sourceMappingURL=demo-top-section.component.js.map