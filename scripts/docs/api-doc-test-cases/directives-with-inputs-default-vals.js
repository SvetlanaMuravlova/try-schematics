import { __decorate, __metadata } from "tslib";
import { Directive, Input } from '@angular/core';
let Foo = class Foo {
    constructor() {
        this.fooBoolean = false;
        this.fooNumber = 5;
        this.fooString = 'bar';
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Foo.prototype, "fooBoolean", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Foo.prototype, "fooNumber", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Foo.prototype, "fooString", void 0);
Foo = __decorate([
    Directive({
        selector: '[foo]'
    })
], Foo);
export { Foo };
//# sourceMappingURL=directives-with-inputs-default-vals.js.map