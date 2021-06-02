import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoTypeaheadNoResultComponent = class DemoTypeaheadNoResultComponent {
    constructor() {
        this.noResult = false;
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
    typeaheadNoResults(event) {
        this.noResult = event;
    }
};
DemoTypeaheadNoResultComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-typeahead-no-result',
        templateUrl: './no-result.html'
    })
], DemoTypeaheadNoResultComponent);
export { DemoTypeaheadNoResultComponent };
//# sourceMappingURL=no-result.js.map