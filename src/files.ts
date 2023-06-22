import fs from "fs"
import {getFilePath} from "./utils";

export function parseDBFile() {
    const path = getFilePath()
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, "")
    }
    const fileContent = fs.readFileSync(path, "utf-8")

    if (!fileContent) {
        fs.writeFileSync(path, JSON.stringify({
            schemas: []
        }))
    }

    return JSON.parse(fs.readFileSync(path, "utf-8"))
}