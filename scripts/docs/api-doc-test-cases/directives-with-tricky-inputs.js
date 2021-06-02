import { __decorate, __metadata } from "tslib";
import { Directive, Input } from '@angular/core';
let Foo = class Foo {
    set bar(newVal) {
    }
    set _baz(newVal) {
    }
};
__decorate([
    Input('foo'),
    __metadata("design:type", Object)
], Foo.prototype, "_foo", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Foo.prototype, "bar", null);
__decorate([
    Input('baz'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Foo.prototype, "_baz", null);
Foo = __decorate([
    Directive({
        selector: '[foo]'
    })
], Foo);
export { Foo };
//# sourceMappingURL=directives-with-tricky-inputs.js.map