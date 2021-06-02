import { BaseComponent } from './base.component';
export class PaginationPo extends BaseComponent {
    constructor() {
        super(...arguments);
        this.pageUrl = '/pagination';
        this.pageTitle = 'Pagination';
        this.ghLinkToComponent = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/pagination';
        this.classActive = '.active';
        this.classPrevBtn = '[class*="prev"]';
        this.classNextBtn = '[class*="next"]';
        this.classFirstBtn = '.pagination-first';
        this.classLastBtn = '.pagination-last';
        this.classPaginationPage = '.pagination-page';
        this.exampleDemosArr = {
            basic: 'demo-pagination-basic',
            manualSwitchingPage: 'demo-pagination-manual-switching',
            pageChangedEvent: 'demo-pagination-page-changed-event',
            pagesCountChangedEvent: 'demo-pagination-pages-count-changed',
            boundaryLinks: 'demo-pagination-boundary-links',
            directionLinks: 'demo-pagination-direction-links',
            customLinksContent: 'demo-pagination-custom-links-content',
            disabled: 'demo-pagination-disabled',
            limits: 'demo-pagination-limit',
            centeringPageLink: 'demo-pagination-rotate',
            contentSwitching: 'demo-pagination-content-switching',
            pager: 'demo-pagination-pager'
        };
    }
    isActivePositionEqual(baseSelector, positionNumber) {
        cy.get(`${baseSelector} ${this.classActive}`).invoke('text')
            .should(linkTxt => expect(linkTxt).to.equal(positionNumber));
    }
    isPagerDisabled(baseSelector, pagerName, disabled) {
        cy.get(`${baseSelector} ${this.getPagerSelector(pagerName)}`)
            .should(disabled ? 'to.have.class' : 'not.to.have.class', 'disabled').invoke('text');
    }
    isPagerExist(baseSelector, pagerName, existence) {
        cy.get(`${baseSelector}`)
            .should(existence ? 'to.have.descendants' : 'not.to.have.descendants', this.getPagerSelector(pagerName));
    }
    isPagerTxtEqual(baseSelector, pagerName, expectedTxt) {
        cy.get(`${baseSelector} ${this.getPagerSelector(pagerName)}`).invoke('text')
            .should(pagerTxt => expect(pagerTxt).to.equal(expectedTxt));
    }
    isPageActive(baseSelector, pageNumber, active) {
        cy.contains(`${baseSelector} li`, pageNumber)
            .should(active ? 'to.have.class' : 'not.to.have.class', this.classActive);
    }
    isPageTxtEqual(baseSelector, pageIndex, expectedText) {
        cy.get(`${baseSelector} li`).eq(pageIndex).invoke('text')
            .should(pageTxt => expect(pageTxt).to.equal(expectedText));
    }
    isPageDisabled(baseSelector, pageNumber, disabled) {
        cy.contains(`${baseSelector} li`, pageNumber)
            .should(disabled ? 'to.have.class' : 'not.to.have.class', 'disabled');
    }
    clickOnPage(baseSelector, pageNumber) {
        cy.contains(`${baseSelector} li`, pageNumber).click();
    }
    clickOnPager(baseSelector, pagerName) {
        cy.get(`${baseSelector} ${this.getPagerSelector(pagerName)}`).click();
    }
    clickOnPaginationBtn(baseSelector, btnName) {
        cy.contains(`${baseSelector} button`, btnName).click();
    }
    isPaginationLengthEqual(baseSelector, expectedLength) {
        cy.get(`${baseSelector} ${this.classPaginationPage}`).should('have.length', expectedLength);
    }
    isActivePageCentered(baseSelector, isCentered) {
        cy.get(`${baseSelector} ${this.classPaginationPage}`).as('pagination').its('length').then(paginationlength => {
            cy.get('@pagination').each((element, index) => {
                if (element.hasClass('active')) {
                    isCentered ? expect(index + 1).to.equal(Math.round(paginationlength / 2)) :
                        expect(index + 1).not.to.equal(Math.round(paginationlength / 2));
                }
            });
        });
    }
    isPaginationContentUpdated(baseSelector) {
        cy.get(`${baseSelector} ${this.classPaginationPage}`).each((element, index) => {
            if (element.hasClass('active')) {
                cy.get(`${baseSelector} .content-wrapper`).invoke('text').then(contentTxt => {
                    let i = 0;
                    for (; i < 10; i++) {
                        expect(contentTxt).to.contain(`Content line ${(index + 1) * 10 - i}`);
                    }
                });
            }
        });
    }
    isSeparatePagerDisabled(baseSelector, pagerName, disabled) {
        cy.get(`${baseSelector} pager li`).eq(pagerName === 'Next' ? 1 : 0)
            .should(disabled ? 'to.have.class' : 'not.to.have.class', 'disabled');
    }
    getPagerSelector(pagerName) {
        let pagerSelector;
        switch (pagerName) {
            case 'Next':
                pagerSelector = this.classNextBtn;
                break;
            case 'Previous':
                pagerSelector = this.classPrevBtn;
                break;
            case 'First':
                pagerSelector = this.classFirstBtn;
                break;
            case 'Last':
                pagerSelector = this.classLastBtn;
                break;
            default:
                pagerSelector = '';
        }
        return pagerSelector;
    }
}
//# sourceMappingURL=pagination.po.js.map