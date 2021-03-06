import { window } from './facade/browser';
let guessedVersion;
function _guessBsVersion() {
    if (typeof document === 'undefined') {
        return 'bs4';
    }
    const spanEl = document.createElement('span');
    spanEl.innerText = 'testing bs version';
    document.body.appendChild(spanEl);
    spanEl.classList.add('d-none');
    const rect = spanEl.getBoundingClientRect();
    document.body.removeChild(spanEl);
    if (!rect) {
        return 'bs3';
    }
    return rect.top === 0 ? 'bs4' : 'bs3';
}
export function setTheme(theme) {
    guessedVersion = theme;
}
// todo: in ngx-bootstrap, bs4 will became a default one
export function isBs3() {
    if (typeof window === 'undefined') {
        return true;
    }
    if (typeof window.__theme === 'undefined') {
        if (guessedVersion) {
            return guessedVersion === 'bs3';
        }
        guessedVersion = _guessBsVersion();
        return guessedVersion === 'bs3';
    }
    return window.__theme !== 'bs4';
}
//# sourceMappingURL=theme-provider.js.map