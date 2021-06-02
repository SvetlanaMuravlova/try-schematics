import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { BsDaterangepickerDirective } from 'ngx-bootstrap/datepicker';
let DemoDatepickerConfigMethodComponent = class DemoDatepickerConfigMethodComponent {
    constructor() {
        this.minDate = new Date(2018, 5, 13);
    }
    setOptions() {
        this.bsConfig = Object.assign({}, { minDate: this.minDate });
        this.datepicker.setConfig();
        setTimeout(() => {
            this.datepicker.toggle();
        });
    }
};
__decorate([
    ViewChild('dp', { static: false }),
    __metadata("design:type", BsDaterangepickerDirective)
], DemoDatepickerConfigMethodComponent.prototype, "datepicker", void 0);
DemoDatepickerConfigMethodComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-datepicker-config-method',
        templateUrl: './config-method.html'
    })
], DemoDatepickerConfigMethodComponent);
export { DemoDatepickerConfigMethodComponent };
//# sourceMappingURL=config-method.js.map