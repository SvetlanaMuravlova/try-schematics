import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
/**
 * Class for managing stylesheets. Stylesheets are loaded into named slots so
 * that they can be removed or changed later.
 */
let StyleManager = class StyleManager {
    /**
     * Set the stylesheet with the specified key.
     */
    setStyle(key, href) {
        const linkElement = getLinkElementForKey(key);
        if (!linkElement) {
            return;
        }
        linkElement.setAttribute('href', href);
    }
    /**
     * Remove the stylesheet with the specified key.
     */
    removeStyle(key) {
        const existingLinkElement = getExistingLinkElementByKey(key);
        if (!existingLinkElement || !document.head) {
            return;
        }
        document.head.removeChild(existingLinkElement);
    }
};
StyleManager = __decorate([
    Injectable()
], StyleManager);
export { StyleManager };
function getLinkElementForKey(key) {
    return getExistingLinkElementByKey(key) || createLinkElementWithKey(key);
}
function getExistingLinkElementByKey(key) {
    if (!document.head) {
        return;
    }
    return document.head.querySelector(`link[rel="stylesheet"].${getClassNameForKey(key)}`);
}
function createLinkElementWithKey(key) {
    const linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.classList.add(getClassNameForKey(key));
    if (!document.head) {
        return;
    }
    document.head.appendChild(linkEl);
    return linkEl;
}
function getClassNameForKey(key) {
    return `style-manager-${key}`;
}
//# sourceMappingURL=style-manager.js.map