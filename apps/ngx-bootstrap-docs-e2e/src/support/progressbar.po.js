import { BaseComponent } from './base.component';
export class ProgressbarPo extends BaseComponent {
    constructor() {
        super(...arguments);
        this.pageUrl = '/progressbar';
        this.pageTitle = 'Progressbar';
        this.ghLinkToComponent = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/progressbar';
        this.tagProgressbar = 'progressbar';
        this.tagBar = 'bar';
        this.exampleDemosArr = {
            static: 'demo-progressbar-static',
            dynamic: 'demo-progressbar-dynamic',
            stacked: 'demo-progressbar-stacked',
            config: 'demo-progressbar-config'
        };
    }
    isProgressbarHaveAttrs(baseSelector, attributes, progressBarIndex = 0) {
        cy.get(`${baseSelector} ${this.tagProgressbar}`).eq(progressBarIndex)
            .then(progressbar => {
            let i = 0;
            for (; i < attributes.length; i++) {
                expect(progressbar).to.have.attr(attributes[i].attr, attributes[i].value);
            }
        });
    }
    isBarHaveAttrs(baseSelector, attributes, barIndex = 0) {
        this.getBar(baseSelector, barIndex).then(bar => {
            let i = 0;
            for (; i < attributes.length; i++) {
                expect(bar).to.have.attr(attributes[i].attr, attributes[i].value);
            }
        });
    }
    isBarTypeHaveClass(baseSelector, barIndex = 0, expectedClass) {
        this.getBar(baseSelector, barIndex).then($bar => {
            if (!expectedClass) {
                expect($bar.attr('class').split('bg-')[1]).to.match(/^(success|info|danger|warning) progress-bar$/);
            }
            else {
                expect($bar.attr('class').split('bg-')[1]).to.contain(expectedClass);
            }
        });
    }
    isBarHaveAnimation(baseSelector, animated, barIndex = 0) {
        this.getBar(baseSelector, barIndex).then(bar => animated ? expect(bar).to.have.class('progress-bar-animated') :
            expect(bar).not.to.have.class('progress-bar-animated'));
    }
    isBarHaveAnimationCSS(baseSelector, animated, barIndex = 0) {
        this.getBar(baseSelector, barIndex).then(bar => animated ? expect(bar.css('animation')).not.to.be.undefined :
            expect(bar.css('animation')).to.be.undefined);
    }
    isBarTxtContain(baseSelector, expectedText, barIndex = 0) {
        this.getBar(baseSelector, barIndex).invoke('text').should('to.contain', expectedText);
    }
    getBar(baseSelector, barIndex = 0) {
        return cy.get(`${baseSelector} ${this.tagProgressbar} ${this.tagBar}`).eq(barIndex);
    }
    getBarType(barValueNumber) {
        let barType;
        switch (true) {
            case (barValueNumber >= 25 && barValueNumber < 50):
                barType = 'info';
                break;
            case (barValueNumber >= 50 && barValueNumber < 75):
                barType = 'warning';
                break;
            case (barValueNumber < 25):
                barType = 'success';
                break;
            case (barValueNumber >= 75):
                barType = 'danger';
                break;
            default:
                barType = 'info';
        }
        return barType;
    }
    isProgressBarsLengthEql(baseSelector, expectedLength) {
        cy.get(`${baseSelector} ${this.tagProgressbar}`).its('length').should('eq', expectedLength);
    }
    isBarsLengthGreaterThan(baseSelector, minLength) {
        cy.get(`${baseSelector} ${this.tagProgressbar} ${this.tagBar}`).its('length').should('be.gt', minLength);
    }
    getBars(baseSelector) {
        return cy.get(`${baseSelector} ${this.tagProgressbar} ${this.tagBar}`);
    }
}
//# sourceMappingURL=progressbar.po.js.map