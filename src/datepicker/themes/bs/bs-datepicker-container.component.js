import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { take } from 'rxjs/operators';
import { getFullYear, getMonth } from 'ngx-bootstrap/chronos';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { datepickerAnimation } from '../../datepicker-animations';
import { BsDatepickerAbstractComponent } from '../../base/bs-datepicker-container';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
import { BsDatepickerActions } from '../../reducer/bs-datepicker.actions';
import { BsDatepickerEffects } from '../../reducer/bs-datepicker.effects';
import { BsDatepickerStore } from '../../reducer/bs-datepicker.store';
let BsDatepickerContainerComponent = class BsDatepickerContainerComponent extends BsDatepickerAbstractComponent {
    constructor(_renderer, _config, _store, _element, _actions, _effects, _positionService) {
        super();
        this._config = _config;
        this._store = _store;
        this._element = _element;
        this._actions = _actions;
        this._positionService = _positionService;
        this.valueChange = new EventEmitter();
        this.animationState = 'void';
        this._subs = [];
        this._effects = _effects;
        _renderer.setStyle(_element.nativeElement, 'display', 'block');
        _renderer.setStyle(_element.nativeElement, 'position', 'absolute');
    }
    set value(value) {
        var _a;
        (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setValue(value);
    }
    ngOnInit() {
        var _a, _b;
        this._positionService.setOptions({
            modifiers: { flip: { enabled: this._config.adaptivePosition } },
            allowedPositions: ['top', 'bottom']
        });
        (_a = this._positionService.event$) === null || _a === void 0 ? void 0 : _a.pipe(take(1)).subscribe(() => {
            this._positionService.disable();
            if (this._config.isAnimated) {
                this.animationState = this.isTopPosition ? 'animated-up' : 'animated-down';
                return;
            }
            this.animationState = 'unanimated';
        });
        this.isOtherMonthsActive = this._config.selectFromOtherMonth;
        this.containerClass = this._config.containerClass;
        this.showTodayBtn = this._config.showTodayButton;
        this.todayBtnLbl = this._config.todayButtonLabel;
        this.todayPos = this._config.todayPosition;
        this.showClearBtn = this._config.showClearButton;
        this.clearBtnLbl = this._config.clearButtonLabel;
        this.clearPos = this._config.clearPosition;
        this.customRangeBtnLbl = this._config.customRangeButtonLabel;
        (_b = this._effects) === null || _b === void 0 ? void 0 : _b.init(this._store).setOptions(this._config).setBindings(this).setEventHandlers(this).registerDatepickerSideEffects();
        // todo: move it somewhere else
        // on selected date change
        this._subs.push(this._store
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .select((state) => state.selectedDate)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .subscribe((date) => this.valueChange.emit(date)));
        this._store.dispatch(this._actions.changeViewMode(this._config.startView));
    }
    get isTopPosition() {
        return this._element.nativeElement.classList.contains('top');
    }
    positionServiceEnable() {
        this._positionService.enable();
    }
    daySelectHandler(day) {
        if (!day) {
            return;
        }
        const isDisabled = this.isOtherMonthsActive ? day.isDisabled : (day.isOtherMonth || day.isDisabled);
        if (isDisabled) {
            return;
        }
        this._store.dispatch(this._actions.select(day.date));
    }
    monthSelectHandler(day) {
        if (!day || day.isDisabled) {
            return;
        }
        this._store.dispatch(this._actions.navigateTo({
            unit: {
                month: getMonth(day.date),
                year: getFullYear(day.date)
            },
            viewMode: 'day'
        }));
    }
    yearSelectHandler(day) {
        if (!day || day.isDisabled) {
            return;
        }
        this._store.dispatch(this._actions.navigateTo({
            unit: {
                year: getFullYear(day.date)
            },
            viewMode: 'month'
        }));
    }
    setToday() {
        this._store.dispatch(this._actions.select(new Date()));
    }
    clearDate() {
        this._store.dispatch(this._actions.select(undefined));
    }
    ngOnDestroy() {
        var _a;
        for (const sub of this._subs) {
            sub.unsubscribe();
        }
        (_a = this._effects) === null || _a === void 0 ? void 0 : _a.destroy();
    }
};
BsDatepickerContainerComponent = __decorate([
    Component({
        selector: 'bs-datepicker-container',
        providers: [BsDatepickerStore, BsDatepickerEffects],
        templateUrl: './bs-datepicker-view.html',
        host: {
            class: 'bottom',
            '(click)': '_stopPropagation($event)',
            role: 'dialog',
            'aria-label': 'calendar'
        },
        animations: [datepickerAnimation]
    }),
    __metadata("design:paramtypes", [Renderer2,
        BsDatepickerConfig,
        BsDatepickerStore,
        ElementRef,
        BsDatepickerActions,
        BsDatepickerEffects,
        PositioningService])
], BsDatepickerContainerComponent);
export { BsDatepickerContainerComponent };
//# sourceMappingURL=bs-datepicker-container.component.js.map