import { __decorate, __metadata } from "tslib";
import { Directive, EventEmitter, HostBinding, Input, Output, ElementRef, Renderer2 } from '@angular/core';
import { TabsetComponent } from './tabset.component';
let TabDirective = class TabDirective {
    constructor(tabset, elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        /** if true tab can not be activated */
        this.disabled = false;
        /** if true tab can be removable, additional button will appear */
        this.removable = false;
        /** fired when tab became active, $event:Tab equals to selected instance of Tab component */
        this.selectTab = new EventEmitter();
        /** fired when tab became inactive, $event:Tab equals to deselected instance of Tab component */
        this.deselect = new EventEmitter();
        /** fired before tab will be removed, $event:Tab equals to instance of removed tab */
        this.removed = new EventEmitter();
        this.addClass = true;
        this.role = 'tabpanel';
        this._active = false;
        this._customClass = '';
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    /** if set, will be added to the tab's class attribute. Multiple classes are supported. */
    get customClass() {
        return this._customClass;
    }
    set customClass(customClass) {
        if (this.customClass) {
            this.customClass.split(' ').forEach((cssClass) => {
                this.renderer.removeClass(this.elementRef.nativeElement, cssClass);
            });
        }
        this._customClass = customClass ? customClass.trim() : '';
        if (this.customClass) {
            this.customClass.split(' ').forEach((cssClass) => {
                this.renderer.addClass(this.elementRef.nativeElement, cssClass);
            });
        }
    }
    /** tab active state toggle */
    get active() {
        return this._active;
    }
    set active(active) {
        if (this._active === active) {
            return;
        }
        if ((this.disabled && active) || !active) {
            if (this._active && !active) {
                this.deselect.emit(this);
                this._active = active;
            }
            return;
        }
        this._active = active;
        this.selectTab.emit(this);
        this.tabset.tabs.forEach((tab) => {
            if (tab !== this) {
                tab.active = false;
            }
        });
    }
    get ariaLabelledby() {
        return this.id ? `${this.id}-link` : '';
    }
    ngOnInit() {
        this.removable = !!this.removable;
    }
    ngOnDestroy() {
        this.tabset.removeTab(this, { reselect: false, emit: false });
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], TabDirective.prototype, "heading", void 0);
__decorate([
    HostBinding('attr.id'),
    Input(),
    __metadata("design:type", String)
], TabDirective.prototype, "id", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TabDirective.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TabDirective.prototype, "removable", void 0);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TabDirective.prototype, "customClass", null);
__decorate([
    HostBinding('class.active'),
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TabDirective.prototype, "active", null);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TabDirective.prototype, "selectTab", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TabDirective.prototype, "deselect", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TabDirective.prototype, "removed", void 0);
__decorate([
    HostBinding('class.tab-pane'),
    __metadata("design:type", Object)
], TabDirective.prototype, "addClass", void 0);
__decorate([
    HostBinding('attr.role'),
    __metadata("design:type", Object)
], TabDirective.prototype, "role", void 0);
__decorate([
    HostBinding('attr.aria-labelledby'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], TabDirective.prototype, "ariaLabelledby", null);
TabDirective = __decorate([
    Directive({ selector: 'tab, [tab]', exportAs: 'tab' }),
    __metadata("design:paramtypes", [TabsetComponent,
        ElementRef,
        Renderer2])
], TabDirective);
export { TabDirective };
//# sourceMappingURL=tab.directive.js.map