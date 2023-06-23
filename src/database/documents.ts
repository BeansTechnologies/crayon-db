import { DatabaseItem, Document } from "../types";
import { parseDBFile } from "../files";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import { getFilePath } from "../utils";

export function document<T extends DatabaseItem>(): Document<T> {
  const parsedFile = parseDBFile();

  return {
    add: (name: string, object: T) => {
      if (!parsedFile.data) parsedFile.data = [];
      if (object.timestamp) object.timestamp = Date.now();
      let id = uuidv4();
      parsedFile.data.push({
        id,
        ...object,
        name,
      });

      fs.writeFileSync(getFilePath(), JSON.stringify(parsedFile));

      return parsedFile.data.filter((item: any) => item.id === id);
    },

    remove: (id: string) => {
      if (!parsedFile.data) return;

      parsedFile.data = parsedFile.data.filter((item: any) => item.id !== id);

      fs.writeFileSync(getFilePath(), JSON.stringify(parsedFile));
    },

    update: (id: string, object: T) => {
      if (!parsedFile.data) return;

      const obj = parsedFile.data.findIndex((item: any) => item.id === id);

      parsedFile.data[obj] = object;
      fs.writeFileSync(getFilePath(), JSON.stringify(parsedFile));

      return parsedFile.data[obj];
    },

    find: (id: string, populate?: string[]) => {
      if (!parsedFile.data) return;

      const obj = parsedFile.data.find((item: any) => item.id === id);

      if (populate) {
        for (let i = 0; i < populate.length; i++) {
          obj.value[populate[i]]
            ? (obj.value[populate[i]] = parsedFile.data.find(
                (e: any) => e.id === obj.value[populate[i]]
              ))
            : null;
        }
      }

      return obj;
    },
    findByName: (name: string, populate?: string[]) => {
      if (!parsedFile.data) return;

      const obj = parsedFile.data.filter((item: any) => item.name === name);

      if (populate) {
        obj.forEach((item: any) => {
          for (let i = 0; i < populate.length; i++) {
            item.value[populate[i]]
              ? (item.value[populate[i]] = parsedFile.data.find(
                  (e: any) => e.id === item.value[populate[i]]
                ))
              : null;
          }
        });
      }

      return obj;
    },
    removeByName: (name: string) => {
      if (!parsedFile.data) return;

      parsedFile.data = parsedFile.data.filter(
        (item: any) => item.name !== name
      );

      fs.writeFileSync(getFilePath(), JSON.stringify(parsedFile));

      return parsedFile.data;
    },
  };
}
