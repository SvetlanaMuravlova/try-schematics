import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BsNavigationDirection } from '../../models';
let BsDatepickerNavigationViewComponent = class BsDatepickerNavigationViewComponent {
    constructor() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
    }
    navTo(down) {
        this.onNavigate.emit(down ? BsNavigationDirection.DOWN : BsNavigationDirection.UP);
    }
    view(viewMode) {
        this.onViewMode.emit(viewMode);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], BsDatepickerNavigationViewComponent.prototype, "calendar", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], BsDatepickerNavigationViewComponent.prototype, "onNavigate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], BsDatepickerNavigationViewComponent.prototype, "onViewMode", void 0);
BsDatepickerNavigationViewComponent = __decorate([
    Component({
        selector: 'bs-datepicker-navigation-view',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <button class="previous"
            [disabled]="calendar.disableLeftArrow"
            [style.visibility]="calendar.hideLeftArrow ? 'hidden' : 'visible'"
            type="button"
            (click)="navTo(true)">
      <span>&lsaquo;</span>
    </button>

    <ng-container *ngIf="calendar && calendar.monthTitle">
      &#8203;  <!-- zero-width space needed for correct alignment
                  with preserveWhitespaces: false in Angular -->

      <button class="current"
            type="button"
            (click)="view('month')"
      ><span>{{ calendar.monthTitle }}</span>
      </button>
    </ng-container>

    &#8203;  <!-- zero-width space needed for correct alignment
                  with preserveWhitespaces: false in Angular -->

    <button class="current" (click)="view('year')" type="button">
      <span>{{ calendar.yearTitle }}</span>
    </button>

    &#8203;  <!-- zero-width space needed for correct alignment
                  with preserveWhitespaces: false in Angular -->

    <button class="next"
            [disabled]="calendar.disableRightArrow"
            [style.visibility]="calendar.hideRightArrow ? 'hidden' : 'visible'"
            type="button"
            (click)="navTo(false)"><span>&rsaquo;</span>
    </button>
  `
    })
], BsDatepickerNavigationViewComponent);
export { BsDatepickerNavigationViewComponent };
//# sourceMappingURL=bs-datepicker-navigation-view.component.js.map