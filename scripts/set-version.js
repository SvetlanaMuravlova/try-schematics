import { __awaiter } from "tslib";
import { readJson, writeJson } from 'fs-extra';
import { sync as glob } from 'glob';
const packagesGlob = './src/**/package.json';
const mainPackage = './package.json';
const docsVersion = './apps/ngx-bootstrap-docs/src/assets/json/current-version.json';
(() => __awaiter(void 0, void 0, void 0, function* () {
    const version = yield readJson(mainPackage).then(json => json.version);
    const packages = [docsVersion, ...glob(packagesGlob)]
        .map((packagePath) => __awaiter(void 0, void 0, void 0, function* () {
        const packageJson = yield readJson(packagePath);
        packageJson.version = version;
        yield writeJson(packagePath, packageJson, { spaces: 2 });
    }));
    yield Promise.all(packages);
}))();
//# sourceMappingURL=set-version.js.map