import { __decorate, __metadata } from "tslib";
import { Directive, forwardRef, HostBinding, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// TODO: config: activeClass - Class to apply to the checked buttons
export const CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ButtonCheckboxDirective),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
let ButtonCheckboxDirective = class ButtonCheckboxDirective {
    constructor() {
        /** Truthy value, will be set to ngModel */
        this.btnCheckboxTrue = true;
        /** Falsy value, will be set to ngModel */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.isDisabled = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    // view -> model
    onClick() {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    }
    ngOnInit() {
        this.toggle(this.trueValue === this.value);
    }
    get trueValue() {
        return typeof this.btnCheckboxTrue !== 'undefined'
            ? this.btnCheckboxTrue
            : true;
    }
    get falseValue() {
        return typeof this.btnCheckboxFalse !== 'undefined'
            ? this.btnCheckboxFalse
            : false;
    }
    toggle(state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    }
    // ControlValueAccessor
    // model -> view
    writeValue(value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonCheckboxDirective.prototype, "btnCheckboxTrue", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonCheckboxDirective.prototype, "btnCheckboxFalse", void 0);
__decorate([
    HostBinding('class.active'),
    HostBinding('attr.aria-pressed'),
    __metadata("design:type", Object)
], ButtonCheckboxDirective.prototype, "state", void 0);
__decorate([
    HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ButtonCheckboxDirective.prototype, "onClick", null);
ButtonCheckboxDirective = __decorate([
    Directive({
        selector: '[btnCheckbox]',
        providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
    })
], ButtonCheckboxDirective);
export { ButtonCheckboxDirective };
//# sourceMappingURL=button-checkbox.directive.js.map