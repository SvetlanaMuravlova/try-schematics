var TabsModule_1;
import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgTranscludeDirective } from './ng-transclude.directive';
import { TabHeadingDirective } from './tab-heading.directive';
import { TabDirective } from './tab.directive';
import { TabsetComponent } from './tabset.component';
let TabsModule = TabsModule_1 = class TabsModule {
    static forRoot() {
        return {
            ngModule: TabsModule_1,
            providers: []
        };
    }
};
TabsModule = TabsModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [
            NgTranscludeDirective,
            TabDirective,
            TabsetComponent,
            TabHeadingDirective
        ],
        exports: [
            TabDirective,
            TabsetComponent,
            TabHeadingDirective,
            NgTranscludeDirective
        ]
    })
], TabsModule);
export { TabsModule };
//# sourceMappingURL=tabs.module.js.map