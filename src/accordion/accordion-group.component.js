import { __awaiter, __decorate, __metadata, __param } from "tslib";
import { Component, HostBinding, Inject, Input, Output, EventEmitter } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { AccordionComponent } from './accordion.component';
/**
 * ### Accordion heading
 * Instead of using `heading` attribute on the `accordion-group`, you can use
 * an `accordion-heading` attribute on `any` element inside of a group that
 * will be used as group's header template.
 */
let AccordionPanelComponent = class AccordionPanelComponent {
    constructor(accordion) {
        /** turn on/off animation */
        this.isAnimated = false;
        /** Provides an ability to use Bootstrap's contextual panel classes
         * (`panel-primary`, `panel-success`, `panel-info`, etc...).
         * List of all available classes [available here]
         * (https://getbootstrap.com/docs/3.3/components/#panels-alternatives)
         */
        this.panelClass = 'panel-default';
        /** if <code>true</code> — disables accordion group */
        this.isDisabled = false;
        /** Emits when the opened state changes */
        this.isOpenChange = new EventEmitter();
        this._isOpen = false;
        this.accordion = accordion;
    }
    // Questionable, maybe .panel-open should be on child div.panel element?
    /** Is accordion group open or closed. This property supports two-way binding */
    get isOpen() {
        return this._isOpen;
    }
    set isOpen(value) {
        if (value !== this.isOpen) {
            if (value) {
                this.accordion.closeOtherPanels(this);
            }
            this._isOpen = value;
            (() => __awaiter(this, void 0, void 0, function* () {
                yield Promise.resolve();
                this.isOpenChange.emit(value);
            }));
        }
    }
    get isBs3() {
        return isBs3();
    }
    ngOnInit() {
        this.accordion.addGroup(this);
    }
    ngOnDestroy() {
        this.accordion.removeGroup(this);
    }
    toggleOpen() {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], AccordionPanelComponent.prototype, "heading", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AccordionPanelComponent.prototype, "panelClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AccordionPanelComponent.prototype, "isDisabled", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], AccordionPanelComponent.prototype, "isOpenChange", void 0);
__decorate([
    HostBinding('class.panel-open'),
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], AccordionPanelComponent.prototype, "isOpen", null);
AccordionPanelComponent = __decorate([
    Component({
        selector: 'accordion-group, accordion-panel',
        templateUrl: './accordion-group.component.html',
        // eslint-disable-next-line @angular-eslint/no-host-metadata-property
        host: {
            class: 'panel',
            style: 'display: block'
        },
        styleUrls: ['./accordion.scss']
    }),
    __param(0, Inject(AccordionComponent)),
    __metadata("design:paramtypes", [AccordionComponent])
], AccordionPanelComponent);
export { AccordionPanelComponent };
//# sourceMappingURL=accordion-group.component.js.map