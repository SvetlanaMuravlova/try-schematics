import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
let DemoDatePickerCustomFormatComponent = class DemoDatePickerCustomFormatComponent {
    constructor() {
        this.currentDate = new Date();
        this.form = new FormGroup({
            dateYMD: new FormControl(new Date()),
            dateFull: new FormControl(new Date()),
            dateMDY: new FormControl(new Date()),
            dateRange: new FormControl([
                new Date(),
                new Date(this.currentDate.setDate(this.currentDate.getDate() + 7))
            ])
        });
    }
};
DemoDatePickerCustomFormatComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-date-picker-custom-format',
        templateUrl: './custom-format.html'
    })
], DemoDatePickerCustomFormatComponent);
export { DemoDatePickerCustomFormatComponent };
//# sourceMappingURL=custom-format.js.map