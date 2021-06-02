import { __decorate, __metadata, __param } from "tslib";
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { isBs3, setTheme } from 'ngx-bootstrap/utils';
import { StyleManager } from '../../theme/style-manager';
import { ThemeStorage } from '../../theme/theme-storage';
import { DOCS_TOKENS } from '../../tokens/docs-routes-token';
const _bs3Css = 'assets/css/bootstrap-3.3.7/css/bootstrap.min.css';
const _bs4Css = 'assets/css/bootstrap-4.0.0/css/bootstrap.min.css';
let SidebarComponent = class SidebarComponent {
    constructor(activatedRoute, renderer, router, themeStorage, styleManager, document, _routes) {
        this.activatedRoute = activatedRoute;
        this.renderer = renderer;
        this.router = router;
        this.themeStorage = themeStorage;
        this.styleManager = styleManager;
        this.document = document;
        this.isShown = false;
        this.search = { text: '' };
        this.routes = _routes.filter((v) => v.path !== '**');
        const themeFromUrl = this.activatedRoute.snapshot.queryParams._bsVersion;
        const currentTheme = themeFromUrl || this.themeStorage.getStoredTheme();
        if (currentTheme) {
            this.installTheme(currentTheme);
        }
        this.scrollSubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.toggle(false);
            }
        });
    }
    get isBs3() {
        return isBs3();
    }
    toggle(isShown) {
        this.isShown = typeof isShown === 'undefined' ? !this.isShown : isShown;
        if (this.document && this.document.body) {
            if (this.isShown) {
                this.renderer.addClass(this.document.body, 'isOpenMenu');
            }
            else {
                this.renderer.removeClass(this.document.body, 'isOpenMenu');
            }
            if (this.isShown === false && this.document.documentElement) {
                this.renderer.setProperty(this.document.documentElement, 'scrollTop', '0');
                this.renderer.setProperty(this.document.body, 'scrollTop', '0');
            }
        }
    }
    installTheme(theme) {
        setTheme(theme);
        this.currentTheme = this.isBs3 ? 'bs3' : 'bs4';
        this.styleManager.setStyle('theme', this.isBs3 ? _bs3Css : _bs4Css);
        if (this.currentTheme) {
            this.themeStorage.storeTheme(this.currentTheme);
        }
    }
    ngOnDestroy() {
        this.scrollSubscription.unsubscribe();
    }
};
SidebarComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'sidebar',
        templateUrl: './sidebar.component.html'
    }),
    __param(5, Inject(DOCUMENT)),
    __param(6, Inject(DOCS_TOKENS)),
    __metadata("design:paramtypes", [ActivatedRoute,
        Renderer2,
        Router,
        ThemeStorage,
        StyleManager, Object, Array])
], SidebarComponent);
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map