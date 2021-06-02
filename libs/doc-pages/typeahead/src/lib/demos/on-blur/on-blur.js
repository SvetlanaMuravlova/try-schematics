import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DemoTypeaheadOnBlurComponent = class DemoTypeaheadOnBlurComponent {
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
    typeaheadOnBlur(event) {
        this.optionOnBlur = event.item;
    }
};
DemoTypeaheadOnBlurComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-typeahead-on-blur',
        templateUrl: './on-blur.html'
    })
], DemoTypeaheadOnBlurComponent);
export { DemoTypeaheadOnBlurComponent };
//# sourceMappingURL=on-blur.js.map