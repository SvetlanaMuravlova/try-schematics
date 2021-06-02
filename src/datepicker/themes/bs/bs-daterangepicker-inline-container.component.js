import { __decorate, __metadata } from "tslib";
import { ElementRef, Component, Renderer2 } from '@angular/core';
import { BsDaterangepickerContainerComponent } from './bs-daterangepicker-container.component';
import { BsDatepickerActions } from '../../reducer/bs-datepicker.actions';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
import { BsDatepickerEffects } from '../../reducer/bs-datepicker.effects';
import { BsDatepickerStore } from '../../reducer/bs-datepicker.store';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { datepickerAnimation } from '../../datepicker-animations';
let BsDaterangepickerInlineContainerComponent = class BsDaterangepickerInlineContainerComponent extends BsDaterangepickerContainerComponent {
    constructor(_renderer, _config, _store, _element, _actions, _effects, _positioningService) {
        super(_renderer, _config, _store, _element, _actions, _effects, _positioningService);
        _renderer.setStyle(_element.nativeElement, 'display', 'inline-block');
        _renderer.setStyle(_element.nativeElement, 'position', 'static');
    }
};
BsDaterangepickerInlineContainerComponent = __decorate([
    Component({
        selector: 'bs-daterangepicker-inline-container',
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
], BsDaterangepickerInlineContainerComponent);
export { BsDaterangepickerInlineContainerComponent };
//# sourceMappingURL=bs-daterangepicker-inline-container.component.js.map