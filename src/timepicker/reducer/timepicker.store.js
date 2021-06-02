import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { timepickerReducer, initialState } from './timepicker.reducer';
import { BehaviorSubject } from 'rxjs';
import { MiniStore, MiniState } from 'ngx-bootstrap/mini-ngrx';
let TimepickerStore = class TimepickerStore extends MiniStore {
    constructor() {
        const _dispatcher = new BehaviorSubject({
            type: '[mini-ngrx] dispatcher init'
        });
        const state = new MiniState(initialState, _dispatcher, timepickerReducer);
        super(_dispatcher, timepickerReducer, state);
    }
};
TimepickerStore = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], TimepickerStore);
export { TimepickerStore };
//# sourceMappingURL=timepicker.store.js.map