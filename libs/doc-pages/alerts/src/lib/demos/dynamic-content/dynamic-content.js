import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoAlertDynamicContentComponent = class DemoAlertDynamicContentComponent {
    constructor() {
        this.index = 0;
        this.messages = [
            'You successfully read this important alert message.',
            'Now this text is different from what it was before. Go ahead and click the button one more time',
            'Well done! Click reset button and you\'ll see the first message'
        ];
    }
    changeText() {
        if (this.messages.length - 1 !== this.index) {
            this.index++;
        }
    }
};
DemoAlertDynamicContentComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-alert-content-html',
        templateUrl: './dynamic-content.html'
    })
], DemoAlertDynamicContentComponent);
export { DemoAlertDynamicContentComponent };
//# sourceMappingURL=dynamic-content.js.map