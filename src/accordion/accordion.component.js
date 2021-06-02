import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { AccordionConfig } from './accordion.config';
/** Displays collapsible content panels for presenting information in a limited amount of space. */
let AccordionComponent = class AccordionComponent {
    constructor(config) {
        /** turn on/off animation */
        this.isAnimated = false;
        /** if `true` expanding one item will close all others */
        this.closeOthers = false;
        this.groups = [];
        Object.assign(this, config);
    }
    closeOtherPanels(openGroup) {
        if (!this.closeOthers) {
            return;
        }
        this.groups.forEach((group) => {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    }
    addGroup(group) {
        group.isAnimated = this.isAnimated;
        this.groups.push(group);
    }
    removeGroup(group) {
        const index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], AccordionComponent.prototype, "isAnimated", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AccordionComponent.prototype, "closeOthers", void 0);
AccordionComponent = __decorate([
    Component({
        selector: 'accordion',
        template: `<ng-content></ng-content>`,
        // eslint-disable-next-line @angular-eslint/no-host-metadata-property
        host: {
            '[attr.aria-multiselectable]': 'closeOthers',
            role: 'tablist',
            class: 'panel-group',
            style: 'display: block'
        }
    }),
    __metadata("design:paramtypes", [AccordionConfig])
], AccordionComponent);
export { AccordionComponent };
//# sourceMappingURL=accordion.component.js.map