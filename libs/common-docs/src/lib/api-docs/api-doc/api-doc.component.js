import { __decorate, __metadata } from "tslib";
/**
 * @author ng-team
 * @copyright ng-bootstrap
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentApi } from '../../models/components-api.model';
import { Analytics } from '../analytics/analytics';
import { NgApiDoc, signature } from '../api-docs.model';
/**
 * Displays the API docs of a directive.
 *
 * The default values of its inputs are looked for in the directive api doc itself, or in the matching property
 * of associated Config service, if any.
 *
 * The config service of a directive NgbFoo is, by convention, named NgbFooConfig.
 */
let NgApiDocComponent = class NgApiDocComponent {
    constructor(analytics, docs, content) {
        this.analytics = analytics;
        // todo: inject docs
        this.docs = docs;
        this.headerAnchor = content.anchor;
        this.apiDocs = this.docs[content.title];
        this.configServiceName = `${content.title}Config`;
        const configApiDocs = this.docs[this.configServiceName];
        this.configProperties = {};
        if (configApiDocs) {
            this.apiDocs.inputs.forEach((input) => (this.configProperties[input.name] = this.findInputConfigProperty(configApiDocs, input)));
        }
    }
    /**
     * Returns the default value of the given directive input by first looking for it in the matching config service
     * property. If there is no matching config property, it reads it from the input.
     */
    defaultInputValue(input) {
        const configProperty = this.configProperties[input.name];
        return configProperty ? configProperty.defaultValue : input.defaultValue;
    }
    /**
     * Returns true if there is a config service property matching with the given directive input
     */
    hasConfigProperty(input) {
        return !!this.configProperties[input.name];
    }
    methodSignature(method) {
        return signature(method);
    }
    trackSourceClick() {
        this.analytics.trackEvent('Source File View', this.apiDocs.className);
    }
    findInputConfigProperty(configApiDocs, input) {
        return configApiDocs.properties.filter((prop) => prop.name === input.name)[0];
    }
};
NgApiDocComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'ng-api-doc',
        changeDetection: ChangeDetectionStrategy.OnPush,
        templateUrl: './api-doc.component.html'
    }),
    __metadata("design:paramtypes", [Analytics, NgApiDoc, ComponentApi])
], NgApiDocComponent);
export { NgApiDocComponent };
//# sourceMappingURL=api-doc.component.js.map