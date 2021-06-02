import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { AppComponent } from '../../../../apps/ngx-bootstrap-docs/src/app/app.component';
import { AppModule } from '../../../../apps/ngx-bootstrap-docs/src/app/app.module';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
let AppServerModule = class AppServerModule {
};
AppServerModule = __decorate([
    NgModule({
        imports: [
            AppModule,
            ServerModule,
            ModuleMapLoaderModule
        ],
        bootstrap: [AppComponent]
    })
], AppServerModule);
export { AppServerModule };
//# sourceMappingURL=app.server.module.js.map