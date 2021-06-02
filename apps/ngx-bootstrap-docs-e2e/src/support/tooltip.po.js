import { BaseComponent } from './base.component';
export class TooltipPo extends BaseComponent {
    constructor() {
        super(...arguments);
        this.pageUrl = '/tooltip';
        this.pageTitle = 'Tooltip';
        this.ghLinkToComponent = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/tooltip';
        this.containerTooltip = 'bs-tooltip-container';
        this.body = 'body';
        this.exampleDemosArr = {
            basic: 'demo-tooltip-basic',
            placement: 'demo-tooltip-placement',
            dismiss: 'demo-tooltip-dismiss',
            dynamicTooltip: 'demo-tooltip-dynamic',
            customContentTemplate: 'demo-tooltip-custom-content',
            dynamicHtml: 'demo-tooltip-dynamic-html',
            appendToBody: 'demo-tooltip-container',
            configuringDefaults: 'demo-tooltip-config',
            customTriggersTooltip: 'demo-tooltip-triggers-custom',
            manualTriggeringTooltip: 'demo-tooltip-triggers-manual',
            componentLevelStyling: 'demo-tooltip-styling-local',
            customClass: 'demo-tooltip-class',
            delayTooltip: 'demo-tooltip-delay'
        };
    }
    isTooltipPlacementCorrect(baseSelector, placement) {
        cy.get(`${baseSelector} ${this.containerTooltip}`).then(tooltip => {
            expect(tooltip).to.be.visible;
            expect(tooltip.attr('class')).to.contains(placement);
        });
    }
    focusOnBtn(baseSelector, buttonIndex) {
        cy.get(`${baseSelector} button`).eq(buttonIndex ? buttonIndex : 0).focus();
    }
    isTooltipAppears(baseSelector) {
        cy.get(`${baseSelector}`).should('to.have.descendants', this.containerTooltip);
    }
    isTooltipVisible(baseSelector) {
        cy.get(`${baseSelector} ${this.containerTooltip}`).should('be.visible');
    }
    isTooltipDismiss(baseSelector) {
        cy.get(`${baseSelector}`).should('not.to.have.descendants', this.containerTooltip);
    }
    clickToAnotherPlacement(baseSelector) {
        cy.get(`${baseSelector}`).parent().click('topRight');
    }
    focusToAnotherPlacement(demoName) {
        cy.get('examples h3').contains(demoName).find('a.anchor-link').focus();
    }
}
//# sourceMappingURL=tooltip.po.js.map