import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
let SubComponent = class SubComponent {
    constructor() {
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onInit = new EventEmitter();
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onDestroy = new EventEmitter();
    }
    ngOnInit() {
        Promise.resolve().then(() => this.onInit.emit());
    }
    ngOnDestroy() {
        this.onDestroy.emit();
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], SubComponent.prototype, "name", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], SubComponent.prototype, "onInit", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], SubComponent.prototype, "onDestroy", void 0);
SubComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'sub-component',
        changeDetection: ChangeDetectionStrategy.OnPush,
        templateUrl: './sub-component.html',
        styleUrls: ['./sub-component.css']
    })
], SubComponent);
export { SubComponent };
//# sourceMappingURL=sub-component.js.map