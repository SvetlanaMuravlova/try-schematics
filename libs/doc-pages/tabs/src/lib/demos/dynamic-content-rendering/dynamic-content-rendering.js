import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
let DynamicContentRenderingComponent = class DynamicContentRenderingComponent {
    constructor() {
        this.messages = [];
    }
    message(s) {
        this.messages.push(s);
    }
};
DynamicContentRenderingComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'dynamic-content-rendering',
        changeDetection: ChangeDetectionStrategy.OnPush,
        templateUrl: './dynamic-content-rendering.html',
        styleUrls: ['./dynamic-content-rendering.css']
    })
], DynamicContentRenderingComponent);
export { DynamicContentRenderingComponent };
//# sourceMappingURL=dynamic-content-rendering.js.map