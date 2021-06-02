import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoBasicComponent = class DemoBasicComponent {
    constructor() {
        this.itemStringsLeft = [
            'Windstorm',
            'Bombasto',
            'Magneta',
            'Tornado'
        ];
        this.itemStringsRight = ['Mr. O', 'Tomato'];
    }
};
DemoBasicComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'basic-demo',
        templateUrl: './basic.component.html'
    })
], DemoBasicComponent);
export { DemoBasicComponent };
//# sourceMappingURL=basic.component.js.map