expect.extend({
    toHaveCssClass(received, className) {
        const isNot = this.isNot;
        const orNot = isNot ? 'not' : '';
        const pass = received.classList.contains(className);
        return {
            pass,
            message: () => `Expected ${received.outerHTML} ${orNot} to contain the CSS class "${className}"`
        };
    }
});
export {};
//# sourceMappingURL=toHaveCssClass.js.map