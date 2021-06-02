var BsDatepickerActions_1;
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let BsDatepickerActions = BsDatepickerActions_1 = class BsDatepickerActions {
    calculate() {
        return { type: BsDatepickerActions_1.CALCULATE };
    }
    format() {
        return { type: BsDatepickerActions_1.FORMAT };
    }
    flag() {
        return { type: BsDatepickerActions_1.FLAG };
    }
    select(date) {
        return {
            type: BsDatepickerActions_1.SELECT,
            payload: date
        };
    }
    changeViewMode(event) {
        return {
            type: BsDatepickerActions_1.CHANGE_VIEWMODE,
            payload: event
        };
    }
    navigateTo(event) {
        return {
            type: BsDatepickerActions_1.NAVIGATE_TO,
            payload: event
        };
    }
    navigateStep(step) {
        return {
            type: BsDatepickerActions_1.NAVIGATE_OFFSET,
            payload: step
        };
    }
    setOptions(options) {
        return {
            type: BsDatepickerActions_1.SET_OPTIONS,
            payload: options
        };
    }
    // date range picker
    selectRange(value) {
        return {
            type: BsDatepickerActions_1.SELECT_RANGE,
            payload: value
        };
    }
    hoverDay(event) {
        return {
            type: BsDatepickerActions_1.HOVER,
            payload: event.isHovered ? event.cell.date : null
        };
    }
    minDate(date) {
        return {
            type: BsDatepickerActions_1.SET_MIN_DATE,
            payload: date
        };
    }
    maxDate(date) {
        return {
            type: BsDatepickerActions_1.SET_MAX_DATE,
            payload: date
        };
    }
    daysDisabled(days) {
        return {
            type: BsDatepickerActions_1.SET_DAYSDISABLED,
            payload: days
        };
    }
    datesDisabled(dates) {
        return {
            type: BsDatepickerActions_1.SET_DATESDISABLED,
            payload: dates
        };
    }
    datesEnabled(dates) {
        return {
            type: BsDatepickerActions_1.SET_DATESENABLED,
            payload: dates
        };
    }
    isDisabled(value) {
        return {
            type: BsDatepickerActions_1.SET_IS_DISABLED,
            payload: value
        };
    }
    setDateCustomClasses(value) {
        return {
            type: BsDatepickerActions_1.SET_DATE_CUSTOM_CLASSES,
            payload: value
        };
    }
    setDateTooltipTexts(value) {
        return {
            type: BsDatepickerActions_1.SET_DATE_TOOLTIP_TEXTS,
            payload: value
        };
    }
    setLocale(locale) {
        return {
            type: BsDatepickerActions_1.SET_LOCALE,
            payload: locale
        };
    }
};
BsDatepickerActions.CALCULATE = '[datepicker] calculate dates matrix';
BsDatepickerActions.FORMAT = '[datepicker] format datepicker values';
BsDatepickerActions.FLAG = '[datepicker] set flags';
BsDatepickerActions.SELECT = '[datepicker] select date';
BsDatepickerActions.NAVIGATE_OFFSET = '[datepicker] shift view date';
BsDatepickerActions.NAVIGATE_TO = '[datepicker] change view date';
BsDatepickerActions.SET_OPTIONS = '[datepicker] update render options';
BsDatepickerActions.HOVER = '[datepicker] hover date';
BsDatepickerActions.CHANGE_VIEWMODE = '[datepicker] switch view mode';
BsDatepickerActions.SET_MIN_DATE = '[datepicker] set min date';
BsDatepickerActions.SET_MAX_DATE = '[datepicker] set max date';
BsDatepickerActions.SET_DAYSDISABLED = '[datepicker] set days disabled';
BsDatepickerActions.SET_DATESDISABLED = '[datepicker] set dates disabled';
BsDatepickerActions.SET_DATESENABLED = '[datepicker] set dates enabled';
BsDatepickerActions.SET_IS_DISABLED = '[datepicker] set is disabled';
BsDatepickerActions.SET_DATE_CUSTOM_CLASSES = '[datepicker] set date custom classes';
BsDatepickerActions.SET_DATE_TOOLTIP_TEXTS = '[datepicker] set date tooltip texts';
BsDatepickerActions.SET_LOCALE = '[datepicker] set datepicker locale';
BsDatepickerActions.SELECT_RANGE = '[daterangepicker] select dates range';
BsDatepickerActions = BsDatepickerActions_1 = __decorate([
    Injectable()
], BsDatepickerActions);
export { BsDatepickerActions };
//# sourceMappingURL=bs-datepicker.actions.js.map