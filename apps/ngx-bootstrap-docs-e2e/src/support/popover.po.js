import { BaseComponent } from './base.component';
export class PopoverPo extends BaseComponent {
    constructor() {
        super(...arguments);
        this.pageUrl = '/popover';
        this.pageTitle = 'Popover';
        this.ghLinkToComponent = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/popover';
        this.containerPopover = 'popover-container';
        this.body = 'body';
        this.dynamicHtmlBtn = 'span.btn.btn-danger';
        this.exampleDemosArr = {
            basic: 'demo-popover-basic',
            placement: 'demo-popover-placement',
            dismiss: 'demo-popover-dismiss',
            dynamic: 'demo-popover-dynamic',
            customContent: 'demo-popover-custom-content',
            dynamicHtml: 'demo-popover-dynamic-html',
            appendToBody: 'demo-popover-container',
            visibilityEvents: 'demo-popover-events',
            configuringDefaults: 'demo-popover-config',
            outsideClick: 'demo-popover-outside-click',
            customTriggers: 'demo-popover-triggers-custom',
            manualTriggering: 'demo-popover-triggers-manual',
            triggerIsOpen: 'demo-popover-trigger-by-isopen',
            componentLevelStyling: 'demo-popover-styling-local',
            customClass: 'demo-popover-class',
            popoverContext: 'demo-popover-context',
            delayPopover: 'demo-popover-delay'
        };
    }
    isPopoverPlacementCorrect(baseSelector, placement) {
        cy.get(`${baseSelector} ${this.containerPopover}`).then(popover => {
            expect(popover).to.be.visible;
            expect(popover.attr('class')).to.contains(placement);
        });
    }
    isPopoverAppears(baseSelector) {
        cy.get(`${baseSelector}`).should('to.have.descendants', this.containerPopover);
    }
    isPopoverVisible(baseSelector) {
        cy.get(`${baseSelector} ${this.containerPopover}`).should('be.visible');
    }
    clickToAnotherPlacement(baseSelector) {
        cy.get(`${baseSelector}`).closest('.section.bd-example').click('topRight');
    }
    isPopoverDismiss(baseSelector) {
        cy.get(`${baseSelector}`).should('not.to.have.descendants', this.containerPopover);
    }
    isPopoverHaveCssItem(baseSelector, item, cssProperty, expectedCssValue) {
        cy.get(`${baseSelector} ${this.containerPopover} ${item}`).should('have.css', cssProperty, expectedCssValue);
    }
    isPopoverHaveCss(baseSelector, cssProperty, expectedCssValue) {
        cy.get(`${baseSelector} ${this.containerPopover}`).should('have.css', cssProperty, expectedCssValue);
    }
}
//# sourceMappingURL=popover.po.js.map