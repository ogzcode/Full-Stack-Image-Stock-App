import axios from "axios";

const API_URL = "http://localhost:3000/api";

const LOGIN_URL = `${API_URL}/login`;
const REGISTER_URL = `${API_URL}/register`;
const GET_USER = `${API_URL}/auth/user`;

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