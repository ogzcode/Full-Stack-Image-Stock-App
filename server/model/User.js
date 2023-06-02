import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    images: [String],
    token: {
        type: String,
        unique: true
    }
});

export const User = mongoose.model("User", UserSchema);
