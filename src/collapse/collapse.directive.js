import { __decorate, __metadata } from "tslib";
import { AnimationBuilder } from '@angular/animations';
import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2 } from '@angular/core';
import { collapseAnimation, expandAnimation } from './collapse-animations';
let CollapseDirective = class CollapseDirective {
    constructor(_el, _renderer, _builder) {
        this._el = _el;
        this._renderer = _renderer;
        /** This event fires as soon as content collapses */
        this.collapsed = new EventEmitter();
        /** This event fires when collapsing is started */
        this.collapses = new EventEmitter();
        /** This event fires as soon as content becomes visible */
        this.expanded = new EventEmitter();
        /** This event fires when expansion is started */
        this.expands = new EventEmitter();
        // shown
        this.isExpanded = true;
        this.collapseNewValue = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
        /** turn on/off animation */
        this.isAnimated = false;
        this._display = 'block';
        this._stylesLoaded = false;
        this._COLLAPSE_ACTION_NAME = 'collapse';
        this._EXPAND_ACTION_NAME = 'expand';
        this._factoryCollapseAnimation = _builder.build(collapseAnimation);
        this._factoryExpandAnimation = _builder.build(expandAnimation);
    }
    set display(value) {
        if (!this.isAnimated) {
            this._renderer.setStyle(this._el.nativeElement, 'display', value);
            return;
        }
        this._display = value;
        if (value === 'none') {
            this.hide();
            return;
        }
        this.show();
    }
    /** A flag indicating visibility of content (shown or hidden) */
    set collapse(value) {
        this.collapseNewValue = value;
        if (!this._player || this._isAnimationDone) {
            this.isExpanded = value;
            this.toggle();
        }
    }
    get collapse() {
        return this.isExpanded;
    }
    ngAfterViewChecked() {
        this._stylesLoaded = true;
        if (!this._player || !this._isAnimationDone) {
            return;
        }
        this._player.reset();
        this._renderer.setStyle(this._el.nativeElement, 'height', '*');
    }
    /** allows to manually toggle content visibility */
    toggle() {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    /** allows to manually hide content */
    hide() {
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapsing = false;
        this.collapses.emit(this);
        this._isAnimationDone = false;
        this.animationRun(this.isAnimated, this._COLLAPSE_ACTION_NAME)(() => {
            this._isAnimationDone = true;
            if (this.collapseNewValue !== this.isCollapsed && this.isAnimated) {
                this.show();
                return;
            }
            this.collapsed.emit(this);
            this._renderer.setStyle(this._el.nativeElement, 'display', 'none');
        });
    }
    /** allows to manually show collapsed content */
    show() {
        this._renderer.setStyle(this._el.nativeElement, 'display', this._display);
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.isCollapsing = false;
        this.expands.emit(this);
        this._isAnimationDone = false;
        this.animationRun(this.isAnimated, this._EXPAND_ACTION_NAME)(() => {
            this._isAnimationDone = true;
            if (this.collapseNewValue !== this.isCollapsed && this.isAnimated) {
                this.hide();
                return;
            }
            this.expanded.emit(this);
            this._renderer.removeStyle(this._el.nativeElement, 'overflow');
        });
    }
    animationRun(isAnimated, action) {
        if (!isAnimated || !this._stylesLoaded) {
            return (callback) => callback();
        }
        this._renderer.setStyle(this._el.nativeElement, 'overflow', 'hidden');
        this._renderer.addClass(this._el.nativeElement, 'collapse');
        const factoryAnimation = (action === this._EXPAND_ACTION_NAME)
            ? this._factoryExpandAnimation
            : this._factoryCollapseAnimation;
        if (this._player) {
            this._player.destroy();
        }
        this._player = factoryAnimation.create(this._el.nativeElement);
        this._player.play();
        return (callback) => { var _a; return (_a = this._player) === null || _a === void 0 ? void 0 : _a.onDone(callback); };
    }
};
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CollapseDirective.prototype, "collapsed", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CollapseDirective.prototype, "collapses", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CollapseDirective.prototype, "expanded", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CollapseDirective.prototype, "expands", void 0);
__decorate([
    HostBinding('class.in'),
    HostBinding('class.show'),
    HostBinding('attr.aria-expanded'),
    __metadata("design:type", Object)
], CollapseDirective.prototype, "isExpanded", void 0);
__decorate([
    HostBinding('attr.aria-hidden'),
    __metadata("design:type", Object)
], CollapseDirective.prototype, "isCollapsed", void 0);
__decorate([
    HostBinding('class.collapse'),
    __metadata("design:type", Object)
], CollapseDirective.prototype, "isCollapse", void 0);
__decorate([
    HostBinding('class.collapsing'),
    __metadata("design:type", Object)
], CollapseDirective.prototype, "isCollapsing", void 0);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], CollapseDirective.prototype, "display", null);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CollapseDirective.prototype, "isAnimated", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], CollapseDirective.prototype, "collapse", null);
CollapseDirective = __decorate([
    Directive({
        selector: '[collapse]',
        exportAs: 'bs-collapse',
        // eslint-disable-next-line @angular-eslint/no-host-metadata-property
        host: {
            '[class.collapse]': 'true'
        }
    }),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        AnimationBuilder])
], CollapseDirective);
export { CollapseDirective };
//# sourceMappingURL=collapse.directive.js.map