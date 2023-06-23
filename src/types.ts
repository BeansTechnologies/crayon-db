export type DatabaseValue = {
  [key: string]: any;
};

export interface DatabaseItem {
  value: DatabaseValue;
  timestamp?: boolean | number;
}

export interface DatabaseContext<T extends DatabaseItem = DatabaseItem> {
  name: string;
  document: () => Document<T>;
}

export interface Document<T extends DatabaseItem = DatabaseItem> {
  add: (name: string, object: T) => T[] | undefined | void;
  remove: (id: string) => void;
  update: (id: string, object: T) => void;
  find: (id: string, populate?: string[]) => T | undefined | void;
  findByName: (name: string, populate?: string[]) => T[] | undefined | void;
  removeByName: (name: string) => T[] | undefined | void;
}
