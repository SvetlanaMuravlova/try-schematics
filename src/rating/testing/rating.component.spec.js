import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RatingComponent, RatingConfig, RatingModule } from '../index';
let TestRatingComponent = class TestRatingComponent {
    constructor(config) {
        this.max = 5;
        this.rate = 0;
        this.isReadonly = false;
        this.titles = ['one', 'two', 'three', 'four', 'five'];
        Object.assign(this, config);
    }
};
TestRatingComponent = __decorate([
    Component({
        selector: 'rating-test',
        template: ''
    }),
    __metadata("design:paramtypes", [RatingConfig])
], TestRatingComponent);
describe('Component: Rating. Init:', () => {
    let fixture;
    let context;
    let element;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RatingComponent],
            providers: [RatingConfig]
        });
        fixture = TestBed.createComponent(RatingComponent);
        context = fixture.debugElement.componentInstance;
        element = fixture.nativeElement;
        fixture.detectChanges();
    });
    it('checking of working with default values', () => {
        const items = element.querySelectorAll('.sr-only');
        expect(items.length).toEqual(5);
        expect(items[0].innerHTML).toEqual('( )');
        expect(items[4].innerHTML).toEqual('( )');
        expect(items[5]).toBeUndefined();
        const icons = element.querySelectorAll('span.bs-rating-star');
        expect(icons[0].classList).not.toContain('active');
        expect(icons[4].classList).not.toContain('active');
        expect(icons[4].getAttribute('title')).toEqual('5');
        const container = element.querySelector('[role="slider"]');
        const ariaAttribute = container === null || container === void 0 ? void 0 : container.getAttribute('aria-label');
        expect(ariaAttribute).toEqual('rating');
    });
    it('checking of working with changed values', () => {
        context.max = 3;
        context.titles = ['one', 'two', 'new title'];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        context.changeDetection.markForCheck();
        context.ngOnInit();
        fixture.detectChanges();
        const items = element.querySelectorAll('.sr-only');
        expect(items.length).toEqual(3);
        expect(items[0].innerHTML).toEqual('( )');
        expect(items[2].innerHTML).toEqual('( )');
        expect(items[3]).toBeUndefined();
        const icons = element.querySelectorAll('span.bs-rating-star');
        expect(icons[0].classList).not.toContain('active');
        expect(icons[2].getAttribute('title')).toEqual('new title');
    });
});
describe('Component: Rating. Custom template:', () => {
    let fixture;
    let element;
    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
            declarations: [TestRatingComponent],
            imports: [RatingModule.forRoot(), FormsModule]
        });
        TestBed.overrideComponent(TestRatingComponent, {
            set: { template: `
        <rating max="5" [customTemplate]="tt" style="font-size: 32px;"></rating>
  <ng-template #tt let-i="index" let-v="value">
    <span class="label label-{{i < v ? 'warning' : 'default'}}">{{i < v ? '&#9733;' : '&#9734;'}}</span>
  </ng-template>` }
        });
        fixture = TestBed.createComponent(TestRatingComponent);
        element = fixture.nativeElement;
        fixture.detectChanges();
    }));
    it('checking of working with custom icons', () => {
        const icons = element.querySelectorAll('span.bs-rating-star');
        const icon = icons[0].querySelector('span');
        expect(icon === null || icon === void 0 ? void 0 : icon.classList).toContain('label-default');
    });
});
describe('Component: Rating. Clicks:', () => {
    const tpl = `
      <rating [(ngModel)]="rate" [readonly]="isReadonly"
        (onHover)="hoveringOver($event)" (onLeave)="resetStar($event)"
        [titles]="titles"></rating>
    `;
    let fixture;
    let context;
    let element;
    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
            declarations: [TestRatingComponent],
            imports: [RatingModule.forRoot(), FormsModule]
        });
        TestBed.overrideComponent(TestRatingComponent, {
            set: { template: tpl }
        });
        fixture = TestBed.createComponent(TestRatingComponent);
        context = fixture.debugElement.componentInstance;
        element = fixture.nativeElement;
        fixture.detectChanges();
    }));
    it('check simple click', fakeAsync(() => {
        const items = element.querySelectorAll('.sr-only');
        const icons = element.querySelectorAll('span.bs-rating-star');
        expect(items[0].innerHTML).toEqual('( )');
        expect(icons[0].classList).not.toContain('active');
        icons[1].click();
        tick(200);
        fixture.detectChanges();
        expect(items[0].innerHTML).toEqual('(*)');
        expect(icons[0].classList).toContain('active');
    }));
    it('check disabling', fakeAsync(() => {
        const items = element.querySelectorAll('.sr-only');
        const icons = element.querySelectorAll('span.bs-rating-star');
        expect(items[0].innerHTML).toEqual('( )');
        expect(icons[0].classList).not.toContain('active');
        context.isReadonly = true;
        fixture.detectChanges();
        icons[1].click();
        tick(200);
        fixture.detectChanges();
        expect(items[0].innerHTML).toEqual('( )');
        expect(icons[0].classList).not.toContain('active');
        context.isReadonly = false;
        fixture.detectChanges();
        icons[1].click();
        tick(200);
        fixture.detectChanges();
        expect(items[0].innerHTML).toEqual('(*)');
        expect(icons[0].classList).toContain('active');
    }));
});
//# sourceMappingURL=rating.component.spec.js.map