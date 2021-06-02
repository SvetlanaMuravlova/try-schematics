import { __decorate, __metadata } from "tslib";
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
let BsCustomDatesViewComponent = class BsCustomDatesViewComponent {
    constructor() {
        this.onSelect = new EventEmitter();
    }
    selectFromRanges(range) {
        this.onSelect.emit(range);
    }
    checkRange() {
        return this.ranges ? this.ranges.filter(range => range.value === this.selectedRange).length > 0 : false;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], BsCustomDatesViewComponent.prototype, "ranges", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], BsCustomDatesViewComponent.prototype, "selectedRange", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], BsCustomDatesViewComponent.prototype, "customRangeLabel", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], BsCustomDatesViewComponent.prototype, "onSelect", void 0);
BsCustomDatesViewComponent = __decorate([
    Component({
        selector: 'bs-custom-date-view',
        template: `
    <div class="bs-datepicker-predefined-btns">
      <button *ngFor="let range of ranges"
        type="button"
        class="btn"
        (click)="selectFromRanges(range)"
        [class.selected]="range.value === selectedRange">
        {{ range.label }}
      </button>
      <button
        type="button"
        class="btn"
        (click)="selectFromRanges(customRange)"
        [class.selected]="!checkRange()">
        {{customRangeLabel}}
      </button>
    </div>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], BsCustomDatesViewComponent);
export { BsCustomDatesViewComponent };
//# sourceMappingURL=bs-custom-dates-view.component.js.map