import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoDatepickerColorThemingComponent = class DemoDatepickerColorThemingComponent {
    constructor() {
        this.colorTheme = 'theme-green';
    }
    applyTheme(pop) {
        // create new object on each property change
        // so Angular can catch object reference change
        this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
        setTimeout(() => {
            pop.show();
        });
    }
};
DemoDatepickerColorThemingComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-datepicker-color-theming',
        templateUrl: './color-theming.html'
    })
], DemoDatepickerColorThemingComponent);
export { DemoDatepickerColorThemingComponent };
//# sourceMappingURL=color-theming.js.map