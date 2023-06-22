import {Logger} from "prime-console";
import path from "path"

export const log = new Logger({
    logLevel: 5,
    format: "[🖍️] [%t] %d %m",
})

export const getFilePath = () => {
    return path.join(process.cwd(), "crayon-db.json");
}