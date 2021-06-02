import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { noop, Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
let DemoTypeaheadAsyncHttpRequestComponent = class DemoTypeaheadAsyncHttpRequestComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.suggestions$ = new Observable((observer) => {
            observer.next(this.search);
        }).pipe(switchMap((query) => {
            if (query) {
                // using github public api to get users by name
                return this.http.get('https://api.github.com/search/users', {
                    params: { q: query }
                }).pipe(map((data) => data && data.items || []), tap(() => noop, err => {
                    // in case of http error
                    this.errorMessage = err && err.message || 'Something goes wrong';
                }));
            }
            return of([]);
        }));
    }
};
DemoTypeaheadAsyncHttpRequestComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'demo-typeahead-async-http',
        templateUrl: './async-http-request.html'
    }),
    __metadata("design:paramtypes", [HttpClient])
], DemoTypeaheadAsyncHttpRequestComponent);
export { DemoTypeaheadAsyncHttpRequestComponent };
//# sourceMappingURL=async-http-request.js.map