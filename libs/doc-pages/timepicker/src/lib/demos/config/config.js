import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { TimepickerConfig } from 'ngx-bootstrap/timepicker';
// such override allows to keep some initial values
export function getTimepickerConfig() {
    return Object.assign(new TimepickerConfig(), {
        hourStep: 2,
        minuteStep: 10,
        showMeridian: false,
        readonlyInput: false,
        mousewheel: true,
        showMinutes: true,
        showSeconds: false,
        labelHours: 'Hours',
        labelMinutes: 'Minutes',
        labelSeconds: 'Seconds'
    });
}
let DemoTimepickerConfigComponent = class DemoTimepickerConfigComponent {
};
DemoTimepickerConfigComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-timepicker-config',
        templateUrl: './config.html',
        providers: [{ provide: TimepickerConfig, useFactory: getTimepickerConfig }]
    })
], DemoTimepickerConfigComponent);
export { DemoTimepickerConfigComponent };
//# sourceMappingURL=config.js.map