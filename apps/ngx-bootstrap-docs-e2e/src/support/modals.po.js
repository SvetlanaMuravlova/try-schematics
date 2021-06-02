import { BaseComponent } from './base.component';
export class ModalsPo extends BaseComponent {
    constructor() {
        super(...arguments);
        this.pageUrl = '/modals';
        this.pageTitle = 'Modals';
        this.ghLinkToComponent = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/modal';
        this.modalContainer = 'modal-container';
        this.modalContainerVisible = 'modal-container.show';
        this.modalContent = '.modal-content';
        this.modalDialog = '.modal-dialog';
        this.modalBody = '.modal-body';
        this.modalHeader = '.modal-header';
        this.modalFooter = '.modal-footer';
        this.modalTitle = '.modal-title';
        this.modalBtn = `.show .modal-body`;
        this.modalRedBtn = `.show .btn-danger`;
        this.modalBackdrop = 'bs-modal-backdrop.show';
        this.modalParagraph = 'modal-container p';
        this.modalPopup = '.popover-content';
        this.modalTooltip = 'bs-tooltip-container';
        this.modalBtnX = '.show .close';
        this.modalDirectBtnX = '.show .modal-header';
        this.openedNestedModals = `${'demo-modal-nested'} ${'.show'}`;
        this.exampleDemosArr = {
            serviceTemplate: 'demo-modal-service-static',
            serviceComponent: 'demo-modal-service-component',
            serviceWithInterceptor: 'demo-modal-service-interceptor',
            serviceNested: 'demo-modal-service-nested',
            serviceScroll: 'demo-modal-scrolling-long-content',
            serviceEvents: 'demo-modal-service-events',
            serviceConfirm: 'demo-modal-service-confirm-window',
            serviceCustomCSS: 'demo-modal-service-custom-css-class',
            serviceAnimation: 'demo-modal-service-disable-animation',
            serviceESC: 'demo-modal-service-disable-esc-closing',
            serviceToolPopup: 'demo-modal-with-popups',
            serviceBackdrop: 'demo-modal-service-disable-backdrop',
            serviceClassChange: 'demo-modal-change-class',
            serviceOptions: 'demo-modal-service-options',
            directiveStatic: 'demo-modal-static',
            directiveSizes: 'demo-modal-sizes',
            directiveChild: 'demo-modal-child',
            directiveNested: 'demo-modal-nested',
            directiveEvents: 'demo-modal-events',
            directiveAutoShow: 'demo-modal-auto-shown'
        };
    }
    isItemTextContains(baseSelector, itemSelector, expectedText, elementIndex = 0) {
        cy.get(baseSelector).find(itemSelector).eq(elementIndex).invoke('text')
            .should('to.contain', expectedText);
    }
    isModalVisible(modalSelector, visible, elementIndex = 0) {
        cy.get(`${'body'} ${modalSelector}`).find('.modal-content').eq(elementIndex)
            .should(visible ? 'to.be.visible' : 'not.to.be.visible');
    }
    isDirectModalVisible(baseSelector, visible, elementIndex = 0) {
        cy.get(baseSelector).find('.modal-content').eq(elementIndex)
            .should(visible ? 'to.be.visible' : 'not.to.be.visible');
    }
    isModalEnabled(modalSelector, enabled) {
        cy.get(`${'body'} ${modalSelector}`).find('.modal-content')
            .should(enabled ? 'to.be.enabled' : 'not.to.be.enabled');
    }
    isBackdropExist(existInDOM) {
        cy.get(this.modalBackdrop)
            .should(existInDOM ? 'to.exist' : 'not.to.exist');
    }
    clickOnBackdrop() {
        cy.get(this.modalBackdrop).click({ force: true });
    }
    clickOnModal(baseSelector) {
        cy.get(`${baseSelector} .modal`).click();
    }
    clickOnModalCorner(position) {
        cy.get(this.modalContainer).click(position);
    }
    startClickOnModalReleaseOnBackdrop(baseSelector) {
        cy.get(`${baseSelector} .modal-content`)
            .trigger('mousedown')
            // .wait(100)
            .get(this.modalContainer)
            .trigger('mouseup');
    }
    checkElementsQuantity(elementsSelector, expectedQuantity) {
        cy.get(elementsSelector).should('have.length', expectedQuantity);
    }
    isModalTitleIs(modalTitle) {
        cy.get(`${this.modalHeader} h4`).should('to.contain', modalTitle);
    }
    isModalTooltipVisible() {
        cy.get(this.modalContainer)
            .should('to.have.descendants', this.modalTooltip)
            .find('bs-tooltip-container')
            .should('to.have.class', 'show');
    }
    isModalWindowWidthEqual(modalSelector, expectedWidth, elementNumber = 0) {
        cy.get(`${modalSelector} ${'.modal-content'}`).eq(elementNumber)
            .should('have.css', 'width', expectedWidth);
    }
    isModalHasChildClass(expectedClass) {
        cy.get(this.modalContainer).should('to.have.descendants', expectedClass);
    }
    isChildElemExist(baseSelector, childName) {
        cy.get(`${baseSelector} ${this.modalDialog}`)
            .should('have.descendants', childName);
    }
    pressEscOnModal(baseSelector) {
        cy.get(`${baseSelector} ${'.modal'}`).type('{esc}');
    }
}
//# sourceMappingURL=modals.po.js.map