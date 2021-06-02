import { __decorate, __metadata, __param } from "tslib";
import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
let AddNavComponent = class AddNavComponent {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor(document) {
        this.document = document;
    }
    goToSection(event) {
        const item = event.target;
        if (item.dataset.anchor) {
            const anchor = item.dataset.anchor;
            const target = this.document.getElementById(anchor);
            const header = this.document.getElementById('header');
            if (target && header) {
                const targetPosY = target.offsetTop - header.offsetHeight - 6;
                window.scrollTo(0, targetPosY);
            }
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], AddNavComponent.prototype, "componentContent", void 0);
AddNavComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'add-nav',
        templateUrl: './add-nav.component.html'
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Document])
], AddNavComponent);
export { AddNavComponent };
//# sourceMappingURL=add-nav.component.js.map