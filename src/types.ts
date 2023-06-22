export type DatabaseValue = string | number | boolean | object | null | undefined;

export interface DatabaseItem {
    key: string;
    value: DatabaseValue;
    required?: boolean;
    unique?: boolean;
    timestamp?: boolean;
}

export interface DatabaseSchema<T> {
    name: string;
    items: T[];
}

export interface DatabaseContext<T extends DatabaseItem = DatabaseItem> {
    name: string;
    schemas: DatabaseSchema<T>[];
    defineSchema: (schema: DatabaseSchema<T>) => void;
    document: (schema: DatabaseSchema<T>, id: string) => Document<T>;
}

export interface Document<T extends DatabaseItem = DatabaseItem> {
    id: string;
    items: T[];
    add: (item: T) => void;
    remove: (item: T) => void;
    update: (item: T) => void;
    get: (key: string) => T | undefined;
}