/**
 * :D
 */
export class NgApiDoc {
}
export function signature(method) {
    const args = method.args
        .map((arg) => `${arg.name}: ${arg.type}`)
        .join(', ');
    return `${method.name}(${args})`;
}
//# sourceMappingURL=api-docs.model.js.map