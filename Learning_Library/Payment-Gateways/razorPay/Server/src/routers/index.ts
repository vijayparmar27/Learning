import express from "express";
import { addCash } from "../controllers/razorPay.controller";
import { registerUser } from "../controllers/user.controller";

const router = express.Router();

router.get("/test", (req: any, res: any) => {
    res.send("OK...")
})

router.post("/addCash", addCash);

router.post("/userRegister", registerUser);

export default router;