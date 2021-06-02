import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { TooltipContainerComponent } from './tooltip-container.component';
import { TooltipConfig } from './tooltip.config';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { OnChange, warnOnce, parseTriggers } from 'ngx-bootstrap/utils';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { timer } from 'rxjs';
let id = 0;
let TooltipDirective = class TooltipDirective {
    constructor(_viewContainerRef, cis, config, _elementRef, _renderer, _positionService) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._positionService = _positionService;
        this.tooltipId = id++;
        /** sets disable adaptive position */
        this.adaptivePosition = true;
        /** Fired when tooltip content changes */
        this.tooltipChange = new EventEmitter();
        /**
         * Placement of a tooltip. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'hover focus';
        /**
         * Css class for tooltip container
         */
        this.containerClass = '';
        /**
         * Allows to disable tooltip
         */
        this.isDisabled = false;
        /**
         * Delay before showing the tooltip
         */
        this.delay = 0;
        /** @deprecated - removed, will be added to configuration */
        this.tooltipAnimation = true;
        /** @deprecated */
        this.tooltipFadeDuration = 150;
        /** @deprecated */
        this.tooltipStateChanged = new EventEmitter();
        this._tooltip = cis
            .createLoader(this._elementRef, _viewContainerRef, this._renderer)
            .provide({ provide: TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    /**
     * Returns whether or not the tooltip is currently being shown
     */
    get isOpen() {
        return this._tooltip.isShown;
    }
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /** @deprecated - please use `tooltip` instead */
    set htmlContent(value) {
        warnOnce('tooltipHtml was deprecated, please use `tooltip` instead');
        this.tooltip = value;
    }
    /** @deprecated - please use `placement` instead */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _placement(value) {
        warnOnce('tooltipPlacement was deprecated, please use `placement` instead');
        this.placement = value;
    }
    /** @deprecated - please use `isOpen` instead */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _isOpen(value) {
        warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
        this.isOpen = value;
    }
    get _isOpen() {
        warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
        return this.isOpen;
    }
    /** @deprecated - please use `isDisabled` instead */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _enable(value) {
        warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
        this.isDisabled = !value;
    }
    get _enable() {
        warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
        return this.isDisabled;
    }
    /** @deprecated - please use `container="body"` instead */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _appendToBody(value) {
        warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
        this.container = value ? 'body' : this.container;
    }
    get _appendToBody() {
        warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
        return this.container === 'body';
    }
    /** @deprecated - will replaced with customClass */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _popupClass(value) {
        warnOnce('tooltipClass deprecated');
    }
    /** @deprecated - removed */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _tooltipContext(value) {
        warnOnce('tooltipContext deprecated');
    }
    /** @deprecated */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _tooltipPopupDelay(value) {
        warnOnce('tooltipPopupDelay is deprecated, use `delay` instead');
        this.delay = value;
    }
    /** @deprecated -  please use `triggers` instead */
    get _tooltipTrigger() {
        warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
        return this.triggers;
    }
    set _tooltipTrigger(value) {
        warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
        this.triggers = (value || '').toString();
    }
    ngOnInit() {
        this._tooltip.listen({
            triggers: this.triggers,
            show: () => this.show()
        });
        this.tooltipChange.subscribe((value) => {
            if (!value) {
                this._tooltip.hide();
            }
        });
        this.onShown.subscribe(() => {
            this.setAriaDescribedBy();
        });
        this.onHidden.subscribe(() => {
            this.setAriaDescribedBy();
        });
    }
    setAriaDescribedBy() {
        this._ariaDescribedby = this.isOpen ? `tooltip-${this.tooltipId}` : void 0;
        if (this._ariaDescribedby) {
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ariaDescribedby);
        }
        else {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
        }
    }
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    show() {
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: this.adaptivePosition
                },
                preventOverflow: {
                    enabled: this.adaptivePosition,
                    boundariesElement: this.boundariesElement || 'scrollParent'
                }
            }
        });
        if (this.isOpen ||
            this.isDisabled ||
            this._delayTimeoutId ||
            !this.tooltip) {
            return;
        }
        const showTooltip = () => {
            if (this._delayTimeoutId) {
                this._delayTimeoutId = undefined;
            }
            this._tooltip
                .attach(TooltipContainerComponent)
                .to(this.container)
                .position({ attachment: this.placement })
                .show({
                content: this.tooltip,
                placement: this.placement,
                containerClass: this.containerClass,
                id: `tooltip-${this.tooltipId}`
            });
        };
        const cancelDelayedTooltipShowing = () => {
            if (this._tooltipCancelShowFn) {
                this._tooltipCancelShowFn();
            }
        };
        if (this.delay) {
            if (this._delaySubscription) {
                this._delaySubscription.unsubscribe();
            }
            this._delaySubscription = timer(this.delay).subscribe(() => {
                showTooltip();
                cancelDelayedTooltipShowing();
            });
            if (this.triggers) {
                parseTriggers(this.triggers)
                    .forEach((trigger) => {
                    if (!trigger.close) {
                        return;
                    }
                    this._tooltipCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, trigger.close, () => {
                        var _a;
                        (_a = this._delaySubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
                        cancelDelayedTooltipShowing();
                    });
                });
            }
        }
        else {
            showTooltip();
        }
    }
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    hide() {
        var _a;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        if ((_a = this._tooltip.instance) === null || _a === void 0 ? void 0 : _a.classMap) {
            this._tooltip.instance.classMap.in = false;
        }
        setTimeout(() => {
            this._tooltip.hide();
        }, this.tooltipFadeDuration);
    }
    ngOnDestroy() {
        this._tooltip.dispose();
        this.tooltipChange.unsubscribe();
        if (this._delaySubscription) {
            this._delaySubscription.unsubscribe();
        }
        this.onShown.unsubscribe();
        this.onHidden.unsubscribe();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], TooltipDirective.prototype, "adaptivePosition", void 0);
