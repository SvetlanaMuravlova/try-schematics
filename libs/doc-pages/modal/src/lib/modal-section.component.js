import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { demoComponentContent } from './modal-section.list';
let ModalSectionComponent = class ModalSectionComponent {
    constructor() {
        this.name = 'Modals';
        this.src = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/modal';
        this.componentContent = demoComponentContent;
    }
};
ModalSectionComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'modal-section',
        templateUrl: './modal-section.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ModalSectionComponent);
export { ModalSectionComponent };
//# sourceMappingURL=modal-section.component.js.map