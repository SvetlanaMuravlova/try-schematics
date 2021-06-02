var ThemeStorage_1;
import { __decorate } from "tslib";
// Copyright (c) 2017 Google, Inc.
import { EventEmitter, Injectable } from '@angular/core';
let ThemeStorage = ThemeStorage_1 = class ThemeStorage {
    constructor() {
        this.onThemeUpdate = new EventEmitter();
    }
    storeTheme(theme) {
        try {
            window.localStorage[ThemeStorage_1.storageKey] = theme;
        }
        catch (e) {
            return null;
        }
        this.onThemeUpdate.emit(theme);
    }
    getStoredTheme() {
        try {
            return window.localStorage[ThemeStorage_1.storageKey] || null;
        }
        catch (e) {
            return null;
        }
    }
    clearStorage() {
        try {
            window.localStorage.removeItem(ThemeStorage_1.storageKey);
        }
        catch (e) {
            return null;
        }
    }
};
ThemeStorage.storageKey = 'bs-theme-storage-current';
ThemeStorage = ThemeStorage_1 = __decorate([
    Injectable()
], ThemeStorage);
export { ThemeStorage };
//# sourceMappingURL=theme-storage.js.map