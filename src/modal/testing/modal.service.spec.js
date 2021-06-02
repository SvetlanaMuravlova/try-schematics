import { __decorate, __metadata } from "tslib";
import { Component, NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { pairwise, tap } from 'rxjs/operators';
import { BsModalService, ModalModule } from '../index';
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
    it('should return random id on spin up a new modal', done => {
        modalService.onShown.subscribe((data) => {
            expect(data.id).toBeTruthy();
            done();
        });
        modalService.show(TestModalComponent);
    });
    it('should return different random id when open nested modal without specifying id', done => {
        modalService.onShown.pipe(pairwise(), tap(([firstData, secondData]) => {
            expect(firstData.id).not.toBe(secondData.id);
            done();
        })).subscribe();
        modalService.show(TestModalComponent);
        modalService.show(TestModalComponent);
    });
    it('should return id in config when specified', done => {
        const id = 20;
        modalService.onShown.subscribe((data) => {
            expect(data.id).toBe(id);
            done();
        });
        modalService.show(TestModalComponent, { id });
    });
    it('should return id when hide modal', () => {
        const id = 20;
        modalService.onHidden.subscribe((data) => {
            expect(data.id).toBe(id);
        });
        const bsRef = modalService.show(TestModalComponent, { id });
        bsRef.hide();
    });
});
//# sourceMappingURL=modal.service.spec.js.map