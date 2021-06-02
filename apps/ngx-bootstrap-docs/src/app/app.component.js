import { __decorate, __metadata, __param } from "tslib";
import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, UrlSerializer } from '@angular/router';
import { PageScrollService } from 'ngx-page-scroll-core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { Analytics } from '@ngx-bootstrap-doc/docs';
import { filter } from 'rxjs/operators';
let AppComponent = class AppComponent {
    constructor(route, router, pageScrollService, urlSerializer, analytics, document) {
        this.route = route;
        this.router = router;
        this.pageScrollService = pageScrollService;
        this.urlSerializer = urlSerializer;
        this.analytics = analytics;
        this.document = document;
    }
    get isBs3() {
        return isBs3();
    }
    // almost same logic exists in top-menu component
    ngAfterContentInit() {
        this.analytics.trackPageViews();
        const getUrl = (router) => router.routerState.snapshot.url.slice(0, router.routerState.snapshot.url.indexOf('#'));
        let _prev = getUrl(this.router);
        const justDoIt = () => {
            const _cur = getUrl(this.router);
            if (typeof PR !== 'undefined' && _prev !== _cur) {
                _prev = _cur;
                // google code-prettify
                PR.prettyPrint();
            }
            const hash = this.route.snapshot.fragment;
            if (hash) {
                this.pageScrollService.scroll({ document: this.document, scrollTarget: `#${hash}` });
            }
        };
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => setTimeout(() => justDoIt(), 50));
    }
};
AppComponent = __decorate([
    Component({
        selector: 'bs-demo',
        templateUrl: './app.component.html'
    }),
    __param(5, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        PageScrollService,
        UrlSerializer,
        Analytics, Object])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map