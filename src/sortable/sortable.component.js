var SortableComponent_1;
import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter, forwardRef, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DraggableItemService } from './draggable-item.service';
let SortableComponent = SortableComponent_1 = class SortableComponent {
    constructor(transfer) {
        /** class name for items wrapper */
        this.wrapperClass = '';
        /** style object for items wrapper */
        this.wrapperStyle = {};
        /** class name for item */
        this.itemClass = '';
        /** style object for item */
        this.itemStyle = {};
        /** class name for active item */
        this.itemActiveClass = '';
        /** style object for active item */
        this.itemActiveStyle = {};
        /** class name for placeholder */
        this.placeholderClass = '';
        /** style object for placeholder */
        this.placeholderStyle = {};
        /** placeholder item which will be shown if collection is empty */
        this.placeholderItem = '';
        /** fired on array change (reordering, insert, remove), same as <code>ngModelChange</code>.
         *  Returns new items collection as a payload.
         */
        this.onChange = new EventEmitter();
        this.showPlaceholder = false;
        this.activeItem = -1;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.onTouched = Function.prototype;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.onChanged = Function.prototype;
        this._items = [];
        this.transfer = transfer;
        this.currentZoneIndex = SortableComponent_1.globalZoneIndex++;
        this.transfer
            .onCaptureItem()
            .subscribe((item) => this.onDrop(item));
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
        const out = this.items.map((x) => x.initData);
        this.onChanged(out);
        this.onChange.emit(out);
    }
    onItemDragstart(event, item, i) {
        this.initDragstartEvent(event);
        this.onTouched();
        this.transfer.dragStart({
            event,
            item,
            i,
            initialIndex: i,
            lastZoneIndex: this.currentZoneIndex,
            overZoneIndex: this.currentZoneIndex
        });
    }
    onItemDragover(event, i) {
        if (!this.transfer.getItem()) {
            return;
        }
        event.preventDefault();
        const dragItem = this.transfer.captureItem(this.currentZoneIndex, this.items.length);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let newArray = [];
        if (!dragItem) {
            return;
        }
        if (!this.items.length) {
            newArray = [dragItem.item];
        }
        else if (dragItem.i > i) {
            newArray = [
                ...this.items.slice(0, i),
                dragItem.item,
                ...this.items.slice(i, dragItem.i),
                ...this.items.slice(dragItem.i + 1)
            ];
        }
        else {
            // this.draggedItem.i < i
            newArray = [
                ...this.items.slice(0, dragItem.i),
                ...this.items.slice(dragItem.i + 1, i + 1),
                dragItem.item,
                ...this.items.slice(i + 1)
            ];
        }
        this.items = newArray;
        dragItem.i = i;
        this.activeItem = i;
        this.updatePlaceholderState();
    }
    cancelEvent(event) {
        if (!this.transfer.getItem() || !event) {
            return;
        }
        event.preventDefault();
    }
    onDrop(item) {
        if (item &&
            item.overZoneIndex !== this.currentZoneIndex &&
            item.lastZoneIndex === this.currentZoneIndex) {
            this.items = this.items.filter((x, i) => i !== item.i);
            this.updatePlaceholderState();
        }
        this.resetActiveItem();
    }
    resetActiveItem(event) {
        this.cancelEvent(event);
        this.activeItem = -1;
    }
    registerOnChange(callback) {
        this.onChanged = callback;
    }
    registerOnTouched(callback) {
        this.onTouched = callback;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    writeValue(value) {
        if (value) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.items = value.map((x, i) => ({
                id: i,
                initData: x,
                value: this.fieldName ? x[this.fieldName] : x
            }));
        }
        else {
            this.items = [];
        }
        this.updatePlaceholderState();
    }
    updatePlaceholderState() {
        this.showPlaceholder = !this._items.length;
    }
    getItemStyle(isActive) {
        return isActive
            ? Object.assign({}, this.itemStyle, this.itemActiveStyle)
            : this.itemStyle;
    }
    initDragstartEvent(event) {
        var _a;
        // it is necessary for mozilla
        // data type should be 'Text' instead of 'text/plain' to keep compatibility
        // with IE
        (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData('Text', 'placeholder');
    }
};
SortableComponent.globalZoneIndex = 0;
__decorate([
    Input(),
    __metadata("design:type", String)
], SortableComponent.prototype, "fieldName", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SortableComponent.prototype, "wrapperClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SortableComponent.prototype, "wrapperStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SortableComponent.prototype, "itemClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SortableComponent.prototype, "itemStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SortableComponent.prototype, "itemActiveClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SortableComponent.prototype, "itemActiveStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SortableComponent.prototype, "placeholderClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SortableComponent.prototype, "placeholderStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SortableComponent.prototype, "placeholderItem", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], SortableComponent.prototype, "itemTemplate", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SortableComponent.prototype, "onChange", void 0);
SortableComponent = SortableComponent_1 = __decorate([
    Component({
        selector: 'bs-sortable',
        exportAs: 'bs-sortable',
        template: `
<div
    [ngClass]="wrapperClass"
    [ngStyle]="wrapperStyle"
    (dragover)="cancelEvent($event)"
    (dragenter)="cancelEvent($event)"
    (drop)="resetActiveItem($event)"
    (mouseleave)="resetActiveItem($event)">
  <div
        *ngIf="showPlaceholder"
        [ngClass]="placeholderClass"
        [ngStyle]="placeholderStyle"
        (dragover)="onItemDragover($event, 0)"
        (dragenter)="cancelEvent($event)"
    >{{placeholderItem}}</div>
    <div
        *ngFor="let item of items; let i=index;"
        [ngClass]="[ itemClass, i === activeItem ? itemActiveClass : '' ]"
        [ngStyle]="getItemStyle(i === activeItem)"
        draggable="true"
        (dragstart)="onItemDragstart($event, item, i)"
        (dragend)="resetActiveItem($event)"
        (dragover)="onItemDragover($event, i)"
        (dragenter)="cancelEvent($event)"
        aria-dropeffect="move"
        [attr.aria-grabbed]="i === activeItem"
    ><ng-template [ngTemplateOutlet]="itemTemplate || defItemTemplate"
  [ngTemplateOutletContext]="{item:item, index: i}"></ng-template></div>
</div>

<ng-template #defItemTemplate let-item="item">{{item.value}}</ng-template>
`,
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SortableComponent_1),
                multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [DraggableItemService])
], SortableComponent);
export { SortableComponent };
//# sourceMappingURL=sortable.component.js.map