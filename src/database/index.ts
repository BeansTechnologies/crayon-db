import {DatabaseContext, DatabaseItem, DatabaseSchema} from "../types";
import {addSchema, getSchema, loadSchemas} from "./schema";
import {document} from "./documents";

export function defineDatabase<T extends DatabaseItem>(name: string): DatabaseContext<T> {
    const schemas: DatabaseContext<T>["schemas"] = loadSchemas();

    return {
        name,
        schemas,
        defineSchema: (schema: DatabaseSchema<T>) => addSchema(schema),
        document: (schema: DatabaseSchema<T>, id: string) => document(schema, id)
    }
}
