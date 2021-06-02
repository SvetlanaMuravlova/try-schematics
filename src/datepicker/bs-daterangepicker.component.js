import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { BsDaterangepickerConfig } from './bs-daterangepicker.config';
import { BsDaterangepickerContainerComponent } from './themes/bs/bs-daterangepicker-container.component';
import { Subject, BehaviorSubject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { BsDatepickerConfig } from './bs-datepicker.config';
let BsDaterangepickerDirective = class BsDaterangepickerDirective {
    constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * Placement of a daterangepicker. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'bottom';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        /**
         * Close daterangepicker on outside click
         */
        this.outsideClick = true;
        /**
         * A selector specifying the element the daterangepicker should be appended to.
         */
        this.container = 'body';
        this.outsideEsc = true;
        this.isDestroy$ = new Subject();
        /**
         * Indicates whether daterangepicker's content is enabled or not
         */
        this.isDisabled = false;
        /**
         * Emits when daterangepicker value has been changed
         */
        this.bsValueChange = new EventEmitter();
        this._subs = [];
        this._rangeInputFormat$ = new Subject();
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        Object.assign(this, _config);
        this.onShown = this._datepicker.onShown;
        this.onHidden = this._datepicker.onHidden;
        this.isOpen$ = new BehaviorSubject(this.isOpen);
    }
    /**
     * Returns whether or not the daterangepicker is currently being shown
     */
    get isOpen() {
        return this._datepicker.isShown;
    }
    set isOpen(value) {
        this.isOpen$.next(value);
    }
    /**
     * Initial value of daterangepicker
     */
    set bsValue(value) {
        if (this._bsValue === value) {
            return;
        }
        this._bsValue = value;
        this.bsValueChange.emit(value);
    }
    /**
     * Config object for daterangepicker
     */
    set bsConfig(bsConfig) {
        this._bsConfig = bsConfig;
        this.setConfig();
        this._rangeInputFormat$.next(bsConfig && bsConfig.rangeInputFormat);
    }
    get bsConfig() {
        return this._bsConfig;
    }
    get rangeInputFormat$() {
        return this._rangeInputFormat$;
    }
    ngOnInit() {
        this.isDestroy$ = new Subject();
        this._datepicker.listen({
            outsideClick: this.outsideClick,
            outsideEsc: this.outsideEsc,
            triggers: this.triggers,
            show: () => this.show()
        });
        this.setConfig();
    }
    ngOnChanges(changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes.minDate) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes.maxDate) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes.datesDisabled) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
        }
        if (changes.datesEnabled) {
            this._datepickerRef.instance.datesEnabled = this.datesEnabled;
        }
        if (changes.daysDisabled) {
            this._datepickerRef.instance.daysDisabled = this.daysDisabled;
        }
        if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
        if (changes.dateCustomClasses) {
            this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
        }
    }
    ngAfterViewInit() {
        this.isOpen$.pipe(filter(isOpen => isOpen !== this.isOpen), takeUntil(this.isDestroy$))
            .subscribe(() => this.toggle());
    }
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    show() {
        if (this._datepicker.isShown) {
            return;
        }
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDaterangepickerContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({ placement: this.placement });
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
                this.hide();
            }));
        }
    }
    /**
     * Set config for daterangepicker
     */
    setConfig() {
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
    }
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    hide() {
        if (this.isOpen) {
            this._datepicker.hide();
        }
        for (const sub of this._subs) {
            sub.unsubscribe();
        }
        if (this._config.returnFocusToInput) {
            this._renderer.selectRootElement(this._elementRef.nativeElement).focus();
        }
    }
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    ngOnDestroy() {
        this._datepicker.dispose();
        this.isOpen$.next(false);
        if (this.isDestroy$) {
            this.isDestroy$.next();
            this.isDestroy$.complete();
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], BsDaterangepickerDirective.prototype, "placement", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], BsDaterangepickerDirective.prototype, "triggers", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], BsDaterangepickerDirective.prototype, "outsideClick", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], BsDaterangepickerDirective.prototype, "container", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], BsDaterangepickerDirective.prototype, "outsideEsc", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], BsDaterangepickerDirective.prototype, "isOpen", null);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], BsDaterangepickerDirective.prototype, "onShown", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], BsDaterangepickerDirective.prototype, "onHidden", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], BsDaterangepickerDirective.prototype, "bsValue", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], BsDaterangepickerDirective.prototype, "bsConfig", null);
__decorate([
    Input(),
    __metadata("design:type", Object)
], BsDaterangepickerDirective.prototype, "isDisabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Date)
], BsDaterangepickerDirective.prototype, "minDate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Date)
], BsDaterangepickerDirective.prototype, "maxDate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], BsDaterangepickerDirective.prototype, "dateCustomClasses", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], BsDaterangepickerDirective.prototype, "daysDisabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], BsDaterangepickerDirective.prototype, "datesDisabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], BsDaterangepickerDirective.prototype, "datesEnabled", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], BsDaterangepickerDirective.prototype, "bsValueChange", void 0);
BsDaterangepickerDirective = __decorate([
    Directive({
        selector: '[bsDaterangepicker]',
        exportAs: 'bsDaterangepicker'
    }),
    __metadata("design:paramtypes", [BsDaterangepickerConfig,
        ElementRef,
        Renderer2,
        ViewContainerRef,
        ComponentLoaderFactory])
], BsDaterangepickerDirective);
export { BsDaterangepickerDirective };
//# sourceMappingURL=bs-daterangepicker.component.js.map