import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Injector, ReflectiveInjector } from '@angular/core';
import { ContentSection } from '../../models/content-section.model';
import { ComponentApi } from '../../models/components-api.model';
let ApiSectionsComponent = class ApiSectionsComponent {
    constructor(section, injector) {
        this.section = section;
        this.injector = injector;
        this._injectors = new Map();
        this.apiSectionsContent = section.content;
    }
    sectionInjections(_content) {
        if (this._injectors.has(_content)) {
            return this._injectors.get(_content);
        }
        const _injector = ReflectiveInjector.resolveAndCreate([{
                provide: ComponentApi,
                useValue: _content
            }], this.injector);
        this._injectors.set(_content, _injector);
        return _injector;
    }
};
ApiSectionsComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'api-sections',
        templateUrl: './api-sections.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [ContentSection, Injector])
], ApiSectionsComponent);
export { ApiSectionsComponent };
//# sourceMappingURL=api-sections.component.js.map