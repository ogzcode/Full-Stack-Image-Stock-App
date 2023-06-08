import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    time: {
        type: String,
        required: true
    },
    tags: [String]
});

export const Image = mongoose.model("Image", ImageSchema);