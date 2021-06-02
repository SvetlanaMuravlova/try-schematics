import { __decorate, __metadata } from "tslib";
import { TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, ViewChild } from '@angular/core';
import { DatePickerComponent } from '../datepicker.component';
import { DatepickerModule } from '../datepicker.module';
let TestComponent = class TestComponent {
    ngOnInit() {
        this.datepicker.writeValue(new Date());
    }
};
__decorate([
    ViewChild(DatePickerComponent, { static: true }),
    __metadata("design:type", DatePickerComponent)
], TestComponent.prototype, "datepicker", void 0);
TestComponent = __decorate([
    Component({
        selector: 'test-cmp',
        template: `<datepicker></datepicker>`
    })
], TestComponent);
describe('datepicker:', () => {
    let fixture;
    beforeEach(waitForAsync(() => TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [
            DatepickerModule.forRoot(),
            BrowserAnimationsModule
        ]
    }).compileComponents()));
    it('should not throw undefined reference error when initializing value before content init hook', () => {
        expect(() => {
            fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
        }).not.toThrowError(/^.*undefined.*$/gm);
    });
});
//# sourceMappingURL=datepicker.component.spec.js.map