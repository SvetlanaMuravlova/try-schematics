import { __decorate, __metadata } from "tslib";
/**
 * @author ng-team
 * @copyright ng-bootstrap
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
// import docs from '../../../../api-docs';
import { NgApiDoc } from '../api-docs.model';
import { Analytics } from '../analytics/analytics';
import { ComponentApi } from '../../models/components-api.model';
const CONFIG_SUFFIX_LENGTH = 'Config'.length;
/**
 * Displays the API docs of a Config service. A Config service for a component Foo is named, by convention,
 * FooConfig, and only has properties, whose name matches with an input of the directive.
 * In order to avoid cluttering the demo pages, the only things displayed by this component
 * is the description of the Config service and the list of its properties, whose documentation and
 * default value is documented in the directive itself.
 */
let NgApiDocConfigComponent = class NgApiDocConfigComponent {
    constructor(analytics, docs, content) {
        var _a;
        this.isShowMethods = false;
        this.analytics = analytics;
        this.docs = docs;
        this.headerAnchor = content.anchor;
        this.apiDocs = this.docs[content.title];
        this.isShowMethods = content.showMethods || this.isShowMethods;
        this.directiveName = (_a = content.title) === null || _a === void 0 ? void 0 : _a.slice(0, -CONFIG_SUFFIX_LENGTH);
    }
    trackSourceClick() {
        this.analytics.trackEvent('Source File View', this.apiDocs.className);
    }
};
NgApiDocConfigComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'ng-api-doc-config',
        changeDetection: ChangeDetectionStrategy.OnPush,
        templateUrl: './api-doc-config.component.html'
    }),
    __metadata("design:paramtypes", [Analytics, NgApiDoc, ComponentApi])
], NgApiDocConfigComponent);
export { NgApiDocConfigComponent };
//# sourceMappingURL=api-doc-config.component.js.map