import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { MiniStore, MiniState } from 'ngx-bootstrap/mini-ngrx';
import { initialDatepickerState } from './bs-datepicker.state';
import { BehaviorSubject } from 'rxjs';
import { bsDatepickerReducer } from './bs-datepicker.reducer';
let BsDatepickerStore = class BsDatepickerStore extends MiniStore {
    constructor() {
        const _dispatcher = new BehaviorSubject({
            type: '[datepicker] dispatcher init'
        });
        const state = new MiniState(initialDatepickerState, _dispatcher, bsDatepickerReducer);
        super(_dispatcher, bsDatepickerReducer, state);
    }
};
BsDatepickerStore = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], BsDatepickerStore);
export { BsDatepickerStore };
//# sourceMappingURL=bs-datepicker.store.js.map