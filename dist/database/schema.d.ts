import { DatabaseItem, DatabaseSchema } from "../types";
export declare function loadSchemas<T extends DatabaseItem>(): DatabaseSchema<T>[];
export declare function addSchema<T extends DatabaseItem>(schema: DatabaseSchema<T>): void;
export declare function getSchema<T extends DatabaseItem>(name: string): DatabaseSchema<T>;
//# sourceMappingURL=schema.d.ts.map