__decorate([
    OnChange(),
    Input(),
    __metadata("design:type", Object)
], TooltipDirective.prototype, "tooltip", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TooltipDirective.prototype, "tooltipChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TooltipDirective.prototype, "placement", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TooltipDirective.prototype, "triggers", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TooltipDirective.prototype, "container", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TooltipDirective.prototype, "containerClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TooltipDirective.prototype, "boundariesElement", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TooltipDirective.prototype, "isOpen", null);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TooltipDirective.prototype, "isDisabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TooltipDirective.prototype, "delay", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TooltipDirective.prototype, "onShown", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TooltipDirective.prototype, "onHidden", void 0);
__decorate([
    Input('tooltipHtml'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TooltipDirective.prototype, "htmlContent", null);
__decorate([
    Input('tooltipPlacement'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TooltipDirective.prototype, "_placement", null);
__decorate([
    Input('tooltipIsOpen'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TooltipDirective.prototype, "_isOpen", null);
__decorate([
    Input('tooltipEnable'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TooltipDirective.prototype, "_enable", null);
__decorate([
    Input('tooltipAppendToBody'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TooltipDirective.prototype, "_appendToBody", null);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TooltipDirective.prototype, "tooltipAnimation", void 0);
__decorate([
    Input('tooltipClass'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TooltipDirective.prototype, "_popupClass", null);
__decorate([
    Input('tooltipContext'),
    __metadata("design:type", void 0),
    __metadata("design:paramtypes", [void 0])
], TooltipDirective.prototype, "_tooltipContext", null);
__decorate([
    Input('tooltipPopupDelay'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], TooltipDirective.prototype, "_tooltipPopupDelay", null);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TooltipDirective.prototype, "tooltipFadeDuration", void 0);
__decorate([
    Input('tooltipTrigger'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TooltipDirective.prototype, "_tooltipTrigger", null);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TooltipDirective.prototype, "tooltipStateChanged", void 0);
TooltipDirective = __decorate([
    Directive({
        selector: '[tooltip], [tooltipHtml]',
        exportAs: 'bs-tooltip'
    }),
    __metadata("design:paramtypes", [ViewContainerRef,
        ComponentLoaderFactory,
        TooltipConfig,
        ElementRef,
        Renderer2,
        PositioningService])
], TooltipDirective);
export { TooltipDirective };
//# sourceMappingURL=tooltip.directive.js.map