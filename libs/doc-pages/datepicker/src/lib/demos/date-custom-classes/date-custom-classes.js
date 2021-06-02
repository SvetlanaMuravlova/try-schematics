import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let DemoDatepickerDateCustomClassesComponent = class DemoDatepickerDateCustomClassesComponent {
    constructor() {
        const now = new Date();
        const twoDaysAhead = new Date();
        twoDaysAhead.setDate(now.getDate() + 2);
        const fourDaysAhead = new Date();
        fourDaysAhead.setDate(now.getDate() + 4);
        this.dateCustomClasses = [
            { date: now, classes: [] },
            { date: twoDaysAhead, classes: ['bg-warning'] },
            { date: fourDaysAhead, classes: ['bg-danger', 'text-warning'] }
        ];
    }
};
DemoDatepickerDateCustomClassesComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-datepicker-date-custom-classes',
        templateUrl: './date-custom-classes.html',
        styleUrls: ['./date-custom-classes.scss']
    }),
    __metadata("design:paramtypes", [])
], DemoDatepickerDateCustomClassesComponent);
export { DemoDatepickerDateCustomClassesComponent };
//# sourceMappingURL=date-custom-classes.js.map