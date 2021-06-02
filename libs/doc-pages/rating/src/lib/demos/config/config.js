import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RatingConfig } from 'ngx-bootstrap/rating';
// such override allows to keep some initial values
export function getRatingConfig() {
    return Object.assign(new RatingConfig(), { ariaLabel: 'My Rating' });
}
let DemoRatingConfigComponent = class DemoRatingConfigComponent {
    constructor() {
        this.max = 10;
        this.rate = 7;
    }
};
DemoRatingConfigComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-rating-config',
        templateUrl: './config.html',
        providers: [{ provide: RatingConfig, useFactory: getRatingConfig }]
    })
], DemoRatingConfigComponent);
export { DemoRatingConfigComponent };
//# sourceMappingURL=config.js.map