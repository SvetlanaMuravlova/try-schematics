import { __decorate, __metadata } from "tslib";
import { Component, HostListener, ViewChild } from '@angular/core';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
let DemoDatepickerHideOnScrollComponent = class DemoDatepickerHideOnScrollComponent {
    onScrollEvent() {
        this.datepicker.hide();
    }
};
__decorate([
    ViewChild(BsDatepickerDirective, { static: false }),
    __metadata("design:type", BsDatepickerDirective)
], DemoDatepickerHideOnScrollComponent.prototype, "datepicker", void 0);
__decorate([
    HostListener('window:scroll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DemoDatepickerHideOnScrollComponent.prototype, "onScrollEvent", null);
DemoDatepickerHideOnScrollComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-date-picker-hide-on-scroll',
        templateUrl: './hide-on-scroll.html'
    })
], DemoDatepickerHideOnScrollComponent);
export { DemoDatepickerHideOnScrollComponent };
//# sourceMappingURL=hide-on-scroll.js.map