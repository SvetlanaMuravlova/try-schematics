import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { filter } from 'rxjs/operators';
import { BsDatepickerConfig } from './bs-datepicker.config';
import { BsDaterangepickerInlineConfig } from './bs-daterangepicker-inline.config';
import { BsDaterangepickerInlineContainerComponent } from './themes/bs/bs-daterangepicker-inline-container.component';
let BsDaterangepickerInlineDirective = class BsDaterangepickerInlineDirective {
    constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        this._elementRef = _elementRef;
        /**
         * Indicates whether datepicker is enabled or not
         */
        this.isDisabled = false;
        /**
         * Emits when daterangepicker value has been changed
         */
        this.bsValueChange = new EventEmitter();
        this._subs = [];
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
    }
    /**
     * Initial value of datepicker
     */
    set bsValue(value) {
        if (this._bsValue === value) {
            return;
        }
        this._bsValue = value;
        this.bsValueChange.emit(value);
    }
    ngOnInit() {
        this.setConfig();
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe((value) => {
            if (this._datepickerRef) {
                this._datepickerRef.instance.value = value;
            }
        }));
        // if date changes from picker (view -> model)
        if (this._datepickerRef) {
            this._subs.push(this._datepickerRef.instance.valueChange
                .pipe(filter((range) => range && range[0] && !!range[1]))
                .subscribe((value) => {
                this.bsValue = value;
            }));
        }
    }
    ngOnChanges(changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes.minDate) {
            this._datepickerRef.instance.minDate = this.minDate;
            this.setConfig();
        }
        if (changes.maxDate) {
            this._datepickerRef.instance.maxDate = this.maxDate;
            this.setConfig();
        }
        if (changes.datesEnabled) {
            this._datepickerRef.instance.datesEnabled = this.datesEnabled;
        }
        if (changes.datesDisabled) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
            this.setConfig();
        }
        if (changes.daysDisabled) {
            this._datepickerRef.instance.daysDisabled = this.daysDisabled;
            this.setConfig();
        }
        if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
            this.setConfig();
        }
        if (changes.dateCustomClasses) {
            this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
            this.setConfig();
        }
    }
    /**
     * Set config for datepicker
     */
    setConfig() {
        if (this._datepicker) {
            this._datepicker.hide();
        }
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
            dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
            datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
            ranges: this.bsConfig && this.bsConfig.ranges,
            maxDateRange: this.bsConfig && this.bsConfig.maxDateRange
        });
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDaterangepickerInlineContainerComponent)
            .to(this._elementRef)
            .show();
    }
    ngOnDestroy() {
        this._datepicker.dispose();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], BsDaterangepickerInlineDirective.prototype, "bsValue", null);
__decorate([
    Input(),
    __metadata("design:type", Object)
], BsDaterangepickerInlineDirective.prototype, "bsConfig", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], BsDaterangepickerInlineDirective.prototype, "isDisabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Date)
], BsDaterangepickerInlineDirective.prototype, "minDate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Date)
], BsDaterangepickerInlineDirective.prototype, "maxDate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], BsDaterangepickerInlineDirective.prototype, "dateCustomClasses", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], BsDaterangepickerInlineDirective.prototype, "daysDisabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], BsDaterangepickerInlineDirective.prototype, "datesDisabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], BsDaterangepickerInlineDirective.prototype, "datesEnabled", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], BsDaterangepickerInlineDirective.prototype, "bsValueChange", void 0);
BsDaterangepickerInlineDirective = __decorate([
    Directive({
        selector: 'bs-daterangepicker-inline',
        exportAs: 'bsDaterangepickerInline'
    }),
    __metadata("design:paramtypes", [BsDaterangepickerInlineConfig,
        ElementRef,
        Renderer2,
        ViewContainerRef,
        ComponentLoaderFactory])
], BsDaterangepickerInlineDirective);
export { BsDaterangepickerInlineDirective };
//# sourceMappingURL=bs-daterangepicker-inline.component.js.map