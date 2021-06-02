import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BsCalendarLayoutComponent = class BsCalendarLayoutComponent {
};
BsCalendarLayoutComponent = __decorate([
    Component({
        selector: 'bs-calendar-layout',
        template: `
    <!-- current date, will be added in nearest releases -->
    <bs-current-date title="hey there" *ngIf="false"></bs-current-date>

    <!--navigation-->
    <div class="bs-datepicker-head">
      <ng-content select="bs-datepicker-navigation-view"></ng-content>
    </div>

    <div class="bs-datepicker-body">
      <ng-content></ng-content>
    </div>

    <!--timepicker-->
    <bs-timepicker *ngIf="false"></bs-timepicker>
  `
    })
], BsCalendarLayoutComponent);
export { BsCalendarLayoutComponent };
//# sourceMappingURL=bs-calendar-layout.component.js.map