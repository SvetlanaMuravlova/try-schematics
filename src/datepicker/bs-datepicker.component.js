import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { BsDatepickerConfig } from './bs-datepicker.config';
import { BsDatepickerContainerComponent } from './themes/bs/bs-datepicker-container.component';
let BsDatepickerDirective = class BsDatepickerDirective {
    constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * Placement of a datepicker. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'bottom';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        /**
         * Close datepicker on outside click
         */
        this.outsideClick = true;
        /**
         * A selector specifying the element the datepicker should be appended to.
         */
        this.container = 'body';
        this.outsideEsc = true;
        this.isDestroy$ = new Subject();
        /**
         * Indicates whether datepicker's content is enabled or not
         */
        this.isDisabled = false;
        /**
         * Emits when datepicker value has been changed
         */
        this.bsValueChange = new EventEmitter();
        this._subs = [];
        this._dateInputFormat$ = new Subject();
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        this.onShown = this._datepicker.onShown;
        this.onHidden = this._datepicker.onHidden;
        this.isOpen$ = new BehaviorSubject(this.isOpen);
    }
    /**
     * Returns whether or not the datepicker is currently being shown
     */
    get isOpen() {
        return this._datepicker.isShown;
    }
    set isOpen(value) {
        this.isOpen$.next(value);
    }
    /**
     * Initial value of datepicker
     */
    set bsValue(value) {
        if (this._bsValue && value && this._bsValue.getTime() === value.getTime()) {
            return;
        }
        if (!this._bsValue && value) {
            const now = new Date();
            value.setMilliseconds(now.getMilliseconds());
            value.setSeconds(now.getSeconds());
            value.setMinutes(now.getMinutes());
            value.setHours(now.getHours());
        }
        this._bsValue = value;
        this.bsValueChange.emit(value);
    }
    get dateInputFormat$() {
        return this._dateInputFormat$;
    }
    get bsConfig() {
        return this._bsConfig;
    }
    /**
     * Config object for datepicker
     */
    set bsConfig(bsConfig) {
        this._bsConfig = bsConfig;
        this.setConfig();
        this._dateInputFormat$.next(bsConfig && bsConfig.dateInputFormat);
    }
    ngOnInit() {
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
        if (changes.daysDisabled) {
            this._datepickerRef.instance.daysDisabled = this.daysDisabled;
        }
        if (changes.datesDisabled) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
        }
        if (changes.datesEnabled) {
            this._datepickerRef.instance.datesEnabled = this.datesEnabled;
        }
        if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
        if (changes.dateCustomClasses) {
            this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
        }
        if (changes.dateTooltipTexts) {
            this._datepickerRef.instance.dateTooltipTexts = this.dateTooltipTexts;
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
            .attach(BsDatepickerContainerComponent)
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
            this._subs.push(this._datepickerRef.instance.valueChange.subscribe((value) => {
                this.bsValue = value;
                this.hide();
            }));
        }
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
    /**
     * Set config for datepicker
     */
    setConfig() {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
            dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
            dateTooltipTexts: this.dateTooltipTexts || this.bsConfig && this.bsConfig.dateTooltipTexts,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
            datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
            minMode: this.minMode || this.bsConfig && this.bsConfig.minMode
        });
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
], BsDatepickerDirective.prototype, "placement", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], BsDatepickerDirective.prototype, "triggers", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], BsDatepickerDirective.prototype, "outsideClick", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], BsDatepickerDirective.prototype, "container", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], BsDatepickerDirective.prototype, "outsideEsc", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], BsDatepickerDirective.prototype, "onShown", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], BsDatepickerDirective.prototype, "onHidden", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], BsDatepickerDirective.prototype, "isDisabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Date)
], BsDatepickerDirective.prototype, "minDate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Date)
], BsDatepickerDirective.prototype, "maxDate", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], BsDatepickerDirective.prototype, "minMode", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], BsDatepickerDirective.prototype, "daysDisabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], BsDatepickerDirective.prototype, "datesDisabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], BsDatepickerDirective.prototype, "datesEnabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], BsDatepickerDirective.prototype, "dateCustomClasses", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], BsDatepickerDirective.prototype, "dateTooltipTexts", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], BsDatepickerDirective.prototype, "bsValueChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], BsDatepickerDirective.prototype, "isOpen", null);
__decorate([
    Input(),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [Date])
], BsDatepickerDirective.prototype, "bsValue", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], BsDatepickerDirective.prototype, "bsConfig", null);
BsDatepickerDirective = __decorate([
    Directive({
        selector: '[bsDatepicker]',
        exportAs: 'bsDatepicker'
    }),
    __metadata("design:paramtypes", [BsDatepickerConfig,
        ElementRef,
        Renderer2,
        ViewContainerRef,
        ComponentLoaderFactory])
], BsDatepickerDirective);
export { BsDatepickerDirective };
//# sourceMappingURL=bs-datepicker.component.js.map