import { __awaiter } from "tslib";
import { enableProdMode } from '@angular/core';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
const PORT = process.env.PORT || 3000;
enableProdMode();
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield NestFactory.create(ApplicationModule);
        yield app.listen(PORT);
    });
}
bootstrap().catch(err => console.error(err));
//# sourceMappingURL=server.js.map