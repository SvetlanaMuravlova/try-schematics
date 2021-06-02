import { __decorate, __metadata } from "tslib";
import { Directive, Input } from '@angular/core';
/**
 * Foo doc
 */
let Foo = class Foo {
    constructor() {
        /**
         * Has default value
         */
        this.foo = 5;
    }
    set notAnInputEither(val) {
    }
    regularMethod() {
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], Foo.prototype, "foo", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Foo.prototype, "bar", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Foo.prototype, "baz", void 0);
Foo = __decorate([
    Directive({
        selector: '[foo]'
    })
], Foo);
export { Foo };
//# sourceMappingURL=directives-with-inputs.js.map