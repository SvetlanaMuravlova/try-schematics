import { __decorate, __metadata } from "tslib";
import { ContentSection } from '../models/content-section.model';
import { Component, Injector, Input, ReflectiveInjector } from '@angular/core';
let DocsSectionComponent = class DocsSectionComponent {
    constructor(injector) {
        this.injector = injector;
        this._injectors = new Map();
    }
    sectionInjections(_content) {
        if (this._injectors.has(_content)) {
            return this._injectors.get(_content);
        }
        const _injector = ReflectiveInjector.resolveAndCreate([{
                provide: ContentSection,
                useValue: _content
            }], this.injector);
        this._injectors.set(_content, _injector);
        return _injector;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], DocsSectionComponent.prototype, "content", void 0);
DocsSectionComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'docs-section',
        template: `
    <ng-container *ngFor="let section of content">
      <ng-container *ngComponentOutlet="section.outlet; injector: sectionInjections(section)">
      </ng-container>
    </ng-container>
    `
    }),
    __metadata("design:paramtypes", [Injector])
], DocsSectionComponent);
export { DocsSectionComponent };
//# sourceMappingURL=docs-section.component.js.map