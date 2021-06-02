import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePickerInnerComponent } from './datepicker-inner.component';
import { DatepickerConfig } from './datepicker.config';
export const DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatePickerComponent),
    multi: true
};
let DatePickerComponent = class DatePickerComponent {
    constructor(config) {
        /** sets datepicker mode, supports: `day`, `month`, `year` */
        this.datepickerMode = 'day';
        /** if false week numbers will be hidden */
        this.showWeeks = true;
        /** number of months displayed in a single row of month picker */
        this.monthColLimit = 3;
        /** number of years displayed in a single row of year picker */
        this.yearColLimit = 5;
        this.selectionDone = new EventEmitter(undefined);
        /** callback to invoke when the activeDate is changed. */
        this.activeDateChange = new EventEmitter(undefined);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.onChange = Function.prototype;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.onTouched = Function.prototype;
        this._now = new Date();
        this.config = config;
        this.configureOptions();
    }
    /** currently active date */
    get activeDate() {
        return this._activeDate || this._now;
    }
    set activeDate(value) {
        this._activeDate = value;
    }
    configureOptions() {
        Object.assign(this, this.config);
    }
    onUpdate(event) {
        this.activeDate = event;
        this.onChange(event);
    }
    onSelectionDone(event) {
        this.selectionDone.emit(event);
    }
    onActiveDateChange(event) {
        this.activeDateChange.emit(event);
    }
    // todo: support null value
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    writeValue(value) {
        var _a, _b;
        if (((_a = this._datePicker) === null || _a === void 0 ? void 0 : _a.compare(value, this._activeDate)) === 0) {
            return;
        }
        if (value && value instanceof Date) {
            this.activeDate = value;
            (_b = this._datePicker) === null || _b === void 0 ? void 0 : _b.select(value, false);
            return;
        }
        this.activeDate = value ? new Date(value) : void 0;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], DatePickerComponent.prototype, "datepickerMode", void 0);
__decorate([
    Input(),
    __metadata("design:type", Date)
], DatePickerComponent.prototype, "initDate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Date)
], DatePickerComponent.prototype, "minDate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Date)
], DatePickerComponent.prototype, "maxDate", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DatePickerComponent.prototype, "minMode", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DatePickerComponent.prototype, "maxMode", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DatePickerComponent.prototype, "showWeeks", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DatePickerComponent.prototype, "formatDay", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DatePickerComponent.prototype, "formatMonth", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DatePickerComponent.prototype, "formatYear", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DatePickerComponent.prototype, "formatDayHeader", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DatePickerComponent.prototype, "formatDayTitle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DatePickerComponent.prototype, "formatMonthTitle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DatePickerComponent.prototype, "startingDay", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DatePickerComponent.prototype, "yearRange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "onlyCurrentMonth", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "shortcutPropagation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DatePickerComponent.prototype, "monthColLimit", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DatePickerComponent.prototype, "yearColLimit", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], DatePickerComponent.prototype, "customClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], DatePickerComponent.prototype, "dateDisabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], DatePickerComponent.prototype, "dayDisabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [Date])
], DatePickerComponent.prototype, "activeDate", null);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DatePickerComponent.prototype, "selectionDone", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DatePickerComponent.prototype, "activeDateChange", void 0);
__decorate([
    ViewChild(DatePickerInnerComponent, { static: true }),
    __metadata("design:type", DatePickerInnerComponent)
], DatePickerComponent.prototype, "_datePicker", void 0);
DatePickerComponent = __decorate([
    Component({
        selector: 'datepicker',
        template: `
    <datepicker-inner [activeDate]="activeDate"
                      (update)="onUpdate($event)"
                      [locale]="config.locale"
                      [datepickerMode]="datepickerMode"
                      [initDate]="initDate"
                      [minDate]="minDate"
                      [maxDate]="maxDate"
                      [minMode]="minMode"
                      [maxMode]="maxMode"
                      [showWeeks]="showWeeks"
                      [formatDay]="formatDay"
                      [formatMonth]="formatMonth"
                      [formatYear]="formatYear"
                      [formatDayHeader]="formatDayHeader"
                      [formatDayTitle]="formatDayTitle"
                      [formatMonthTitle]="formatMonthTitle"
                      [startingDay]="startingDay"
                      [yearRange]="yearRange"
                      [customClass]="customClass"
                      [dateDisabled]="dateDisabled"
                      [dayDisabled]="dayDisabled"
                      [onlyCurrentMonth]="onlyCurrentMonth"
                      [shortcutPropagation]="shortcutPropagation"
                      [monthColLimit]="monthColLimit"
                      [yearColLimit]="yearColLimit"
                      (selectionDone)="onSelectionDone($event)"
                      (activeDateChange)="onActiveDateChange($event)">
      <daypicker tabindex="0"></daypicker>
      <monthpicker tabindex="0"></monthpicker>
      <yearpicker tabindex="0"></yearpicker>
    </datepicker-inner>
    `,
        providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [DatepickerConfig])
], DatePickerComponent);
export { DatePickerComponent };
//# sourceMappingURL=datepicker.component.js.map