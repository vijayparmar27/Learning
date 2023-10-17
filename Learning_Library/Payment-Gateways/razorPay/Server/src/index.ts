import "./connections/server"
import { mongoConnection } from "./connections/mongo";

(async () => {
    await mongoConnection()
})()