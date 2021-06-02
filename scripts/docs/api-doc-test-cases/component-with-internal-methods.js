import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
/**
 * Foo doc
 */
let Foo = class Foo {
    constructor() {
    }
    /**
     * Only used in a template
     *
     * @internal
     */
    forTemplateOnly() {
        console.log('I was clicked!');
    }
    ngOnInit() {
    }
    _dontSerialize() {
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], Foo.prototype, "buttonTxt", void 0);
Foo = __decorate([
    Component({
        selector: '[foo]',
        template: '<button (click)="forTemplateOnly()">{{buttonTxt}}</button>',
        exportAs: 'foo'
    }),
    __metadata("design:paramtypes", [])
], Foo);
export { Foo };
//# sourceMappingURL=component-with-internal-methods.js.map