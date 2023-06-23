"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineDatabase = void 0;
const documents_1 = require("./documents");
function defineDatabase(name) {
    return {
        name,
        document: documents_1.document,
    };
}
exports.defineDatabase = defineDatabase;
//# sourceMappingURL=index.js.map