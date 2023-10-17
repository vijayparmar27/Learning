import mongoose, { Schema, Model } from "mongoose";
import { userModelIf } from "../interfaces/user.interface";

const userSchema: Schema<userModelIf> = new Schema({
    name: {
        type: String
    },
    username: {
        type: String
    },
    balance: {
        type: Number,
        default: 0
    },
    phoneNo: {
        type: Number,
        minlength: 10,
        maxlength: 10
    },

})

const UserModel: Model<userModelIf> = mongoose.model<userModelIf>("users", userSchema);

export = UserModel;