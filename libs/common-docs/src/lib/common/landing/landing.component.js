import { __decorate, __metadata } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { StyleManager } from '../../theme/style-manager';
import { ThemeStorage } from '../../theme/theme-storage';
import { Router } from '@angular/router';
const _bs4Css = 'assets/css/bootstrap-4.0.0/css/bootstrap.min.css';
let LandingComponent = class LandingComponent {
    constructor(styleManager, http, themeStorage, router) {
        this.styleManager = styleManager;
        this.http = http;
        this.themeStorage = themeStorage;
        this.router = router;
        const currentTheme = this.themeStorage.getStoredTheme();
        if (currentTheme && currentTheme === 'bs3') {
            this.installTheme('bs4');
        }
    }
    ngAfterViewInit() {
        if (typeof window !== 'undefined') {
            this.http.get('assets/json/current-version.json').subscribe(data => {
                this.currentVersion = data.version;
            });
        }
    }
    installTheme(theme) {
        setTheme(theme);
        this.styleManager.setStyle('theme', _bs4Css);
        if (this.currentTheme) {
            this.themeStorage.storeTheme(this.currentTheme);
        }
    }
    scrollToSection() {
        this.router.navigate(['.', 'documentation'], { fragment: 'getting-started' });
    }
};
LandingComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'landing',
        templateUrl: './landing.component.html'
    }),
    __metadata("design:paramtypes", [StyleManager,
        HttpClient,
        ThemeStorage,
        Router])
], LandingComponent);
export { LandingComponent };
//# sourceMappingURL=landing.component.js.map