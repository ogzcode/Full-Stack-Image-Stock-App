import { User } from "../model/User.js";
import { __dirname } from "../app.js";
import fs from "fs";
import { Image } from "../model/Image.js";

export const getUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user.user_id });
        res.status(200).json({ user, images: user.images });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Bad request",
            error
        })
    }
};

export const uploadImage = async (req, res) => {
    try {
        const { title, tags } = req.body;
        const tagsArray = tags.split(",");
        const name = req.file.originalname;
        const user = await User.findOne({ _id: req.user.user_id });

        if (user && !(await Image.findOne({ name: name }))) {
            const now = new Date();
            const image = await Image.create({ name, title, user: user._id, time: now.toLocaleDateString(), tags: [...tagsArray] });
            image.save();
        }

        res.status(201).send("Image uploaded");
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Bad request",
            error
        })
    }
}

export const getAllImage = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user.user_id });
        const images = await Image.find({ user: user._id });

        res.status(200).json({
            images
        });
    }
    catch {
        console.log(error);
        res.status(400).json({
            message: "Bad request",
            error
        });
    }
};


export const deleteImage = async (req, res) => {
    try {
        const { name } = req.query;
        const { id } = req.params;

        const images = await Image.find({ name });
        await Image.findByIdAndDelete({ _id: id });

        const deletedImage = __dirname + "/public/" + name;

        if (deletedImage && (images.length === 1)) {
            fs.unlinkSync(deletedImage);
        }

        res.status(204).send("Image deleted");
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Bad request",
            error
        });
    }
}

export const getByTag = async (req, res) => {
    try {
        const tags = req.body.tags;
        const images = await Image.find({ tags: { $in: [tags] } });
        res.status(200).send(images);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Bad request",
            error
        });
    }
};