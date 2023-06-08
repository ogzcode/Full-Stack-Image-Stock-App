import jwt from "jsonwebtoken";

import { User } from "../model/User.js";

export const registerController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const oldUser = await User.findOne({ email: email });

        if (oldUser) {
            return res.status(409).send({ message: "User Already Exist. Please Login" });
        }

        const user = await User.create({ email, password });

        const token = jwt.sign(
            { user_id: user.id, email: email },
            "RANDOM-TOKEN",
            {
                expiresIn: "1h",
            }
        );

        user.token = token;
        await user.save();

        res.status(201).json({ message: "User created ", token });
    }
    catch (error) {
        res.status(400).json({
            message: "Bad request",
            error
        });
    }
}

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "Email and password not found!! Please register." });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: "Unauthorized"});
        }

        const token = jwt.sign(
            {
                user_id: user.id,
                email: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "1h" }
        );

        res.status(200).send({
            message: "Login Successful",
            token,
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Bad request",
            error
        });
    }
};
