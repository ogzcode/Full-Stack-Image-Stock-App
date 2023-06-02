import { User } from "../model/User.js";
import { __dirname } from "../app.js";
import fs from "fs";

export const getUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user.user_id });
        //tüm kullanıcı verilerini göndermeye gerek yok
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
        const user = await User.findOne({ _id: req.user.user_id });
        let imageName = req.file.originalname;

        if (!user.images.includes(imageName)) {
            user.images.push(imageName);
            await user.save();
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

        res.status(200).json({
            images: user.images
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
        const user = await User.findOne({ _id: req.user.user_id });

        const deletedImage = __dirname + "/public/uploads/" + user.images[req.body.index];

        if (deletedImage && (user.images.length === 1)) {
            fs.unlinkSync(deletedImage);
        }

        user.images.splice(req.body.index, 1);
        console.log(user.images);
        await user.save();

        console.log("hehlo");
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