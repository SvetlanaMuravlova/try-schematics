import { BaseComponent } from './base.component';
export class ButtonsPo extends BaseComponent {
    constructor() {
        super(...arguments);
        this.pageUrl = '/buttons';
        this.pageTitle = 'Buttons';
        this.ghLinkToComponent = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/buttons';
        this.buttonNames = [
            'Left',
            'Middle',
            'Right'
        ];
        this.output = '.card-header';
        this.buttonGroupSelector = '.btn-group';
        this.btnRadioGroup = '[btnradiogroup]';
        this.exampleDemosArr = {
            basic: 'demo-buttons-basic',
            checkbox: 'demo-buttons-checkbox',
            customCheckboxVal: 'demo-custom-checkbox-value',
            checkboxWithForms: 'demo-buttons-checkbox-reactiveforms',
            radioUnckeckable: 'demo-buttons-radio-uncheckable',
            radioBtn: 'demo-buttons-radio',
            radioBtnWithGroup: 'demo-buttons-radio-with-group',
            radioBtnWithForms: 'demo-buttons-radio-reactiveforms',
            disabled: 'demo-buttons-disabled'
        };
    }
    isButtonVisible(baseSelector, buttonName, btnSelector) {
        cy.get(`${baseSelector} ${btnSelector}`).contains(buttonName).should('to.be.visible');
    }
    isButtonEnabled(baseSelector, buttonName, enabled = true) {
        cy.get(`${baseSelector}`).contains(buttonName).should(enabled ? 'not.to.have.attr' : 'to.have.attr', 'disabled');
    }
    isButtonClassActive(baseSelector, buttonName, result, btnSelector) {
        cy.get(`${baseSelector} ${btnSelector}`).contains(buttonName).should('to.have.class', `${result}`);
    }
    isButtonHaveNoClass(baseSelector, buttonName, result, btnSelector) {
        cy.get(`${baseSelector} ${btnSelector}`).contains(buttonName).should('not.to.have.class', `${result}`);
    }
    isBtnOutputSelected(baseSelector, buttonNumber, result) {
        cy.get(`${baseSelector} ${this.output}`).should('to.contain', `"${this.buttonNames[buttonNumber].toLowerCase()}": ${result}`);
    }
}
//# sourceMappingURL=buttons.po.js.map