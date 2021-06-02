import { __decorate, __metadata } from "tslib";
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
let NgTranscludeDirective = class NgTranscludeDirective {
    constructor(viewRef) {
        this.viewRef = viewRef;
    }
    set ngTransclude(templateRef) {
        this._ngTransclude = templateRef;
        if (templateRef) {
            this.viewRef.createEmbeddedView(templateRef);
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get ngTransclude() {
        return this._ngTransclude;
    }
};
__decorate([
    Input(),
    __metadata("design:type", TemplateRef),
    __metadata("design:paramtypes", [TemplateRef])
], NgTranscludeDirective.prototype, "ngTransclude", null);
NgTranscludeDirective = __decorate([
    Directive({
        selector: '[ngTransclude]'
    }),
    __metadata("design:paramtypes", [ViewContainerRef])
], NgTranscludeDirective);
export { NgTranscludeDirective };
//# sourceMappingURL=ng-transclude.directive.js.map