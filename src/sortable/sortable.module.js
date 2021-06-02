var SortableModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortableComponent } from './sortable.component';
import { DraggableItemService } from './draggable-item.service';
let SortableModule = SortableModule_1 = class SortableModule {
    static forRoot() {
        return { ngModule: SortableModule_1, providers: [DraggableItemService] };
    }
};
SortableModule = SortableModule_1 = __decorate([
    NgModule({
        declarations: [SortableComponent],
        imports: [CommonModule],
        exports: [SortableComponent]
    })
], SortableModule);
export { SortableModule };
//# sourceMappingURL=sortable.module.js.map