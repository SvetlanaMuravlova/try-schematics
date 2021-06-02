import { __decorate, __metadata } from "tslib";
import { Directive, Output, EventEmitter } from '@angular/core';
let Foo = class Foo {
    constructor() {
        /**
         * Desc
         */
        this.myEvent = new EventEmitter();
        this._myMappedEvent = new EventEmitter();
    }
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], Foo.prototype, "myEvent", void 0);
__decorate([
    Output('myMappedEvent'),
    __metadata("design:type", Object)
], Foo.prototype, "_myMappedEvent", void 0);
Foo = __decorate([
    Directive({
        selector: '[foo]'
    })
], Foo);
export { Foo };
//# sourceMappingURL=directives-with-outputs.js.map