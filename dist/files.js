"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDBFile = void 0;
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("./utils");
function parseDBFile() {
    const path = (0, utils_1.getFilePath)();
    if (!fs_1.default.existsSync(path)) {
        fs_1.default.writeFileSync(path, "");
    }
    const fileContent = fs_1.default.readFileSync(path, "utf-8");
    if (!fileContent) {
        fs_1.default.writeFileSync(path, JSON.stringify({
            data: [],
        }));
    }
    return JSON.parse(fs_1.default.readFileSync(path, "utf-8"));
}
exports.parseDBFile = parseDBFile;
//# sourceMappingURL=files.js.map