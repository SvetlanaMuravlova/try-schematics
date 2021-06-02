import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoPopoverCornerPlacementComponent = class DemoPopoverCornerPlacementComponent {
    constructor() {
        this.placements = [
            'top left',
            'top right',
            'right top',
            'right bottom',
            'bottom right',
            'bottom left',
            'left bottom',
            'left top'
        ];
        this.placement = 'top left';
    }
};
DemoPopoverCornerPlacementComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-popover-corner-placement',
        templateUrl: './corner-placement.html'
    })
], DemoPopoverCornerPlacementComponent);
export { DemoPopoverCornerPlacementComponent };
//# sourceMappingURL=corner-placement.js.map