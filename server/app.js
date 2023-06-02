import express from "express";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from "mongoose";

import { docMiddleware } from "./middleware/docMiddleware.js";
import { authMiddleWare } from "./middleware/authMiddleware.js";
import { registerController } from "./controllers/authControllers.js";
import { loginController } from "./controllers/authControllers.js";
import { deleteImage, getAllImage, getUser, uploadImage } from "./controllers/userControllers.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

mongoose.connect('mongodb://127.0.0.1:27017/image-stock')
    .then(() => console.log('Connected!'));

app.use(express.static("public"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
    res.send("This is test ;)");
});

app.post("/api/register", registerController);
app.post("/api/login", loginController);

app.get("/api/auth/user", authMiddleWare, getUser);
app.post("/api/auth/upload-image", authMiddleWare, docMiddleware.single("image"), uploadImage);
app.get("/api/auth/getAllImage", authMiddleWare, getAllImage);
app.delete("/api/auth/deleteImage", authMiddleWare, deleteImage);

app.listen(3000, () => {
    console.log("Sunucu: http://localhost:3000/");
});