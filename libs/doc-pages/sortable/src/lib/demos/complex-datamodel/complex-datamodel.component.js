import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ComplexDatamodelDemoComponent = class ComplexDatamodelDemoComponent {
    constructor() {
        this.itemObjectsLeft = [
            { id: 1, name: 'Windstorm' },
            { id: 2, name: 'Bombasto' },
            { id: 3, name: 'Magneta' }
        ];
        this.itemObjectsRight = [
            { id: 4, name: 'Tornado' },
            { id: 5, name: 'Mr. O' },
            { id: 6, name: 'Tomato' }
        ];
    }
};
ComplexDatamodelDemoComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'complex-datamodel-demo',
        templateUrl: './complex-datamodel.component.html'
    })
], ComplexDatamodelDemoComponent);
export { ComplexDatamodelDemoComponent };
//# sourceMappingURL=complex-datamodel.component.js.map