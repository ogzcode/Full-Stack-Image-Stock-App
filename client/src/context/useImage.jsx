import { createContext, useContext, useState } from "react";

import { getAllImage, getImageByTag } from "../auth/core/request.js";

const ImageContext = createContext();

export const useImage = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
    const [images, setImages] = useState([]);

    const getImage = async () => {
        try {
            const imgList = await getAllImage();
            if (images.length === 0 || imgList.data.images.length !== images.length) {
                setImages(imgList.data.images);
            }
        }
        catch (error) {
            console.log("useImage (getImage)", error);
        }
    };

    return (
        <ImageContext.Provider value={{ images, setImages, getImage }}>
            {children}
        </ImageContext.Provider>
    );
};