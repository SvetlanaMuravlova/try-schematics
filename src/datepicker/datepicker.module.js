var DatepickerModule_1;
import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerInnerComponent } from './datepicker-inner.component';
import { DatePickerComponent } from './datepicker.component';
import { DatepickerConfig } from './datepicker.config';
import { DayPickerComponent } from './daypicker.component';
import { MonthPickerComponent } from './monthpicker.component';
import { YearPickerComponent } from './yearpicker.component';
let DatepickerModule = DatepickerModule_1 = class DatepickerModule {
    static forRoot() {
        return { ngModule: DatepickerModule_1, providers: [DatepickerConfig] };
    }
};
DatepickerModule = DatepickerModule_1 = __decorate([
    NgModule({
        imports: [CommonModule, FormsModule],
        declarations: [
            DatePickerComponent,
            DatePickerInnerComponent,
            DayPickerComponent,
            MonthPickerComponent,
            YearPickerComponent
        ],
        exports: [
            DatePickerComponent,
            DatePickerInnerComponent,
            DayPickerComponent,
            MonthPickerComponent,
            YearPickerComponent
        ],
        entryComponents: [DatePickerComponent]
    })
], DatepickerModule);
export { DatepickerModule };
//# sourceMappingURL=datepicker.module.js.map