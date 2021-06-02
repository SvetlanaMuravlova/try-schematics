import { BaseComponent } from './base.component';
export class RatingPo extends BaseComponent {
    constructor() {
        super(...arguments);
        this.pageUrl = '/rating';
        this.pageTitle = 'Rating';
        this.ghLinkToComponent = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/rating';
        this.tagRating = 'rating';
        this.exampleDemosArr = {
            basic: 'demo-rating-basic',
            dynamic: 'demo-rating-dynamic',
            customIcons: 'demo-rating-custom',
            selectOnEnter: 'demo-select-on-enter'
        };
    }
    isRatingVisible(baseSelector, ratingIndex = 0) {
        cy.get(`${baseSelector} ${this.tagRating}`)
            .eq(ratingIndex)
            .should('to.be.visible');
    }
    isRatingReadonly(baseSelector, readonly = false, ratingIndex = 0) {
        cy.get(`${baseSelector} ${this.tagRating}`)
            .eq(ratingIndex)
            .should(readonly ? 'not.to.be.enabled' : 'to.be.enabled');
    }
    isRatingMaxEqual(baseSelector, maxValue, ratingIndex = 0) {
        cy.get(`${baseSelector} ${this.tagRating}`)
            .eq(ratingIndex)
            .find('span')
            .should('to.have.attr', 'aria-valuemax', `${maxValue}`);
    }
    isRatingCurrentEqual(baseSelector, value, ratingIndex = 0) {
        cy.get(`${baseSelector} ${this.tagRating}`)
            .eq(ratingIndex)
            .find('span')
            .should('to.have.attr', 'aria-valuenow', `${value}`);
    }
    isPreviewExist(baseSelector, previewText, previewNumber) {
        cy.get(`${baseSelector} .card .card-block`).eq(previewNumber ? previewNumber : 0).invoke('text')
            .should(btnTxt => expect(btnTxt).to.contain(previewText));
    }
    addRatingMark(baseSelector, ratingIndex = 0, markToAdd) {
        cy.get(`${baseSelector} ${this.tagRating}`)
            .eq(ratingIndex)
            .find('.bs-rating-star')
            .eq(markToAdd - 1)
            .click();
    }
    mouseMoveToRatingIcon(baseSelector, markToMove) {
        this.mouseMove(`${baseSelector} .bs-rating-star`, markToMove - 1);
    }
    focusOnRating(baseSelector) {
        cy.get(`${baseSelector} ${this.tagRating}>span`)
            .click({ force: true });
    }
    pressKeyboardBtn(baseSelector, btnName) {
        cy.get(`${baseSelector} ${this.tagRating}>span`).type(`{${btnName}}`, { force: true });
    }
}
//# sourceMappingURL=rating.po.js.map