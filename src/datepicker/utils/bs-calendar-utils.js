import { getDay, isFirstDayOfWeek, isAfter, isBefore, shiftDate, endOf, startOf, isArray, isSame } from 'ngx-bootstrap/chronos';
export function getStartingDayOfCalendar(date, options) {
    if (isFirstDayOfWeek(date, options.firstDayOfWeek)) {
        return date;
    }
    const weekDay = getDay(date);
    const offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
    return shiftDate(date, { day: -offset });
}
export function calculateDateOffset(weekday, startingDayOffset) {
    const _startingDayOffset = Number(startingDayOffset);
    if (isNaN(_startingDayOffset)) {
        return 0;
    }
    if (_startingDayOffset === 0) {
        return weekday;
    }
    const offset = weekday - _startingDayOffset % 7;
    return offset < 0 ? offset + 7 : offset;
}
export function isMonthDisabled(date, min, max) {
    const minBound = min && isBefore(endOf(date, 'month'), min, 'day');
    const maxBound = max && isAfter(startOf(date, 'month'), max, 'day');
    return minBound || maxBound || false;
}
export function isYearDisabled(date, min, max) {
    const minBound = min && isBefore(endOf(date, 'year'), min, 'day');
    const maxBound = max && isAfter(startOf(date, 'year'), max, 'day');
    return minBound || maxBound || false;
}
export function isDisabledDate(date, datesDisabled) {
    if (!datesDisabled || !isArray(datesDisabled) || !datesDisabled.length) {
        return false;
    }
    return datesDisabled.some((dateDisabled) => isSame(date, dateDisabled, 'date'));
}
export function isEnabledDate(date, datesEnabled) {
    if (!datesEnabled || !isArray(datesEnabled) || !datesEnabled.length) {
        return false;
    }
    return !datesEnabled.some((enabledDate) => isSame(date, enabledDate, 'date'));
}
export function getYearsCalendarInitialDate(state, calendarIndex = 0) {
    const model = state && state.yearsCalendarModel && state.yearsCalendarModel[calendarIndex];
    return (model === null || model === void 0 ? void 0 : model.years[0]) && model.years[0][0] && model.years[0][0].date;
}
//# sourceMappingURL=bs-calendar-utils.js.map