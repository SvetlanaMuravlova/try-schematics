import { BaseComponent } from './base.component';
export class TypeaheadPo extends BaseComponent {
    constructor() {
        super(...arguments);
        this.pageUrl = '/typeahead';
        this.pageTitle = 'Typeahead';
        this.ghLinkToComponent = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/typeahead';
        this.inputSelector = 'input';
        this.cardHeader = '.card-header';
        this.activeDropdown = '.dropdown';
        this.dropdownBtn = '.dropdown button';
        this.dropdownItem = '.dropdown-item';
        this.formGroup = 'label';
        this.dropdownHeader = '.dropdown-header';
        this.btnSelector = '.btn';
        this.noResultAlert = '.alert-danger';
        this.exampleDemosArr = {
            basic: 'demo-typeahead-basic',
            itemTemplate: 'demo-typeahead-item-template',
            optionField: 'demo-typeahead-field',
            asyncData: 'demo-typeahead-async',
            withDelay: 'demo-typeahead-delay',
            templateDriven: 'demo-typeahead-form',
            reactiveForms: 'demo-typeahead-reactive-form',
            groupingResults: 'demo-typeahead-grouping',
            ignoreSpaceAndOrder: 'demo-typeahead-single-world',
            delimiters: 'demo-typeahead-phrase-delimiters',
            multipleSearch: 'demo-typeahead-multiple-search',
            dropUp: 'demo-typeahead-dropup',
            onBlur: 'demo-typeahead-on-blur',
            appendToBody: 'demo-typeahead-container',
            noResult: 'demo-typeahead-no-result',
            scrollable: 'demo-typeahead-scrollable',
            latinize: 'demo-typeahead-latinize',
            onSelect: 'demo-typeahead-on-select',
            resultOnBlur: 'demo-typeahead-show-on-blur',
            configDefaults: 'demo-typeahead-config',
            selectFirstItem: 'demo-selected-first-item'
        };
    }
    isDropdownNotEnabled(baseSelector) {
        cy.get(`${baseSelector} ${this.activeDropdown}`)
            .should('not.be.enabled');
    }
    isDropdownHasNItems(itemsSelector, expectedQuantity) {
        cy.get(itemsSelector).should('have.length', expectedQuantity);
    }
    isDropdownScrollable(stateMatch) {
        cy.get(this.activeDropdown).contains(stateMatch).scrollIntoView()
            .should('be.visible');
    }
    isDropdownNotExist(baseSelector) {
        cy.get(`${baseSelector} ${this.activeDropdown}`)
            .should('not.exist');
    }
}
//# sourceMappingURL=typeahead.po.js.map