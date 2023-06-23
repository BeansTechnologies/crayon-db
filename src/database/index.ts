import { DatabaseContext, DatabaseItem } from "../types";
import { document } from "./documents";

export function defineDatabase<T extends DatabaseItem>(
  name: string
): DatabaseContext<T> {
  return {
    name,
    document: document,
  };
}
