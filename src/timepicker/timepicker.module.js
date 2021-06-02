var TimepickerModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimepickerComponent } from './timepicker.component';
import { TimepickerActions } from './reducer/timepicker.actions';
import { TimepickerStore } from './reducer/timepicker.store';
let TimepickerModule = TimepickerModule_1 = class TimepickerModule {
    static forRoot() {
        return {
            ngModule: TimepickerModule_1,
            providers: [TimepickerActions, TimepickerStore]
        };
    }
};
TimepickerModule = TimepickerModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [TimepickerComponent],
        exports: [TimepickerComponent]
    })
], TimepickerModule);
export { TimepickerModule };
//# sourceMappingURL=timepicker.module.js.map