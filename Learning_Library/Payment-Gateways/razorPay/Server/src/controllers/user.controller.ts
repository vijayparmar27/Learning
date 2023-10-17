import { Request, Response } from "express"
import { userRegisterReqIf } from "../interfaces/user.interface";
import MongoService from "../servers/mongodb.service"
import UserModel from "../models/user.model";

export async function registerUser(req: Request, res: Response) {
    try {

        const { username, name, phoneNo } = req.body as userRegisterReqIf;

        if (!username || !name || !phoneNo) {
            res.json({
                error: false,
                success: false,
                message: "fill all fields.",
                data: {}
            })
        }

        const resData = await MongoService.create(UserModel, {
            insert: {
                name,
                username,
                phoneNo
            }
        });

        res.send(resData);

    } catch (error) {
        console.log(`------ registerUser :: ERROR :: `, error);
        throw error;
    }
}