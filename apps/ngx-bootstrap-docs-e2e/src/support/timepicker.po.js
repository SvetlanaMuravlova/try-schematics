import { BaseComponent } from './base.component';
export class TimepickerPo extends BaseComponent {
    constructor() {
        super(...arguments);
        this.pageUrl = '/timepicker';
        this.pageTitle = 'Timepicker';
        this.ghLinkToComponent = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/timepicker';
        this.exampleDemosArr = {
            basic: 'demo-timepicker-basic',
            form: 'demo-timepicker-form',
            meridian: 'demo-timepicker-meridian',
            customMeridian: 'demo-timepicker-custom-meridian',
            minMax: 'demo-timepicker-min-max',
            toggleMinSec: 'demo-timepicker-seconds',
            disabled: 'demo-timepicker-disabled',
            readonly: 'demo-timepicker-readonly',
            customSteps: 'demo-timepicker-custom',
            customValidation: 'demo-timepicker-custom-validation',
            isValidEvent: 'demo-timepicker-isvalid',
            dynamic: 'demo-timepicker-dynamic',
            mousewheel: 'demo-timepicker-mousewheel',
            arrowKeys: 'demo-timepicker-arrowkeys',
            spinners: 'demo-timepicker-spinners',
            configDefaults: 'demo-timepicker-config'
        };
    }
    isTimepickerVisible(baseSelector) {
        cy.get(`${baseSelector} timepicker table`)
            .should('be.visible');
    }
    isInputDisabled(baseSelector, inputIndex = 0, disabled = true) {
        cy.get(`${baseSelector} input`)
            .eq(inputIndex)
            .should(disabled ? 'to.be.disabled' : 'not.to.be.disabled');
    }
    isInputReadonly(baseSelector, inputIndex = 0, readonly = true) {
        cy.get(`${baseSelector} input`)
            .eq(inputIndex)
            .should(readonly ? 'to.have.attr' : 'not.to.have.attr', 'readonly');
    }
    isAlertContains(baseSelector, expectedText, alertIndex = 0, alertType = 'info') {
        cy.get(`${baseSelector} .alert.alert-${alertType}`)
            .eq(alertIndex)
            .invoke('text')
            .should('to.contain', expectedText);
    }
    setTimeInInputs(baseSelector, hourToSet, minuteToSet) {
        this.clearInputAndSendKeys(`${baseSelector} timepicker`, hourToSet.toString(), 0);
        this.clearInputAndSendKeys(`${baseSelector} timepicker`, minuteToSet.toString(), 1);
    }
    clickOnArrow(baseSelector, arrowType, arrowIndex = 0) {
        cy.get(`${baseSelector} timepicker`)
            .find(arrowType === 'up' ? '.bs-chevron-up' : '.bs-chevron-down')
            .eq(arrowIndex)
            .click({ force: true });
    }
    triggerEventOnInput(baseSelector, event, inputIndex = 0, params) {
        if (!params) {
            cy.get(`${baseSelector} input`).eq(inputIndex).trigger(event);
        }
        else {
            cy.get(`${baseSelector} input`).eq(inputIndex).trigger(event, params);
        }
    }
    isInputHaveInvalidStatus(baseSelector, invalid, inputIndex = 0) {
        cy.get(`${baseSelector} input`).eq(inputIndex).as('Input');
        if (invalid) {
            cy.get('@Input').then(input => expect(input.attr('class')).to.contains('is-invalid'));
        }
        else {
            cy.get('@Input').then(input => expect(input.attr('class')).not.to.contains('is-invalid'));
        }
    }
    getMeridianValue(baseSelector) {
        return cy.get(`${baseSelector} button`).eq(0).invoke('text');
    }
    isArrowDisabled(baseSelector, arrowType, arrowIndex = 0, disabled = true) {
        cy.get(`${baseSelector} timepicker`)
            .find(arrowType === 'up' ? '.bs-chevron-up' : '.bs-chevron-down')
            .eq(arrowIndex)
            .parent()
            .should(disabled ? 'to.have.class' : 'not.to.have.class', 'disabled');
    }
    getHoursIn12Format(date) {
        let hours = date.getHours();
        if (hours > 12) {
            return hours -= 12;
        }
        else if (hours === 0) {
            hours = 12;
        }
        return hours;
    }
    getHoursIn24Format(hours) {
        if (new Date().getHours() >= 12) {
            return hours + 12;
        }
        else {
            return hours;
        }
    }
    isInputValueContain(baseSelector, expectedTxt, inputIndex = 0) {
        if (!Number(expectedTxt)) {
            cy.get(`${baseSelector} input`).eq(inputIndex).then(input => {
                expect(input.val()).to.contains(expectedTxt);
            });
        }
        else {
            cy.get(`${baseSelector} input`).eq(inputIndex).then(input => {
                if (Number(input.val()) === Number(expectedTxt)) {
                    expect(input.val()).to.contains(expectedTxt);
                }
                else if (Number(input.val()) + 1 === Number(expectedTxt)) {
                    expect((Number(input.val()) + 1).toString()).to.contains(expectedTxt.toString());
                }
                else {
                    expect((Number(input.val()) - 1).toString()).to.contains(expectedTxt.toString());
                }
            });
        }
    }
    isTimepickerInputExist(baseSelector, type, exist = true) {
        const placeholder = type === 'minutes' ? 'MM' : 'SS';
        cy.get(`${baseSelector} timepicker input[placeholder="${placeholder}"]`)
            .should(exist ? 'exist' : 'not.exist');
    }
    selectOption(baseSelector, optionValue, selectIndex) {
        cy.get(`${baseSelector} select`)
            .eq(selectIndex)
            .select(`${optionValue}`);
    }
    isInputValueVisible(baseSelector, inputIndex = 0) {
        cy.get(`${baseSelector} input`)
            .eq(inputIndex)
            .should('to.be.visible')
            .then(input => expect(input.val()).to.be.not.empty);
    }
    pressKeyOnInput(baseSelector, keyToPress, inputIndex = 0) {
        cy.get(`${baseSelector} input`)
            .eq(inputIndex)
            .type(`{${keyToPress}arrow}`);
    }
    isInputPlaceholderContains(baseSelector, placeholder, inputIndex = 0) {
        cy.get(`${baseSelector} .bs-timepicker-field`)
            .eq(inputIndex)
            .should('have.attr', 'placeholder', placeholder);
    }
    isArrowVisible(baseSelector, arrowType, hidden, elementIndex = 0) {
        cy.get(`${baseSelector} .bs-chevron-${arrowType}`)
            .eq(elementIndex)
            .should(hidden ? 'to.be.visible' : 'not.to.be.visible');
    }
}
//# sourceMappingURL=timepicker.po.js.map