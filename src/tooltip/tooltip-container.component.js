import { __decorate, __metadata } from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TooltipConfig } from './tooltip.config';
import { isBs3 } from 'ngx-bootstrap/utils';
let TooltipContainerComponent = class TooltipContainerComponent {
    constructor(config) {
        Object.assign(this, config);
    }
    get isBs3() {
        return isBs3();
    }
    ngAfterViewInit() {
        this.classMap = { in: false, fade: false };
        if (this.placement) {
            this.classMap[this.placement] = true;
        }
        this.classMap[`tooltip-${this.placement}`] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.containerClass) {
            this.classMap[this.containerClass] = true;
        }
    }
};
TooltipContainerComponent = __decorate([
    Component({
        selector: 'bs-tooltip-container',
        changeDetection: ChangeDetectionStrategy.OnPush,
        // eslint-disable-next-line @angular-eslint/no-host-metadata-property
        host: {
            '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
            '[class.show]': '!isBs3',
            '[class.bs3]': 'isBs3',
            '[attr.id]': 'this.id',
            role: 'tooltip'
        },
        styles: [
            `
    :host.tooltip {
      display: block;
      pointer-events: none;
    }
    :host.bs3.tooltip.top>.arrow {
      margin-left: -2px;
    }
    :host.bs3.tooltip.bottom {
      margin-top: 0px;
    }
    :host.bs3.bs-tooltip-left, :host.bs3.bs-tooltip-right{
      margin: 0px;
    }
    :host.bs3.bs-tooltip-right .arrow, :host.bs3.bs-tooltip-left .arrow {
      margin: .3rem 0;
    }
  `
        ],
        template: `
    <div class="tooltip-arrow arrow"></div>
    <div class="tooltip-inner"><ng-content></ng-content></div>
    `
    }),
    __metadata("design:paramtypes", [TooltipConfig])
], TooltipContainerComponent);
export { TooltipContainerComponent };
//# sourceMappingURL=tooltip-container.component.js.map