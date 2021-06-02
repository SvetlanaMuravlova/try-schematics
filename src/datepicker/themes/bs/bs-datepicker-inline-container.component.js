import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { BsDatepickerContainerComponent } from './bs-datepicker-container.component';
import { BsDatepickerActions } from '../../reducer/bs-datepicker.actions';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
import { BsDatepickerEffects } from '../../reducer/bs-datepicker.effects';
import { BsDatepickerStore } from '../../reducer/bs-datepicker.store';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { datepickerAnimation } from '../../datepicker-animations';
let BsDatepickerInlineContainerComponent = class BsDatepickerInlineContainerComponent extends BsDatepickerContainerComponent {
    constructor(_renderer, _config, _store, _element, _actions, _effects, _positioningService) {
        super(_renderer, _config, _store, _element, _actions, _effects, _positioningService);
        _renderer.setStyle(_element.nativeElement, 'display', 'inline-block');
        _renderer.setStyle(_element.nativeElement, 'position', 'static');
    }
};
BsDatepickerInlineContainerComponent = __decorate([
    Component({
        selector: 'bs-datepicker-inline-container',
        providers: [BsDatepickerStore, BsDatepickerEffects],
        templateUrl: './bs-datepicker-view.html',
        host: {
            '(click)': '_stopPropagation($event)'
        },
        animations: [datepickerAnimation]
    }),
    __metadata("design:paramtypes", [Renderer2,
        BsDatepickerConfig,
        BsDatepickerStore,
        ElementRef,
        BsDatepickerActions,
        BsDatepickerEffects,
        PositioningService])
], BsDatepickerInlineContainerComponent);
export { BsDatepickerInlineContainerComponent };
//# sourceMappingURL=bs-datepicker-inline-container.component.js.map