import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { yearsPerCalendar } from '../../engine/format-years-calendar';
import { BsNavigationDirection } from '../../models';
let BsYearsCalendarViewComponent = class BsYearsCalendarViewComponent {
    constructor() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onHover = new EventEmitter();
    }
    navigateTo(event) {
        const step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { year: step * yearsPerCalendar } });
    }
    viewYear(year) {
        this.onSelect.emit(year);
    }
    hoverYear(cell, isHovered) {
        this.onHover.emit({ cell, isHovered });
    }
    changeViewMode(event) {
        this.onViewMode.emit(event);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], BsYearsCalendarViewComponent.prototype, "calendar", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], BsYearsCalendarViewComponent.prototype, "onNavigate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], BsYearsCalendarViewComponent.prototype, "onViewMode", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], BsYearsCalendarViewComponent.prototype, "onSelect", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], BsYearsCalendarViewComponent.prototype, "onHover", void 0);
BsYearsCalendarViewComponent = __decorate([
    Component({
        selector: 'bs-years-calendar-view',
        template: `
    <bs-calendar-layout>
      <bs-datepicker-navigation-view
        [calendar]="calendar"
        (onNavigate)="navigateTo($event)"
        (onViewMode)="changeViewMode($event)"
      ></bs-datepicker-navigation-view>

      <table role="grid" class="years">
        <tbody>
        <tr *ngFor="let row of calendar?.years">
          <td *ngFor="let year of row" role="gridcell"
              (click)="viewYear(year)"
              (mouseenter)="hoverYear(year, true)"
              (mouseleave)="hoverYear(year, false)"
              [class.disabled]="year.isDisabled"
              [class.is-highlighted]="year.isHovered">
            <span [class.selected]="year.isSelected">{{ year.label }}</span>
          </td>
        </tr>
        </tbody>
      </table>
    </bs-calendar-layout>
  `
    })
], BsYearsCalendarViewComponent);
export { BsYearsCalendarViewComponent };
//# sourceMappingURL=bs-years-calendar-view.component.js.map