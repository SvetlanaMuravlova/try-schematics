import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { fakeAsync, inject, TestBed } from '@angular/core/testing';
import { DraggableItemService } from '../index';
let TestComponent = class TestComponent {
};
TestComponent = __decorate([
    Component({
        template: `<h1>Test</h1>`
    })
], TestComponent);
describe('Service: DraggableItem', () => {
    let transfer;
    let draggableItem;
    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent],
            providers: [DraggableItemService]
        }).createComponent(TestComponent);
    }));
    beforeEach(inject([DraggableItemService], (service) => {
        draggableItem = getDraggableItem(getItemToDrag(), undefined, 1);
        transfer = service;
        transfer.dragStart(draggableItem);
    }));
    it('should return draggable item', () => {
        // arrange
        // act
        const item = transfer.getItem();
        // assert
        expect(item).toBe(draggableItem);
    });
    it('should fire onCapture if item was captured by another zone', () => {
        // arrange
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const spy = spyOn(transfer.onCaptureItem(), 'next');
        // act
        transfer.captureItem(2, 0);
        // assert
        expect(spy).toHaveBeenCalledWith(draggableItem);
    });
    it('should NOT fire onCapture if item was captured by the same zone', () => {
        // arrange
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const spy = spyOn(transfer.onCaptureItem(), 'next');
        // act
        transfer.captureItem(1, 0);
        // assert
        expect(spy).not.toHaveBeenCalled();
    });
    function getItemToDrag() {
        return { id: 0, value: 'item text', initData: 'item text' };
    }
    function getDraggableItem(sortableItem, dragEvent, zone) {
        return {
            event: dragEvent,
            item: sortableItem,
            i: 0,
            initialIndex: 0,
            lastZoneIndex: zone,
            overZoneIndex: zone
        };
    }
});
//# sourceMappingURL=draggable-item.service.spec.js.map