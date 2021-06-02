import { __decorate, __metadata } from "tslib";
import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { BsDropdownState } from './bs-dropdown.state';
let BsDropdownMenuDirective = class BsDropdownMenuDirective {
    constructor(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
};
BsDropdownMenuDirective = __decorate([
    Directive({
        selector: '[bsDropdownMenu],[dropdownMenu]',
        exportAs: 'bs-dropdown-menu'
    }),
    __metadata("design:paramtypes", [BsDropdownState,
        ViewContainerRef,
        TemplateRef])
], BsDropdownMenuDirective);
export { BsDropdownMenuDirective };
//# sourceMappingURL=bs-dropdown-menu.directive.js.map