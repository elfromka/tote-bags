import { Schema, model } from "mongoose";
import UserInterface from "./../interfaces/User";

const userSchema = new Schema<UserInterface>(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const User = model<UserInterface>("User", userSchema);

export default User;
