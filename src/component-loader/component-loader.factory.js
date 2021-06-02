import { __decorate, __metadata } from "tslib";
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector, NgZone } from '@angular/core';
import { ComponentLoader } from './component-loader.class';
import { PositioningService } from 'ngx-bootstrap/positioning';
let ComponentLoaderFactory = class ComponentLoaderFactory {
    constructor(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     *
     * @param _elementRef
     * @param _viewContainerRef
     * @param _renderer
     */
    createLoader(_elementRef, _viewContainerRef, _renderer) {
        return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    }
};
ComponentLoaderFactory = __decorate([
    Injectable({ providedIn: 'root' }),
    __metadata("design:paramtypes", [ComponentFactoryResolver,
        NgZone,
        Injector,
        PositioningService,
        ApplicationRef])
], ComponentLoaderFactory);
export { ComponentLoaderFactory };
//# sourceMappingURL=component-loader.factory.js.map