import { __decorate, __metadata } from "tslib";
import { Component, HostBinding, Input } from '@angular/core';
import { ProgressbarConfig } from './progressbar.config';
import { isBs3 } from 'ngx-bootstrap/utils';
let ProgressbarComponent = class ProgressbarComponent {
    constructor(config) {
        this.isStacked = false;
        this._animate = false;
        this._max = 100;
        this.addClass = true;
        this.bars = [];
        Object.assign(this, config);
    }
    /** if `true` changing value of progress bar will be animated */
    set animate(value) {
        this._animate = value;
        this.bars.forEach((b) => {
            b.animate = value;
        });
    }
    /** If `true`, striped classes are applied */
    set striped(value) {
        this._striped = value;
        this.bars.forEach((b) => {
            b.striped = value;
        });
    }
    /** current value of progress bar. Could be a number or array of objects
     * like {"value":15,"type":"info","label":"15 %"}
     */
    set value(value) {
        this.isStacked = Array.isArray(value);
        if (typeof value === 'number') {
            this._value = value;
            this._values = void 0;
        }
        else {
            this._value = void 0;
            this._values = value;
        }
    }
    get isBs3() {
        return isBs3();
    }
    /** maximum total value of progress element */
    get max() {
        return this._max;
    }
    set max(v) {
        this._max = v;
        this.bars.forEach((bar) => {
            bar.recalculatePercentage();
        });
    }
    addBar(bar) {
        bar.animate = this._animate;
        bar.striped = this._striped;
        this.bars.push(bar);
    }
    removeBar(bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], ProgressbarComponent.prototype, "animate", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], ProgressbarComponent.prototype, "striped", null);
__decorate([
    Input(),
    __metadata("design:type", String)
], ProgressbarComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ProgressbarComponent.prototype, "value", null);
__decorate([
    HostBinding('attr.max'),
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], ProgressbarComponent.prototype, "max", null);
__decorate([
    HostBinding('class.progress'),
    __metadata("design:type", Object)
], ProgressbarComponent.prototype, "addClass", void 0);
ProgressbarComponent = __decorate([
    Component({
        selector: 'progressbar',
        templateUrl: './progressbar.component.html',
        styles: [
            `
    :host {
      width: 100%;
      display: flex;
    }
  `
        ]
    }),
    __metadata("design:paramtypes", [ProgressbarConfig])
], ProgressbarComponent);
export { ProgressbarComponent };
//# sourceMappingURL=progressbar.component.js.map