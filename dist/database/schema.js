"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSchema = exports.addSchema = exports.loadSchemas = void 0;
const utils_1 = require("../utils");
const fs_1 = __importDefault(require("fs"));
const files_1 = require("../files");
function loadSchemas() {
    const parsedFile = (0, files_1.parseDBFile)();
    if (!parsedFile.schemas) {
        utils_1.log.error("No schemas found in database file");
    }
    return parsedFile.schemas;
}
exports.loadSchemas = loadSchemas;
function addSchema(schema) {
    const parsedFile = (0, files_1.parseDBFile)();
    if (!parsedFile.schemas) {
        parsedFile.schemas = [];
    }
    else {
        if (parsedFile.schemas.find((s) => s.name === schema.name)) {
            const index = parsedFile.schemas.findIndex((s) => s.name === schema.name);
            parsedFile.schemas[index] = schema;
        }
        else {
            parsedFile.schemas.push(schema);
        }
    }
    fs_1.default.writeFileSync((0, utils_1.getFilePath)(), JSON.stringify(parsedFile, null, 4));
}
exports.addSchema = addSchema;
function getSchema(name) {
    const schemas = loadSchemas();
    return schemas.find((s) => s.name === name);
}
exports.getSchema = getSchema;
//# sourceMappingURL=schema.js.map