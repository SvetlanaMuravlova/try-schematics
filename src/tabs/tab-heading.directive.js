import { __decorate, __metadata } from "tslib";
import { Directive, TemplateRef } from '@angular/core';
import { TabDirective } from './tab.directive';
/** Should be used to mark <ng-template> element as a template for tab heading */
let TabHeadingDirective = class TabHeadingDirective {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(templateRef, tab) {
        tab.headingRef = templateRef;
    }
};
TabHeadingDirective = __decorate([
    Directive({ selector: '[tabHeading]' }),
    __metadata("design:paramtypes", [TemplateRef, TabDirective])
], TabHeadingDirective);
export { TabHeadingDirective };
//# sourceMappingURL=tab-heading.directive.js.map