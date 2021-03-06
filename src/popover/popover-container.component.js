import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Input, Component } from '@angular/core';
import { PopoverConfig } from './popover.config';
import { isBs3 } from 'ngx-bootstrap/utils';
let PopoverContainerComponent = class PopoverContainerComponent {
    constructor(config) {
        Object.assign(this, config);
    }
    get isBs3() {
        return isBs3();
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], PopoverContainerComponent.prototype, "placement", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PopoverContainerComponent.prototype, "title", void 0);
PopoverContainerComponent = __decorate([
    Component({
        selector: 'popover-container',
        changeDetection: ChangeDetectionStrategy.OnPush,
        // eslint-disable-next-line @angular-eslint/no-host-metadata-property
        host: {
            '[attr.id]': 'popoverId',
            '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
            '[class.show]': '!isBs3',
            '[class.bs3]': 'isBs3',
            role: 'tooltip',
            style: 'display:block;'
        },
        styles: [
            `
    :host.bs3.popover-top {
      margin-bottom: 10px;
    }
    :host.bs3.popover.top>.arrow {
      margin-left: -2px;
    }
    :host.bs3.popover.top {
      margin-bottom: 10px;
    }
    :host.popover.bottom>.arrow {
      margin-left: -4px;
    }
    :host.bs3.bs-popover-left {
      margin-right: .5rem;
    }
    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{
      margin: .3rem 0;
    }
    `
        ],
        templateUrl: './popover-container.component.html'
    }),
    __metadata("design:paramtypes", [PopoverConfig])
], PopoverContainerComponent);
export { PopoverContainerComponent };
//# sourceMappingURL=popover-container.component.js.map