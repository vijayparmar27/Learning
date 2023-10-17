import express from "express";
import { config } from "../config";
import router from "../routers";
import cors from "cors"

const app = express();

const { PORT } = config()

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/", router)

app.listen(PORT, () => {
    console.log(`----- server is running on PORT :: ${PORT}`)
})