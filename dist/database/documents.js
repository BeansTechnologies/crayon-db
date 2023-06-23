"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = void 0;
const files_1 = require("../files");
const uuid_1 = require("uuid");
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("../utils");
function document() {
    const parsedFile = (0, files_1.parseDBFile)();
    return {
        add: (name, object) => {
            if (!parsedFile.data)
                parsedFile.data = [];
            if (object.timestamp)
                object.timestamp = Date.now();
            let id = (0, uuid_1.v4)();
            parsedFile.data.push({
                id,
                ...object,
                name,
            });
            fs_1.default.writeFileSync((0, utils_1.getFilePath)(), JSON.stringify(parsedFile));
            return parsedFile.data.filter((item) => item.id === id);
        },
        remove: (id) => {
            if (!parsedFile.data)
                return;
            parsedFile.data = parsedFile.data.filter((item) => item.id !== id);
            fs_1.default.writeFileSync((0, utils_1.getFilePath)(), JSON.stringify(parsedFile));
        },
        update: (id, object) => {
            if (!parsedFile.data)
                return;
            const obj = parsedFile.data.findIndex((item) => item.id === id);
            parsedFile.data[obj] = object;
            fs_1.default.writeFileSync((0, utils_1.getFilePath)(), JSON.stringify(parsedFile));
            return parsedFile.data[obj];
        },
        find: (id, populate) => {
            if (!parsedFile.data)
                return;
            const obj = parsedFile.data.find((item) => item.id === id);
            if (populate) {
                for (let i = 0; i < populate.length; i++) {
                    obj.value[populate[i]]
                        ? (obj.value[populate[i]] = parsedFile.data.find((e) => e.id === obj.value[populate[i]]))
                        : null;
                }
            }
            return obj;
        },
        findByName: (name, populate) => {
            if (!parsedFile.data)
                return;
            const obj = parsedFile.data.filter((item) => item.name === name);
            if (populate) {
                obj.forEach((item) => {
                    for (let i = 0; i < populate.length; i++) {
                        item.value[populate[i]]
                            ? (item.value[populate[i]] = parsedFile.data.find((e) => e.id === item.value[populate[i]]))
                            : null;
                    }
                });
            }
            return obj;
        },
        removeByName: (name) => {
            if (!parsedFile.data)
                return;
            parsedFile.data = parsedFile.data.filter((item) => item.name !== name);
            fs_1.default.writeFileSync((0, utils_1.getFilePath)(), JSON.stringify(parsedFile));
            return parsedFile.data;
        },
    };
}
exports.document = document;
//# sourceMappingURL=documents.js.map