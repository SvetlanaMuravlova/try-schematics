import { __decorate, __metadata, __param } from "tslib";
import { Component, Host, HostBinding, Input, ElementRef, Renderer2 } from '@angular/core';
import { ProgressbarComponent } from './progressbar.component';
import { isBs3 } from 'ngx-bootstrap/utils';
// todo: number pipe
// todo: use query from progress?
let BarComponent = class BarComponent {
    constructor(el, progress, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.max = 100;
        this.addClass = true;
        this.animate = false;
        this.percent = 0;
        this.progress = progress;
    }
    get setBarWidth() {
        this.recalculatePercentage();
        return this.percent;
    }
    get isBs3() {
        return isBs3();
    }
    ngOnInit() {
        this.progress.addBar(this);
    }
    ngOnDestroy() {
        this.progress.removeBar(this);
    }
    ngOnChanges(changes) {
        if (changes.value) {
            if (!changes.value.currentValue && changes.value.currentValue !== 0) {
                return;
            }
            this.value = changes.value.currentValue;
            this.recalculatePercentage();
        }
        if (changes.type) {
            this.type = changes.type.currentValue;
            this.applyTypeClasses();
        }
    }
    recalculatePercentage() {
        this.percent = +((this.value || 0) / this.progress.max * 100).toFixed(2);
        const totalPercentage = this.progress.bars
            .reduce(function (total, bar) {
            return total + bar.percent;
        }, 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    }
    applyTypeClasses() {
        if (this._prevType) {
            const barTypeClass = `progress-bar-${this._prevType}`;
            const bgClass = `bg-${this._prevType}`;
            this.renderer.removeClass(this.el.nativeElement, barTypeClass);
            this.renderer.removeClass(this.el.nativeElement, bgClass);
            this._prevType = void 0;
        }
        if (this.type) {
            const barTypeClass = `progress-bar-${this.type}`;
            const bgClass = `bg-${this.type}`;
            this.renderer.addClass(this.el.nativeElement, barTypeClass);
            this.renderer.addClass(this.el.nativeElement, bgClass);
            this._prevType = this.type;
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], BarComponent.prototype, "max", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], BarComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], BarComponent.prototype, "value", void 0);
__decorate([
    HostBinding('style.width.%'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], BarComponent.prototype, "setBarWidth", null);
__decorate([
    HostBinding('class.progress-bar'),
    __metadata("design:type", Object)
], BarComponent.prototype, "addClass", void 0);
BarComponent = __decorate([
    Component({
        selector: 'bar',
        templateUrl: './bar.component.html',
        // eslint-disable-next-line @angular-eslint/no-host-metadata-property
        host: {
            role: 'progressbar',
            'aria-valuemin': '0',
            '[class.progress-bar-animated]': '!isBs3 && animate',
            '[class.progress-bar-striped]': 'striped',
            '[class.active]': 'isBs3 && animate',
            '[attr.aria-valuenow]': 'value',
            '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
            '[attr.aria-valuemax]': 'max',
            '[style.height.%]': '"100"'
        }
    }),
    __param(1, Host()),
    __metadata("design:paramtypes", [ElementRef,
        ProgressbarComponent,
        Renderer2])
], BarComponent);
export { BarComponent };
//# sourceMappingURL=bar.component.js.map