import axios from "axios";

const API_URL = "http://localhost:3000/api";

const LOGIN_URL = `${API_URL}/login`;
const REGISTER_URL = `${API_URL}/register`;
const GET_USER = `${API_URL}/auth/user`;

const UPLOAD_IMAGE = `${API_URL}/auth/upload-image`
const GET_ALL_IMAGE = `${API_URL}/auth/getAllImage`
const GET_IMAGE_BY_TAG = `${API_URL}/auth/getByTag`
const DELETE_IMAGE = `${API_URL}/auth/deleteImage`

export const login = async (email, password) => {
    return await axios.post(LOGIN_URL, {
        email, password
    });
};

export const register = (email, password) => {
    return axios.post(REGISTER_URL, {
        email, password
    });
};

export const getUserByToken = (token) => {
    return axios.post(GET_USER, {
        token
    });
};


export const uploadImage = (title, file, tags) => {
    const formData = new FormData();

    formData.append("image", file);
    formData.append("title", title);
    formData.append("tags", tags);

    return axios.post(UPLOAD_IMAGE, formData, {
        headers: {"Content-Type": "multipart/form-data"},
        transformRequest: formData => formData
    });
};

export const getAllImage = () => {
    return axios.get(GET_ALL_IMAGE);
}

export const getImageByTag = (tag) => {
    return axios.post(GET_IMAGE_BY_TAG, {
        tags: tag
    });
};

export const deleteImage = (id, name) => {
    return axios.delete(`${DELETE_IMAGE}/${id}/?name=${name}`);
}