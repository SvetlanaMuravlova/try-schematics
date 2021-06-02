import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let DemoProgressbarDynamicComponent = class DemoProgressbarDynamicComponent {
    constructor() {
        this.max = 200;
        this.random();
    }
    random() {
        const value = Math.floor(Math.random() * 100 + 1);
        let type;
        if (value < 25) {
            type = 'success';
        }
        else if (value < 50) {
            type = 'info';
        }
        else if (value < 75) {
            type = 'warning';
        }
        else {
            type = 'danger';
        }
        this.dynamic = value;
        this.type = type;
    }
};
DemoProgressbarDynamicComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-progressbar-dynamic',
        templateUrl: './dynamic.html'
    }),
    __metadata("design:paramtypes", [])
], DemoProgressbarDynamicComponent);
export { DemoProgressbarDynamicComponent };
//# sourceMappingURL=dynamic.js.map