import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { demoComponentContent } from './rating-section.list';
let RatingSectionComponent = class RatingSectionComponent {
    constructor() {
        this.name = 'Rating';
        this.src = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/rating';
        this.componentContent = demoComponentContent;
    }
};
RatingSectionComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'rating-section',
        templateUrl: './rating-section.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], RatingSectionComponent);
export { RatingSectionComponent };
//# sourceMappingURL=rating-section.component.js.map