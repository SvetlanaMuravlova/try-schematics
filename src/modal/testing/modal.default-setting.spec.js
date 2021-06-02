import { __decorate, __metadata } from "tslib";
import { Component, NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BsModalService, ModalModule } from '../index';
import { MODAL_CONFIG_DEFAULT_OVERRIDE } from '../modal-options.class';
let DummyComponent = class DummyComponent {
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    constructor(modalService) { }
};
DummyComponent = __decorate([
    Component({ template: '<div>Dummy Component</div>' }),
    __metadata("design:paramtypes", [BsModalService])
], DummyComponent);
let TestModalComponent = class TestModalComponent {
};
TestModalComponent = __decorate([
    Component({
        template: '<div>Test Component</div>'
    })
], TestModalComponent);
let TestModule = class TestModule {
};
TestModule = __decorate([
    NgModule({
        declarations: [TestModalComponent],
        providers: [{ provide: MODAL_CONFIG_DEFAULT_OVERRIDE, useValue: { ignoreBackdropClick: true, keyboard: false } }],
        entryComponents: [TestModalComponent]
    })
], TestModule);
export { TestModule };
describe('Modal service', () => {
    let fixture;
    let modalService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DummyComponent],
            providers: [BsModalService],
            imports: [ModalModule.forRoot(), TestModule]
        });
        fixture = TestBed.createComponent(DummyComponent);
        modalService = fixture.debugElement.injector.get(BsModalService);
        fixture.detectChanges();
    });
    it('should replace modal setting by default', () => {
        expect(modalService.config.ignoreBackdropClick).toBeTruthy();
    });
    it('should be able to replace module defined default config on show', () => {
        modalService.show(TestModalComponent, { ignoreBackdropClick: false });
        expect(modalService.config.ignoreBackdropClick).toBeFalsy();
    });
});
//# sourceMappingURL=modal.default-setting.spec.js.map