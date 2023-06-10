export const AUTH_LOCAL_STORAGE_KEY = "image_stock_key";

export const getAuth = () => {
    const lsValue = localStorage.getItem(AUTH_LOCAL_STORAGE_KEY);

    if (!lsValue) {
        return
    }

    try {
        const auth = JSON.parse(lsValue);

        if (auth) {
            return auth;
        }
    }
    catch (error) {
        console.log("AUTH LOCAL STORAGE PARSE ERROR", error);
    }
};

export const setAuth = (auth) => {
    try {
        const lsValue = JSON.stringify(auth);
        localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, lsValue);
    }
    catch (error) {
        console.log("AUTH LOCAL STORAGE SAVE ERROR", error);
    }
}

export const removeAuth = () => {
    try {
        localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY);
    }
    catch (error) {
        console.log("AUTH LOCALE STORAGE REMOVE ERROR", error);
    }
};

export const setupAxios = (axios) => {
    axios.defaults.headers.Accept = "application/json";

    axios.interceptors.request.use(
        (config) => {
            const auth = getAuth();
            if (auth) {
                config.headers.Authorization = `Bearer ${auth}`;
            }

            return config;
        },
        (err) => Promise.reject(err)
    )
}
