var TimepickerActions_1;
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let TimepickerActions = TimepickerActions_1 = class TimepickerActions {
    writeValue(value) {
        return {
            type: TimepickerActions_1.WRITE_VALUE,
            payload: value
        };
    }
    changeHours(event) {
        return {
            type: TimepickerActions_1.CHANGE_HOURS,
            payload: event
        };
    }
    changeMinutes(event) {
        return {
            type: TimepickerActions_1.CHANGE_MINUTES,
            payload: event
        };
    }
    changeSeconds(event) {
        return {
            type: TimepickerActions_1.CHANGE_SECONDS,
            payload: event
        };
    }
    setTime(value) {
        return {
            type: TimepickerActions_1.SET_TIME_UNIT,
            payload: value
        };
    }
    updateControls(value) {
        return {
            type: TimepickerActions_1.UPDATE_CONTROLS,
            payload: value
        };
    }
};
TimepickerActions.WRITE_VALUE = '[timepicker] write value from ng model';
TimepickerActions.CHANGE_HOURS = '[timepicker] change hours';
TimepickerActions.CHANGE_MINUTES = '[timepicker] change minutes';
TimepickerActions.CHANGE_SECONDS = '[timepicker] change seconds';
TimepickerActions.SET_TIME_UNIT = '[timepicker] set time unit';
TimepickerActions.UPDATE_CONTROLS = '[timepicker] update controls';
TimepickerActions = TimepickerActions_1 = __decorate([
    Injectable()
], TimepickerActions);
export { TimepickerActions };
//# sourceMappingURL=timepicker.actions.js.map