import { __decorate } from "tslib";
import { Module } from '@nestjs/common';
import { join } from 'path';
import { AngularUniversalModule, applyDomino } from '@nestjs/ng-universal';
const BROWSER_DIR = join(process.cwd(), process.env.DYNO ? 'browser' : 'demo/dist/browser');
applyDomino(global, join(BROWSER_DIR, 'index.html'));
let ApplicationModule = class ApplicationModule {
};
ApplicationModule = __decorate([
    Module({
        imports: [
            AngularUniversalModule.forRoot({
                viewsPath: BROWSER_DIR,
                bundle: require('../../_root/demo/dist/server/main.js')
            })
        ]
    })
], ApplicationModule);
export { ApplicationModule };
//# sourceMappingURL=app.module.js.map