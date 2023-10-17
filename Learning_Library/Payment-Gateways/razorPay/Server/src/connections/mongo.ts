import mongoose from "mongoose";
import { config } from "../config";

export async function mongoConnection() {
    const { MONGO_URL } = config()
    try {
        await mongoose.connect(`${MONGO_URL}`);
        console.log(`---- mongoConnection :: connected :: `, MONGO_URL)

    } catch (error) {
        console.log(`----- mongoConnection :: ERROR :: `, error)
    }
} 