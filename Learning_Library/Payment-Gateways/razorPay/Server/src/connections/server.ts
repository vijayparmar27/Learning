import express from "express";
import { config } from "../config";
import router from "../routers";
import cors from "cors"
import { errorMiddleware } from "../middlewares/responceApi.middleware";

const app = express();

const { PORT } = config()

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`----- server is running on PORT :: ${PORT}`)
})