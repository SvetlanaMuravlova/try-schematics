import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoPaginationRotateComponent = class DemoPaginationRotateComponent {
    constructor() {
        this.rotate = true;
        this.maxSize = 5;
        this.status = "ON";
    }
    toggleBtn() {
        this.rotate = !this.rotate;
        this.status = this.rotate ? "ON" : "OFF";
    }
};
DemoPaginationRotateComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-pagination-rotate',
        templateUrl: './rotate.html'
    })
], DemoPaginationRotateComponent);
export { DemoPaginationRotateComponent };
//# sourceMappingURL=rotate.js.map