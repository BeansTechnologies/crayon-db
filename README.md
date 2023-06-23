# `crayon-db`

File system database.

## Instalation

```bash
npm install crayon-db
```

## Usage

```typescript
import { defineDatabase } from "crayon-db";

const db = defineDatabase("test");

const doc = db.document().add("users", {
  value: {
    string: "string",
    nnumber: 123,
    bulion: true,
    objekt: {
      object: true,
    },
    arr: [12, 2, 3],
    user: "629871ff-c557-4d9d-9453-0e849d5a6f0e",
  },
  timestamp: true,
});

console.log(doc);

const document = db.document().find("e998c128-30c8-4361-9bac-f987b6b29193", ["user"] <--- fields to populate);

console.log(document);

const updatedDocument = db
  .document()
  .update("e998c128-30c8-4361-9bac-f987b6b29193", {
    value: {
      test: "test",
    },
  });

console.log(updatedDocument);

const documentByName = db.document().findByName("users", ["user"] <--- fields to populate);
console.log(documentByName);

const removeDocuments = db.document().removeByName("users");
console.log(removeDocuments);

const removeDocument = db.document().remove("e998c128-30c8-4361-9bac-f987b6b29193");
console.log(removeDocument);
```

## Authors

- [@malezjaa](https://www.github.com/malezjaa)

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://malezjaa.me/)

## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

![GitHub Sponsors](https://img.shields.io/github/sponsors/malezjaa)
