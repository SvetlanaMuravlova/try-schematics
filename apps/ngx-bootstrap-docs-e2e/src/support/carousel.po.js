import { BaseComponent } from './base.component';
export class CarouselPo extends BaseComponent {
    constructor() {
        super(...arguments);
        this.pageUrl = '/carousel';
        this.pageTitle = 'Carousel';
        this.ghLinkToComponent = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/carousel';
        this.carouselClass = '.carousel';
        this.indicatorClass = '.carousel-indicators';
        this.itemClass = '.carousel-item';
        this.leftControl = '.icon-prev';
        this.rightControl = '.icon-next';
        this.exampleDemosArr = {
            basic: 'demo-carousel-basic',
            optionalCaptions: 'demo-carousel-captions',
            configuringDefaults: 'demo-carousel-config',
            dynamicSlides: 'demo-carousel-dynamic',
            pauseOnHover: 'demo-carousel-pause-on-hover',
            customContent: 'demo-carousel-custom-content',
            disableLooping: 'demo-carousel-disable-looping',
            disableIndicator: 'demo-carousel-disable-indicator',
            interval: 'demo-carousel-interval',
            slideChangedEvent: 'demo-carousel-slide-changed-event',
            accessibility: 'demo-accessibility'
        };
    }
    isClickActivatedCarouselItem(baseSelector, itemIndex) {
        cy.get(`${baseSelector} ${this.carouselClass} ${this.indicatorClass} li `)
            .eq(itemIndex)
            .click({ force: true })
            .should('have.class', 'active');
    }
    isCarouselItemActive(baseSelector, itemIndex) {
        cy.get(`${baseSelector} ${this.carouselClass} ${this.indicatorClass} li `)
            .eq(itemIndex)
            .should('have.class', 'active');
    }
    clickOnCtrl(baseSelector, ctrlType) {
        cy.get(`${baseSelector} ${ctrlType === 'left' ? this.leftControl : this.rightControl}`).click();
    }
    isCarouselHaveIndicatorsItemsCtrls(baseSelector) {
        cy.get(`${baseSelector} ${this.carouselClass}`)
            .should('to.have.descendants', this.indicatorClass)
            .and('to.have.descendants', this.itemClass)
            .and('to.have.descendants', this.leftControl)
            .and('to.have.descendants', this.rightControl);
    }
    isEachSlideHave(baseSelector, slideParams) {
        cy.get(`${baseSelector} ${this.carouselClass} slide `)
            .each(slide => {
            let i = 0;
            for (; i < slideParams.length; i++) {
                expect(slide).to.have.descendants(slideParams[i]);
            }
        });
    }
    isSlidesCountEqual(baseSelector, expectedCount) {
        cy.get(`${baseSelector} ${this.indicatorClass} li`)
            .should('to.have.length', expectedCount);
    }
    isCardTxtEqual(baseSelector, expectedTxt) {
        cy.get(`${baseSelector} .card.card-block`).invoke('text')
            .should(blockTxt => expect(blockTxt).to.equal(expectedTxt));
    }
    hoverSlide(baseSelector, slideIndex) {
        cy.get(`${baseSelector} ${this.carouselClass} div`).eq(slideIndex).trigger('mouseenter');
    }
    mouseLeave(baseSelector) {
        cy.get(`${baseSelector} ${this.carouselClass}`).trigger('mouseleave');
    }
    isCarouselIndicatorDisabled(baseSelector, disabled) {
        cy.get(`${baseSelector} ${this.carouselClass}`)
            .should(disabled ? 'to.not.have.descendants' : 'to.have.descendants', this.indicatorClass)
            .and('to.have.descendants', this.itemClass);
    }
}
//# sourceMappingURL=carousel.po.js.map