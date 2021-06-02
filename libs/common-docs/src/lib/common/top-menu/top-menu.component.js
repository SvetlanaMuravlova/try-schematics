import { __decorate, __metadata, __param } from "tslib";
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
let TopMenuComponent = class TopMenuComponent {
    constructor(platformId, http, router) {
        this.http = http;
        this.router = router;
        this.previousDocs = [];
        this.isLocalhost = false;
        this.needPrefix = false;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    ngAfterViewInit() {
        if (!this.isBrowser) {
            return;
        }
        // todo: remove this sh**
        if (typeof window !== 'undefined') {
            this.isLocalhost = location.hostname === 'localhost';
            this.needPrefix = location.pathname !== '/';
            this.appUrl = location.protocol + '//' + location.hostname + (this.isLocalhost ? ':' + location.port + '/' : '/');
            this.http.get('assets/json/versions.json')
                .subscribe((data) => {
                this.previousDocs.push(data[0]);
                this.previousDocs = this.previousDocs
                    .concat(data.reverse())
                    .slice(0, -1);
            });
            this.http.get('assets/json/current-version.json')
                .subscribe((data) => {
                this.currentVersion = data.version;
            });
        }
        const getUrl = (router) => {
            const indexOfHash = router.routerState.snapshot.url.indexOf('#');
            return router.routerState.snapshot.url.slice(0, indexOfHash);
        };
        let _prev = getUrl(this.router);
        this.router.events.subscribe((event) => {
            const _cur = getUrl(this.router);
            if (typeof window !== 'undefined') {
                this.appHash = location.hash === '#/' ? '' : location.hash;
            }
            if (event instanceof NavigationEnd && _cur !== _prev) {
                _prev = _cur;
            }
        });
    }
};
TopMenuComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'top-menu',
        templateUrl: './top-menu.component.html'
    }),
    __param(0, Inject(PLATFORM_ID)),
    __metadata("design:paramtypes", [Number, HttpClient,
        Router])
], TopMenuComponent);
export { TopMenuComponent };
//# sourceMappingURL=top-menu.component.js.map