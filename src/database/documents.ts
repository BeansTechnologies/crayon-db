import {DatabaseItem, DatabaseSchema} from "../types";
import {addSchema} from "./schema";
import {parseDBFile} from "../files";

export function document<T extends DatabaseItem>(schema: DatabaseSchema<T>, id: string) {
    const parsedFile = parseDBFile()
    const data = parsedFile.data[schema.name] || []

    return {
        add: (item: T) => {
            data.push(item)
        },
        remove: (item: T) => {

        },
        update: (item: T) => {

        },
        get: (key: string) => {

        }
    }
}