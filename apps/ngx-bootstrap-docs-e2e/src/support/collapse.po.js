import { BaseComponent } from './base.component';
export class CollapsePo extends BaseComponent {
    constructor() {
        super(...arguments);
        this.pageUrl = '/collapse';
        this.pageTitle = 'Collapse';
        this.ghLinkToComponent = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/collapse';
        this.collapseClass = '.collapse';
        this.showIndicator = 'in show';
        this.infoClass = '.col-md-9';
        this.exampleDemosArr = {
            basic: 'collapse-demo',
            events: 'collapse-demo-events',
            manualToggle: 'toggle-manual-demo',
            inlineDisplay: 'inline-display-demo',
            accessibility: 'demo-accessibility'
        };
    }
    isCollapseExpanded(baseSelector, expandedAttrValue) {
        cy.get(`${baseSelector} ${this.collapseClass}`)
            .should(expandedAttrValue === 'true' ? 'to.have.class' : 'not.to.have.class', this.showIndicator)
            .and('to.have.attr', 'aria-expanded', expandedAttrValue);
    }
    isCollapseWithInline(baseSelector, inline) {
        cy.get(`${baseSelector} ${this.collapseClass}`)
            .should('to.have.attr', 'style', inline ? 'display: inline-block;' : 'display: none;');
    }
    isCollapseInfoEqual(baseSelector, expectedText) {
        cy.get(`${baseSelector} ${this.infoClass}`).invoke('text')
            .should(infoTxt => expect(infoTxt).to.equal(expectedText));
    }
}
//# sourceMappingURL=collapse.po.js.map