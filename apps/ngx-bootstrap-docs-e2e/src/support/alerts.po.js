import { BaseComponent } from './base.component';
export class AlertsPo extends BaseComponent {
    constructor() {
        super(...arguments);
        this.pageUrl = '/alerts';
        this.pageTitle = 'Alerts';
        this.ghLinkToComponent = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/alert';
        this.linkClass = '.alert-link';
        this.heading = '.alert-heading';
        this.exampleDemosArr = {
            basic: 'demo-alert-basic',
            link: 'demo-alert-link',
            content: 'demo-alert-content',
            dismissing: 'demo-alert-dismiss',
            dynamicHtml: 'demo-alert-dynamic-html',
            dynamicContent: 'demo-alert-content-html',
            dismissTimeout: 'demo-alert-timeout',
            globalStyling: 'demo-alert-styling-global',
            componentStyling: 'demo-alert-styling-local',
            config: 'demo-alert-config'
        };
    }
    isAlertVisible(baseSelector, alertType, exist = true) {
        cy.get(`${baseSelector} ${this.getAlertClass(alertType)}`)
            .should(exist ? 'be.visible' : 'not.exist');
    }
    isAlertHaveLink(baseSelector, alertType) {
        cy.get(`${baseSelector} ${this.getAlertClass(alertType)}`)
            .find(this.linkClass)
            .should('have.attr', 'href', '#');
    }
    isAlertContentContains(baseSelector, alertType, expectedContentClass) {
        cy.get(`${baseSelector} ${this.getAlertClass(alertType)}`)
            .should('to.have.descendants', expectedContentClass);
    }
    isAlertLengthEqual(baseSelector, expectedLength) {
        cy.get(`${baseSelector} alert`)
            .should('to.have.length', expectedLength);
    }
    isAlertHaveCss(baseSelector, nameCSS, valueCSS) {
        cy.get(`${baseSelector} alert div`)
            .should('to.have.css', nameCSS, valueCSS);
    }
    isAlertTextContains(baseSelector, alertType, expectedText) {
        cy.get(`${baseSelector} ${this.getAlertClass(alertType)}`)
            .invoke('text')
            .should('to.contains', expectedText);
    }
    getAlertClass(alertType) {
        switch (alertType) {
            case 'success':
                return '.alert-success';
            case 'info':
                return '.alert-info';
            case 'warning':
                return '.alert-warning';
            case 'danger':
                return '.alert-danger';
            case 'colored':
                return '.alert-md-color';
            case 'local':
                return '.alert-md-local';
            default:
                throw new Error('Incorrect alert type, available: success, info, warning, danger, coloured, local');
        }
    }
}
//# sourceMappingURL=alerts.po.js.map