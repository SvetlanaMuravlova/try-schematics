import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let DemoSectionComponent = class DemoSectionComponent {
};
__decorate([
    Input(),
    __metadata("design:type", String)
], DemoSectionComponent.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DemoSectionComponent.prototype, "src", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DemoSectionComponent.prototype, "html", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DemoSectionComponent.prototype, "ts", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DemoSectionComponent.prototype, "componentContent", void 0);
DemoSectionComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-section',
        templateUrl: './demo-section.component.html'
    })
], DemoSectionComponent);
export { DemoSectionComponent };
//# sourceMappingURL=demo-section.component.js.map