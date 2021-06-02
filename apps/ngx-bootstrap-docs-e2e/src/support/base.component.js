export class BaseComponent {
    constructor() {
        this.titleSel = 'h1';
        this.titleLinkSel = '.content-header a';
        this.usageExSel = 'demo-top-section h2';
        this.usageExCodeSel = 'demo-top-section .prettyprint';
        this.titleDefaultExample = 'Usage';
    }
    navigateTo() {
        const bsVersionRoute = Cypress.env('bsVersion') ? `?_bsVersion=bs${Cypress.env('bsVersion')}` : '';
        cy.visit(`${this.pageUrl}${bsVersionRoute}`);
    }
    scrollToMenu(subMenu) {
        cy.get('examples h3').contains(subMenu).scrollIntoView();
    }
    clickOnDemoMenu(subMenu) {
        cy.get('add-nav').contains('a', subMenu).click();
    }
    clickByText(baseSelector, text) {
        cy.get(baseSelector).contains(text).click();
    }
    dblClickByText(parent, text) {
        cy.get(parent).contains(text).dblclick();
    }
    isBtnTxtEqual(baseSelector, expectedBtnTxt, buttonIndex) {
        cy.get(`${baseSelector} button`).eq(buttonIndex ? buttonIndex : 0).invoke('text')
            .should(btnTxt => expect(btnTxt.trim()).to.equal(expectedBtnTxt.trim()));
    }
    isBtnDisabled(baseSelector, disabled, buttonIndex = 0) {
        cy.get(`${baseSelector} button`).eq(buttonIndex ? buttonIndex : 0)
            .should(disabled ? 'to.be.disabled' : 'not.to.be.disabled');
    }
    isLabelTxtEqual(baseSelector, expectedLabelTxt, labelIndex) {
        cy.get(`${baseSelector} label`).eq(labelIndex ? labelIndex : 0).invoke('text')
            .should(labelTxt => expect(labelTxt).to.equal(expectedLabelTxt));
    }
    clickOnBtn(baseSelector, buttonIndex) {
        cy.get(`${baseSelector} button`).eq(buttonIndex ? buttonIndex : 0).click();
    }
    dblClickOnBtn(baseSelector, buttonIndex) {
        cy.get(`${baseSelector} button`).eq(buttonIndex ? buttonIndex : 0).dblclick();
    }
    clickOnInput(baseSelector, inputIndex) {
        cy.get(`${baseSelector} input`).eq(inputIndex ? inputIndex : 0).click();
    }
    dblClickOnInput(baseSelector, inputIndex) {
        cy.get(`${baseSelector} input`).eq(inputIndex ? inputIndex : 0).dblclick();
    }
    hoverOnBtn(baseSelector, buttonIndex) {
        cy.get(`${baseSelector} button`).eq(buttonIndex ? buttonIndex : 0).trigger('mouseenter');
    }
    mouseLeave(baseSelector, buttonIndex) {
        cy.get(`${baseSelector} button`).eq(buttonIndex ? buttonIndex : 0).trigger('mouseleave');
    }
    mouseMove(baseSelector, elementIndex) {
        cy.get(baseSelector).eq(elementIndex ? elementIndex : 0).trigger('mouseenter');
    }
    mouseOver(baseSelector, elementIndex) {
        cy.get(baseSelector).eq(elementIndex ? elementIndex : 0).trigger('mouseover');
    }
    isInputHaveAttrs(baseSelector, attributes, inputIndex = 0) {
        cy.get(`${baseSelector} input`).eq(inputIndex)
            .then(input => {
            let i = 0;
            for (; i < attributes.length; i++) {
                expect(input).to.have.attr(attributes[i].attr, attributes[i].value);
            }
        });
    }
    isInputValueEqual(baseSelector, expectedTxt, inputIndex = 0) {
        cy.get(`${baseSelector} input`).eq(inputIndex).should('to.have.value', expectedTxt);
    }
    isInputValueContain(baseSelector, expectedTxt, inputIndex = 0) {
        cy.get(`${baseSelector} input`).eq(inputIndex).then(input => {
            expect(input.val()).to.contains(expectedTxt);
        });
    }
    clearInputAndSendKeys(baseSelector, dataToSend, inputIndex = 0) {
        cy.get(`${baseSelector} input`).eq(inputIndex).clear().type(dataToSend);
    }
    clearInput(baseSelector, inputIndex = 0) {
        cy.get(`${baseSelector} input`).eq(inputIndex).clear();
    }
    clickEnterOnInput(baseSelector, inputIndex = 0) {
        cy.get(`${baseSelector} input`).eq(inputIndex).type('{enter}');
    }
    pressEsc() {
        cy.get(`body input`).type('{esc}', { force: true });
    }
    isDemoContainsTxt(baseSelector, expectedTxt, expectedTxtOther) {
        cy.get(`${baseSelector}`).invoke('text')
            .should(blockTxt => {
            expect(blockTxt).to.contains(expectedTxt);
            expect(blockTxt).to.contains(expectedTxtOther ? expectedTxtOther : expectedTxt);
        });
    }
    isButtonExist(baseSelector, buttonName, buttonNumber, exist = true) {
        if (exist === true) {
            cy.get(`${baseSelector} button`).eq(buttonNumber ? buttonNumber : 0).invoke('text')
                .should(btnTxt => expect(btnTxt.trim()).to.equal(buttonName.trim()));
        }
        else {
            cy.get(`${baseSelector} button`).contains(buttonName).should('not.exist');
        }
    }
    isSelectExist(baseSelector, selectText, selectNumber = 0) {
        cy.get(`${baseSelector} select`).eq(selectNumber).invoke('text')
            .should(btnTxt => expect(btnTxt).to.contain(selectText));
    }
    selectOne(baseSelector, selectToChose, selectNumber = 0) {
        cy.get(`${baseSelector} select`).eq(selectNumber).select(selectToChose);
    }
    isPreviewExist(baseSelector, previewText, previewNumber) {
        cy.get(`${baseSelector} .card.card-block`).eq(previewNumber ? previewNumber : 0).invoke('text')
            .should(btnTxt => expect(btnTxt).to.contain(previewText));
    }
    isButtonDisabled(baseSelector, buttonIndex = 0, disabled = true) {
        cy.get(`${baseSelector} button`).eq(buttonIndex).should(disabled ? 'to.be.disabled' : 'not.to.be.disabled');
    }
    clickOutside(baseSelector) {
        cy.get(baseSelector).eq(0).trigger('click', { clientX: 100, clientY: 100, force: true });
    }
    clickCheckbox(baseSelector, shouldBeChecked) {
        if (shouldBeChecked) {
            cy.get(`${baseSelector} input[type="checkbox"]`)
                .check();
        }
        else {
            cy.get(`${baseSelector} input[type="checkbox"]`)
                .uncheck();
        }
    }
    isPreviewHidden(baseSelector, previewNumber) {
        if (!previewNumber) {
            cy.get(`${baseSelector} .card.card-block`).should('not.exist');
        }
        else {
            cy.get(`${baseSelector} .card.card-block`).eq(previewNumber).should('not.exist');
        }
    }
    isTemplateSrcContain(demoName, expectedTxt) {
        cy.get('examples h3')
            .contains(demoName)
            .parent()
            .find('tab[heading*="template"]')
            .invoke('text')
            .should('to.contains', expectedTxt);
    }
    isCodePreviewExist(baseSelector, previewText, exist = true, previewNumber) {
        if (exist) {
            cy.get(`${baseSelector} .code-preview`).eq(previewNumber ? previewNumber : 0).invoke('text')
                .should(btnTxt => expect(btnTxt).to.contain(previewText));
        }
        else {
            cy.get(`${baseSelector} .code-preview`)
                .should('not.exist');
        }
    }
    isComponentSrcContain(demoName, expectedTxt) {
        cy.get('examples h3')
            .contains(demoName)
            .parent()
            .find('tab[heading*="component"]')
            .invoke('text')
            .should('to.contains', expectedTxt);
    }
    isElemTextContain(baseSelector, itemSel, expectedText, elementIndex = 0) {
        cy.get(baseSelector).find(itemSel).eq(elementIndex).invoke('text')
            .should('contain', expectedText);
    }
    isElementVisible(baseSelector, additionalSelector, elementIndex = 0) {
        cy.get(`${baseSelector} ${additionalSelector}`).eq(elementIndex).should('be.visible');
    }
    isUrlExist(expectedUrl) {
        cy.url().should('include', expectedUrl);
    }
    isElemHasCorrectUrl(elementSelector, expectedUrl) {
        cy.get(`${elementSelector} [href="${expectedUrl}"]`)
            .should('have.attr', 'href')
            .and('to.equal', expectedUrl);
    }
}
//# sourceMappingURL=base.component.js.map