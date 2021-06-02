import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';
let DemoDatepickerChangeLocaleComponent = class DemoDatepickerChangeLocaleComponent {
    constructor(localeService) {
        this.localeService = localeService;
        this.locale = 'en';
        this.locales = listLocales();
    }
    applyLocale(pop) {
        this.localeService.use(this.locale);
        pop.hide();
        pop.show();
    }
};
DemoDatepickerChangeLocaleComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-datepicker-change-locale',
        templateUrl: './change-locale.html'
    }),
    __metadata("design:paramtypes", [BsLocaleService])
], DemoDatepickerChangeLocaleComponent);
export { DemoDatepickerChangeLocaleComponent };
//# sourceMappingURL=change-locale.js.map