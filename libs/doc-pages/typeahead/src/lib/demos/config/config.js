import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { TypeaheadConfig } from 'ngx-bootstrap/typeahead';
// such override allows to keep some initial values
export function getTypeaheadConfig() {
    return Object.assign(new TypeaheadConfig(), { hideResultsOnBlur: false });
}
let DemoTypeaheadConfigComponent = class DemoTypeaheadConfigComponent {
    constructor() {
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Dakota',
            'North Carolina',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
    }
};
DemoTypeaheadConfigComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-typeahead-config',
        templateUrl: './config.html',
        providers: [{ provide: TypeaheadConfig, useFactory: getTypeaheadConfig }]
    })
], DemoTypeaheadConfigComponent);
export { DemoTypeaheadConfigComponent };
//# sourceMappingURL=config.js.map