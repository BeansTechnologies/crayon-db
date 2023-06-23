"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilePath = exports.log = void 0;
const prime_console_1 = require("prime-console");
const path_1 = __importDefault(require("path"));
exports.log = new prime_console_1.Logger({
    logLevel: 5,
    format: "[🖍️] [%t] %d %m",
});
const getFilePath = () => {
    return path_1.default.join(process.cwd(), "crayon-db.json");
};
exports.getFilePath = getFilePath;
//# sourceMappingURL=utils.js.map