import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
let DemoTypeaheadOrderingComponent = class DemoTypeaheadOrderingComponent {
    constructor() {
        this.sortConfig1 = {
            direction: 'desc'
        };
        this.sortConfig2 = {
            direction: 'asc'
        };
        this.sortConfig3 = {
            direction: 'asc',
            field: 'city'
        };
        this.states = [
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
            'Alaska',
            'Alabama',
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
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
        this.cities = [{
                city: 'Norton',
                state: 'Virginia',
                code: '61523'
            }, {
                city: 'Grundy',
                state: 'Virginia',
                code: '77054'
            }, {
                city: 'Coeburn',
                state: 'Virginia',
                code: '01665'
            }, {
                city: 'Phoenix',
                state: 'Arizona',
                code: '29128'
            }, {
                city: 'Tucson',
                state: 'Arizona',
                code: '32084'
            }, {
                city: 'Mesa',
                state: 'Arizona',
                code: '21465'
            }, {
                city: 'Independence',
                state: 'Missouri',
                code: '26887'
            }, {
                city: 'Kansas City',
                state: 'Missouri',
                code: '79286'
            }, {
                city: 'Springfield',
                state: 'Missouri',
                code: '92325'
            }, {
                city: 'St. Louis',
                state: 'Missouri',
                code: '64891'
            }];
    }
    ngOnInit() {
        this.states$ = new Observable((observer) => {
            // Runs on every search
            observer.next(this.selected4);
        })
            .pipe(switchMap((token) => {
            const query = new RegExp(token, 'i');
            return of(this.states.filter((state) => query.test(state)));
        }));
    }
};
DemoTypeaheadOrderingComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-typeahead-ordering',
        templateUrl: './ordering.html'
    })
], DemoTypeaheadOrderingComponent);
export { DemoTypeaheadOrderingComponent };
//# sourceMappingURL=ordering.js.map