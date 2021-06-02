import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
let BsDatepickerDayDecoratorComponent = class BsDatepickerDayDecoratorComponent {
    constructor(_config, _elRef, _renderer) {
        this._config = _config;
        this._elRef = _elRef;
        this._renderer = _renderer;
    }
    ngOnInit() {
        if (!this.day) {
            return;
        }
        if (this.day.isToday && this._config && this._config.customTodayClass) {
            this._renderer.addClass(this._elRef.nativeElement, this._config.customTodayClass);
        }
        if (typeof this.day.customClasses === 'string') {
            this.day.customClasses.split(' ')
                .filter((className) => className)
                .forEach((className) => {
                this._renderer.addClass(this._elRef.nativeElement, className);
            });
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], BsDatepickerDayDecoratorComponent.prototype, "day", void 0);
BsDatepickerDayDecoratorComponent = __decorate([
    Component({
        selector: '[bsDatepickerDayDecorator]',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            '[class.disabled]': 'day.isDisabled',
            '[class.is-highlighted]': 'day.isHovered',
            '[class.is-other-month]': 'day.isOtherMonth',
            '[class.is-active-other-month]': 'day.isOtherMonthHovered',
            '[class.in-range]': 'day.isInRange',
            '[class.select-start]': 'day.isSelectionStart',
            '[class.select-end]': 'day.isSelectionEnd',
            '[class.selected]': 'day.isSelected'
        },
        template: `{{ day && day.label || '' }}`
    }),
    __metadata("design:paramtypes", [BsDatepickerConfig,
        ElementRef,
        Renderer2])
], BsDatepickerDayDecoratorComponent);
export { BsDatepickerDayDecoratorComponent };
//# sourceMappingURL=bs-datepicker-day-decorator.directive.js.map