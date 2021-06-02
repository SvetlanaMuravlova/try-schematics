import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let SearchFilterPipe = class SearchFilterPipe {
    transform(value, text) {
        if (!text) {
            return value;
        }
        const items = value;
        const newItems = [];
        items.forEach(function (item) {
            if (item.data[0].toLowerCase().indexOf(text.toLowerCase()) !== -1) {
                newItems.push(item);
            }
        });
        return newItems;
    }
};
SearchFilterPipe = __decorate([
    Pipe({ name: 'SearchFilter' })
], SearchFilterPipe);
export { SearchFilterPipe };
//# sourceMappingURL=search-filter.pipe.js.map