import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let DatepickerDemoComponent = class DatepickerDemoComponent {
    constructor() {
        this.dt = new Date();
        this.minDate = void 0;
        this.formats = [
            'DD-MM-YYYY',
            'YYYY/MM/DD',
            'DD.MM.YYYY',
            'shortDate'
        ];
        this.format = this.formats[0];
        this.dateOptions = {
            formatYear: 'YY',
            startingDay: 1
        };
        this.opened = false;
        (this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
        (this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);
        (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);
        this.dateDisabled = [];
        this.events = [
            { date: this.tomorrow, status: 'full' },
            { date: this.afterTomorrow, status: 'partially' }
        ];
    }
    getDate() {
        return (this.dt && this.dt.getTime()) || new Date().getTime();
    }
    today() {
        this.dt = new Date();
    }
    d20090824() {
        this.dt = new Date(2009, 7, 24);
    }
    disableTomorrow() {
        this.dateDisabled = [{ date: this.tomorrow, mode: 'day' }];
    }
    // todo: implement custom class cases
    getDayClass(date, mode) {
        if (mode === 'day') {
            const dayToCheck = new Date(date).setHours(0, 0, 0, 0);
            for (const event of this.events) {
                const currentDay = new Date(event.date).setHours(0, 0, 0, 0);
                if (dayToCheck === currentDay) {
                    return event.status;
                }
            }
        }
        return '';
    }
    disabled(date, mode) {
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }
    open() {
        this.opened = !this.opened;
    }
    clear() {
        this.dt = void 0;
        this.dateDisabled = undefined;
    }
    toggleMin() {
        if (!this.minDate) {
            return;
        }
        this.dt = new Date(this.minDate.valueOf());
    }
};
DatepickerDemoComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'datepicker-demo',
        templateUrl: './datepicker-demo.component.html'
    }),
    __metadata("design:paramtypes", [])
], DatepickerDemoComponent);
export { DatepickerDemoComponent };
//# sourceMappingURL=datepicker-demo.component.js.map