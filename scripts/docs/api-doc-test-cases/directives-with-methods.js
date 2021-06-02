import { __decorate, __metadata } from "tslib";
import { Directive, Input } from '@angular/core';
/**
 * Foo doc
 */
let Foo = class Foo {
    constructor() {
    }
    /**
     * Use this one to produce foo!
     */
    fooMethod(arg1, arg2, arg3 = 1) {
    }
    ngOnInit() {
    }
    _dontSerialize() {
    }
    noCommentDontExtract() {
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], Foo.prototype, "notMethod", void 0);
Foo = __decorate([
    Directive({
        selector: '[foo]',
        exportAs: 'foo'
    }),
    __metadata("design:paramtypes", [])
], Foo);
export { Foo };
//# sourceMappingURL=directives-with-methods.js.map