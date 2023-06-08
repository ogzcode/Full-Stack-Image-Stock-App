import multer from "multer";

export const docMiddleware = multer({
    storage: multer.diskStorage({
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        },
        destination: (req, file, cb) => {
            cb(null, "public");
        }
    })
});