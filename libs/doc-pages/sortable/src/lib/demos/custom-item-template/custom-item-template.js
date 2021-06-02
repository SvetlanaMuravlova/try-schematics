import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CustomItemTemplateDemoComponent = class CustomItemTemplateDemoComponent {
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
CustomItemTemplateDemoComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'custom-item-template-demo',
        templateUrl: './custom-item-template.html'
    })
], CustomItemTemplateDemoComponent);
export { CustomItemTemplateDemoComponent };
//# sourceMappingURL=custom-item-template.js.map