import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, HostListener, Input, Output, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { RatingConfig } from './rating.config';
export const RATING_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RatingComponent),
    multi: true
};
let RatingComponent = class RatingComponent {
    constructor(changeDetection, config) {
        this.changeDetection = changeDetection;
        /** number of icons */
        this.max = 5;
        /** if true will not react on any user events */
        this.readonly = false;
        /** array of icons titles, default: (["one", "two", "three", "four", "five"]) */
        this.titles = [];
        /** fired when icon selected, $event:number equals to selected rating */
        this.onHover = new EventEmitter();
        /** fired when icon selected, $event:number equals to previous rating value */
        this.onLeave = new EventEmitter();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        /** aria label for rating */
        this.ariaLabel = 'rating';
        this.range = [];
        this.value = 0;
        Object.assign(this, config);
    }
    onKeydown(event) {
        if ([37, 38, 39, 40].indexOf(event.which) === -1) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        const sign = event.which === 38 || event.which === 39 ? 1 : -1;
        this.rate(this.value + sign);
    }
    ngOnInit() {
        this.max = this.max || 5;
        this.titles =
            typeof this.titles !== 'undefined' && this.titles.length > 0
                ? this.titles
                : [];
        this.range = this.buildTemplateObjects(this.max);
    }
    // model -> view
    writeValue(value) {
        if (value % 1 !== value) {
            this.value = Math.round(value);
            this.preValue = value;
            this.changeDetection.markForCheck();
            return;
        }
        this.preValue = value;
        this.value = value;
        this.changeDetection.markForCheck();
    }
    enter(value) {
        if (!this.readonly) {
            this.value = value;
            this.changeDetection.markForCheck();
            this.onHover.emit(value);
        }
    }
    reset() {
        if (typeof this.preValue === 'number') {
            this.value = Math.round(this.preValue);
            this.changeDetection.markForCheck();
            this.onLeave.emit(this.value);
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    rate(value) {
        if (!this.readonly && this.range
            && value >= 0 && value <= this.range.length) {
            this.writeValue(value);
            this.onChange(value);
        }
    }
    buildTemplateObjects(max) {
        const result = [];
        for (let i = 0; i < max; i++) {
            result.push({
                index: i,
                title: this.titles[i] || i + 1
            });
        }
        return result;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], RatingComponent.prototype, "max", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], RatingComponent.prototype, "readonly", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], RatingComponent.prototype, "titles", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], RatingComponent.prototype, "customTemplate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], RatingComponent.prototype, "onHover", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], RatingComponent.prototype, "onLeave", void 0);
__decorate([
    HostListener('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], RatingComponent.prototype, "onKeydown", null);
RatingComponent = __decorate([
    Component({
        selector: 'rating',
        templateUrl: './rating.component.html',
        providers: [RATING_CONTROL_VALUE_ACCESSOR],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, RatingConfig])
], RatingComponent);
export { RatingComponent };
//# sourceMappingURL=rating.component.js.map