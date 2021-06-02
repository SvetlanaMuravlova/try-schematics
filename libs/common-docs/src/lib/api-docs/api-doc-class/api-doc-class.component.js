import { __decorate, __metadata } from "tslib";
/**
 * @author ng-team
 * @copyright ng-bootstrap
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { signature, NgApiDoc } from '../api-docs.model';
import { Analytics } from '../analytics/analytics';
import { ComponentApi } from '../../models/components-api.model';
/**
 * Displays the API docs of a class, which is not a directive.
 *
 * For Config services, use NgbdApiDocsConfig instead.
 */
let NgApiDocClassComponent = class NgApiDocClassComponent {
    constructor(analytics, docs, content) {
        this.docs = docs;
        this.analytics = analytics;
        this.headerAnchor = content.anchor;
        this.apiDocs = this.docs[content.title];
    }
    methodSignature(method) {
        return signature(method);
    }
    trackSourceClick() {
        this.analytics.trackEvent('Source File View', this.apiDocs.className);
    }
};
NgApiDocClassComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'ng-api-doc-class',
        changeDetection: ChangeDetectionStrategy.OnPush,
        templateUrl: './api-doc-class.component.html'
    }),
    __metadata("design:paramtypes", [Analytics, NgApiDoc, ComponentApi])
], NgApiDocClassComponent);
export { NgApiDocClassComponent };
//# sourceMappingURL=api-doc-class.component.js.map