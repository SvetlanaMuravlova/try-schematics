import { BaseComponent } from './base.component';
export class SortablePo extends BaseComponent {
    constructor() {
        super(...arguments);
        this.pageUrl = '/sortable';
        this.pageTitle = 'Sortable';
        this.ghLinkToComponent = 'https://github.com/valor-software/ngx-bootstrap/blob/development/src/sortable';
        this.exampleDemosArr = {
            basic: 'basic-demo',
            complexData: 'complex-datamodel-demo',
            customItem: 'custom-item-template-demo',
            accessibility: 'demo-accessibility'
        };
    }
    isSortableLengthEqual(baseSelector, sortableIndex, expectedLength) {
        cy.get(`${baseSelector} bs-sortable`)
            .eq(sortableIndex)
            .find(`.sortable-item`)
            .should('have.length', expectedLength);
    }
    isSortableVisible(baseSelector, sortableIndex) {
        cy.get(`${baseSelector} bs-sortable div`)
            .eq(sortableIndex)
            .should('be.visible');
    }
    moveSortableItem(baseSelector, sortableIndexFrom, itemIndexFrom, sortableIndexTo, itemIndexTo) {
        const dragEvent = {
            dataTransfer: {
                setData: Function.prototype
            }
        };
        cy.get(`${baseSelector} bs-sortable`)
            .eq(sortableIndexFrom)
            .find('.sortable-item')
            .eq(itemIndexFrom).as('ItemFrom');
        cy.get(`${baseSelector} bs-sortable`)
            .eq(sortableIndexTo)
            .find('.sortable-item')
            .eq(itemIndexTo).as('ItemTo');
        cy.get(`${baseSelector} bs-sortable`)
            .eq(sortableIndexTo)
            .find('.sortable-wrapper').as('SortableTo');
        cy.get('@ItemFrom')
            .trigger('dragstart', dragEvent);
        cy.get('@ItemTo')
            .trigger('dragover');
        cy.get('@SortableTo')
            .trigger('drop');
    }
    isSortableItemsWithIndexes(baseSelector, sortableIndex, existIndexes) {
        cy.get(`${baseSelector} bs-sortable`)
            .eq(sortableIndex)
            .find('.sortable-item')
            .each((sortableItem, itemIndex) => {
            if (existIndexes) {
                expect(sortableItem.text()).to.contains(`${itemIndex}: `);
            }
            else {
                expect(sortableItem.text()).not.to.contains(`${itemIndex}: `);
            }
        });
    }
}
//# sourceMappingURL=sortable.po.js.map