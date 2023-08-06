import express from "express";
import router from "./routers";
import dotenv from "dotenv";
import path from "path";

const envFilePath = path.join(__dirname, "../.env");

// dotenv.config({ path: envFilePath });
dotenv.config();


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.listen(3000, () => {
  console.log("server listening....");
});
