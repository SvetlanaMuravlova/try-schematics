import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { CLASS_NAME, DISMISS_REASONS, ModalOptions, TRANSITION_DURATIONS } from './modal-options.class';
import { isBs3 } from 'ngx-bootstrap/utils';
let ModalContainerComponent = class ModalContainerComponent {
    constructor(options, _element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.isShown = false;
        this.isAnimated = false;
        this.isModalHiding = false;
        this.clickStartedInContent = false;
        this.config = Object.assign({}, options);
    }
    ngOnInit() {
        if (this.isAnimated) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.FADE);
        }
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        setTimeout(() => {
            this.isShown = true;
            this._renderer.addClass(this._element.nativeElement, isBs3() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
        }, this.isAnimated ? TRANSITION_DURATIONS.BACKDROP : 0);
        if (document && document.body) {
            if (this.bsModalService && this.bsModalService.getModalsCount() === 1) {
                this.bsModalService.checkScrollbar();
                this.bsModalService.setScrollbar();
            }
            this._renderer.addClass(document.body, CLASS_NAME.OPEN);
        }
        if (this._element.nativeElement) {
            this._element.nativeElement.focus();
        }
    }
    onClickStarted(event) {
        this.clickStartedInContent = event.target !== this._element.nativeElement;
    }
    onClickStop(event) {
        var _a;
        const clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            !clickedInBackdrop) {
            this.clickStartedInContent = false;
            return;
        }
        (_a = this.bsModalService) === null || _a === void 0 ? void 0 : _a.setDismissReason(DISMISS_REASONS.BACKRDOP);
        this.hide();
    }
    onPopState() {
        var _a;
        (_a = this.bsModalService) === null || _a === void 0 ? void 0 : _a.setDismissReason(DISMISS_REASONS.BACK);
        this.hide();
    }
    onEsc(event) {
        var _a, _b;
        if (!this.isShown) {
            return;
        }
        if (event.keyCode === 27 || event.key === 'Escape') {
            event.preventDefault();
        }
        if (this.config.keyboard &&
            this.level === ((_a = this.bsModalService) === null || _a === void 0 ? void 0 : _a.getModalsCount())) {
            (_b = this.bsModalService) === null || _b === void 0 ? void 0 : _b.setDismissReason(DISMISS_REASONS.ESC);
            this.hide();
        }
    }
    ngOnDestroy() {
        if (this.isShown) {
            this._hide();
        }
    }
    hide() {
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        if (this.config.closeInterceptor) {
            this.config.closeInterceptor().then(() => this._hide(), () => undefined);
            return;
        }
        this._hide();
    }
    _hide() {
        this.isModalHiding = true;
        this._renderer.removeClass(this._element.nativeElement, isBs3() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
        setTimeout(() => {
            var _a, _b;
            this.isShown = false;
            if (document &&
                document.body &&
                ((_a = this.bsModalService) === null || _a === void 0 ? void 0 : _a.getModalsCount()) === 1) {
                this._renderer.removeClass(document.body, CLASS_NAME.OPEN);
            }
            (_b = this.bsModalService) === null || _b === void 0 ? void 0 : _b.hide(this.config.id);
            this.isModalHiding = false;
        }, this.isAnimated ? TRANSITION_DURATIONS.MODAL : 0);
    }
};
__decorate([
    HostListener('mousedown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], ModalContainerComponent.prototype, "onClickStarted", null);
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], ModalContainerComponent.prototype, "onClickStop", null);
__decorate([
    HostListener('window:popstate'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ModalContainerComponent.prototype, "onPopState", null);
__decorate([
    HostListener('window:keydown.esc', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], ModalContainerComponent.prototype, "onEsc", null);
ModalContainerComponent = __decorate([
    Component({
        selector: 'modal-container',
        template: `
    <div [class]="'modal-dialog' + (config.class ? ' ' + config.class : '')"
         role="document"
         focusTrap>
      <div class="modal-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
        // eslint-disable-next-line @angular-eslint/no-host-metadata-property
        host: {
            class: 'modal',
            role: 'dialog',
            tabindex: '-1',
            '[attr.aria-modal]': 'true',
            '[attr.aria-labelledby]': 'config.ariaLabelledBy',
            '[attr.aria-describedby]': 'config.ariaDescribedby'
        }
    }),
    __metadata("design:paramtypes", [ModalOptions,
        ElementRef,
        Renderer2])
], ModalContainerComponent);
export { ModalContainerComponent };
//# sourceMappingURL=modal-container.component.js.map