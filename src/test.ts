import {defineDatabase} from "./database";

const db = defineDatabase("test")

console.log(db)

db.defineSchema({
    name: "test",
    items: [],
})

