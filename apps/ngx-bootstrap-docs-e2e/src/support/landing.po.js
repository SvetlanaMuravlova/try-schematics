import { BaseComponent } from './base.component';
export class LandingPo extends BaseComponent {
    constructor() {
        super(...arguments);
        this.pageUrl = '/';
        this.documentationUrl = '/documentation/';
        this.mainClass = '.main';
        this.logoAtHeader = '.logo';
        this.logoAtContent = '.content-logo';
        this.headerSelector = '.header';
        this.stackOverBtn = 'a[href*= "stackoverflow"]';
        this.gitHbBtn = '.header-list a[href*= "github"]';
        this.slackNgxBtn = '.header-list a[href*= "slack"]';
        this.infoButtons = '.header-list';
        this.sloganBs = '.slogan';
        this.descriptionBs = '.descr';
        this.versionBs = '.version';
        this.advantagesBs = '.advantages';
        this.navBtn = '.btn';
        this.mobileMenu = '.mobile-menu';
        this.mobileMenuBtn = '#mobile-main-menu';
        this.mobileMenuOpened = 'isOpenMenu';
        this.stackoverflowUrl = 'https://stackoverflow.com/questions/tagged/ngx-bootstrap';
        this.githubUrl = 'https://github.com/valor-software/ngx-bootstrap';
        this.slackUrl = 'https://join.slack.com/t/ngx-home/shared_invite/enQtNTExMTY5MzcwMTM0LWVjZGU2MjI4MTVhMGVlMTc2OWRiMzA0NzBhNDU5YzQ0MDM3MWI5NzJjZTUzNzIxZmNjYmFlMjU2MzE0YmY0NWY';
        this.teamUrl = 'https://github.com/valor-software';
        this.contributorsUrl = 'https://github.com/valor-software/ngx-bootstrap/graphs/contributors';
        this.mitLicenseUrl = 'https://github.com/valor-software/ngx-bootstrap/blob/development/LICENSE';
        this.crCommonsUrl = 'https://creativecommons.org/licenses/by/3.0/';
        this.originalBsUrl = 'https://getbootstrap.com/';
    }
    isNavigateBtnExist(btnName) {
        cy.get(this.navBtn).contains(btnName)
            .should('exist');
    }
    clickOnMobileMenuBtn() {
        cy.get(this.mobileMenuBtn).click();
    }
    isSearchResultCorrect(searchResult) {
        cy.get('.sidebar-list').eq(1)
            .should('have.descendants', 'li').invoke('text')
            .should('contain', searchResult);
    }
    isMobileMenuActive() {
        cy.get('body').should('have.class', this.mobileMenuOpened);
    }
    isMobileMenuHasDescendants(descen1Selector, descen2Selector) {
        cy.get(this.mobileMenu).should('be.visible')
            .and('have.descendants', descen1Selector)
            .and('have.descendants', descen2Selector);
    }
    visitNGXBootstrapWithBsVersion(bsVersion) {
        cy.visit(`${this.documentationUrl}?_bsVersion=bs${bsVersion}`);
    }
    isBootstrapVersion(version) {
        cy.get('.selected').invoke('text').should('contain', version);
    }
}
//# sourceMappingURL=landing.po.js.map