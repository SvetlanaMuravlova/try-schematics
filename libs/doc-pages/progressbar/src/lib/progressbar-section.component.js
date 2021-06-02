import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Injector, ReflectiveInjector } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { demoComponentContent } from './progressbar-section.list';
import { ContentSection } from '@ngx-bootstrap-doc/docs';
let ProgressbarSectionComponent = class ProgressbarSectionComponent {
    constructor(injector) {
        this.injector = injector;
        this.name = 'Progressbar';
        this.src = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/progressbar';
        this.componentContent = demoComponentContent;
        this._injectors = new Map();
    }
    sectionInjections(content) {
        if (this._injectors.has(content)) {
            return this._injectors.get(content);
        }
        const _injector = ReflectiveInjector.resolveAndCreate([
            {
                provide: ContentSection,
                useValue: content
            }
        ], this.injector);
        this._injectors.set(content, _injector);
        return _injector;
    }
    get isBs3() {
        if (typeof window['PR'] !== 'undefined') {
            setTimeout(() => window['PR'].prettyPrint(), 10);
        }
        return isBs3();
    }
};
ProgressbarSectionComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'progressbar-section',
        templateUrl: './progressbar-section.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [Injector])
], ProgressbarSectionComponent);
export { ProgressbarSectionComponent };
//# sourceMappingURL=progressbar-section.component.js.map