/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __decorate, __metadata, __param } from "tslib";
/* eslint-disable */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional, NgZone } from '@angular/core';
import { InteractivityChecker } from './interactivity-checker';
import { ConfigurableFocusTrap } from './configurable-focus-trap';
import { ConfigurableFocusTrapConfig } from './configurable-focus-trap-config';
import { FOCUS_TRAP_INERT_STRATEGY } from './focus-trap-inert-strategy';
import { EventListenerFocusTrapInertStrategy } from './event-listener-inert-strategy';
import { FocusTrapManager } from './focus-trap-manager';
/** Factory that allows easy instantiation of configurable focus traps. */
let ConfigurableFocusTrapFactory = class ConfigurableFocusTrapFactory {
    constructor(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._focusTrapManager = _focusTrapManager;
        this._document = _document;
        // TODO split up the strategies into different modules, similar to DateAdapter.
        this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
    }
    create(element, config = new ConfigurableFocusTrapConfig()) {
        let configObject;
        if (typeof config === 'boolean') {
            configObject = new ConfigurableFocusTrapConfig();
            configObject.defer = config;
        }
        else {
            configObject = config;
        }
        return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject);
    }
};
ConfigurableFocusTrapFactory = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(3, Inject(DOCUMENT)),
    __param(4, Optional()), __param(4, Inject(FOCUS_TRAP_INERT_STRATEGY)),
    __metadata("design:paramtypes", [InteractivityChecker,
        NgZone,
        FocusTrapManager, Object, Object])
], ConfigurableFocusTrapFactory);
export { ConfigurableFocusTrapFactory };
//# sourceMappingURL=configurable-focus-trap-factory.js.map