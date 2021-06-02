import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AlertComponent, AlertConfig, AlertModule } from '../index';
let TestAlertComponent = class TestAlertComponent extends AlertComponent {
    constructor(config, changeDetection) {
        super(config, changeDetection);
    }
};
TestAlertComponent = __decorate([
    Component({ selector: 'alert-test', template: '' }),
    __metadata("design:paramtypes", [AlertConfig, ChangeDetectorRef])
], TestAlertComponent);
describe('Component: Alert', () => {
    let fixture;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let context;
    const overTemplate = `
    <div class="alert" role="alert" [ngClass]="classes" *ngIf="!closed">
      <button *ngIf="dismissible" type="button" class="close" (click)="onClose()" (touch)="onClose()">
        <span aria-hidden="true">&times;</span>
        <span class="sr-only">Close</span>
      </button>
    </div>
  `;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestAlertComponent],
            imports: [AlertModule.forRoot()]
        });
        TestBed.overrideComponent(TestAlertComponent, {
            set: { template: overTemplate }
        });
        fixture = TestBed.createComponent(TestAlertComponent);
        context = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });
    it('should have a default type alert-warning', () => {
        context.ngOnInit();
        expect(context.type).toEqual(`warning`);
    });
    it('should have class dismissible if dismissible=true', () => {
        context.dismissible = true;
        context.ngOnInit();
        expect(context.classes).toEqual(`alert-dismissible`);
    });
    it('should be dismissed by timeout', (done) => {
        context.dismissOnTimeout = 1000;
        context.onClosed.subscribe(() => {
            expect(context.isOpen).toBeFalsy();
            done();
        });
        context.ngOnInit();
    });
    it('should be closed by public method onClose', () => {
        context.ngOnInit();
        expect(context.isOpen).toBeTruthy();
        context.close();
        expect(context.isOpen).toBeFalsy();
    });
});
//# sourceMappingURL=alert.component.spec.js.map