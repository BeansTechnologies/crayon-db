import {DatabaseItem, DatabaseSchema} from "../types";
import {getFilePath, log} from "../utils";
import fs from "fs"
import {parseDBFile} from "../files";

export function loadSchemas<T extends DatabaseItem>(): DatabaseSchema<T>[] {
    const parsedFile = parseDBFile()

    if (!parsedFile.schemas) {
        log.error("No schemas found in database file")
    }

    return parsedFile.schemas
}

export function addSchema<T extends DatabaseItem>(schema: DatabaseSchema<T>) {
    const parsedFile = parseDBFile()

    if (!parsedFile.schemas) {
        parsedFile.schemas = []
    } else {
        if (parsedFile.schemas.find((s: DatabaseSchema<T>) => s.name === schema.name)) {
            const index = parsedFile.schemas.findIndex((s: DatabaseSchema<T>) => s.name === schema.name)
            parsedFile.schemas[index] = schema
        } else {
            parsedFile.schemas.push(schema)
        }
    }

    fs.writeFileSync(getFilePath(), JSON.stringify(parsedFile, null, 4))
}

export function getSchema<T extends DatabaseItem>(name: string): DatabaseSchema<T> {
    const schemas = loadSchemas<T>()
    return schemas.find((s: DatabaseSchema<T>) => s.name === name) as DatabaseSchema<T>
}