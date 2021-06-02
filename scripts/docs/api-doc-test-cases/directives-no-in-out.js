import { __decorate } from "tslib";
import { Component, Directive } from '@angular/core';
/**
 * Foo doc
 */
let Foo = class Foo {
};
Foo = __decorate([
    Directive({
        selector: '[foo]',
        exportAs: 'foo'
    })
], Foo);
export { Foo };
/**
 * Bar doc
 */
let Bar = class Bar {
};
Bar = __decorate([
    Component({
        selector: 'bar',
        template: `
        <span>bar</span>
    `
    })
], Bar);
export { Bar };
//# sourceMappingURL=directives-no-in-out.js.map