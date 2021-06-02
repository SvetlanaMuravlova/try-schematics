import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let DemoProgressbarStackedComponent = class DemoProgressbarStackedComponent {
    constructor() {
        this.stacked = [];
        this.randomStacked();
    }
    randomStacked() {
        const types = ['success', 'info', 'warning', 'danger'];
        this.stacked = [];
        const n = Math.floor(Math.random() * 4 + 1);
        for (let i = 0; i < n; i++) {
            const index = Math.floor(Math.random() * 4);
            const value = Math.floor(Math.random() * 27 + 3);
            this.stacked.push({
                value,
                type: types[index],
                label: value + ' %'
            });
        }
    }
};
DemoProgressbarStackedComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-progressbar-stacked',
        templateUrl: './stacked.html'
    }),
    __metadata("design:paramtypes", [])
], DemoProgressbarStackedComponent);
export { DemoProgressbarStackedComponent };
//# sourceMappingURL=stacked.js.map