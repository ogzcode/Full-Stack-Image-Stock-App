import { createContext, useContext, useState } from "react";
import { getAuth, setAuth, removeAuth } from "./AuthHelper.js";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [auth, setAuthState] = useState(getAuth());
    const [currentUser, setCurrentUser] = useState();
    const [error, setError] = useState("");
    
    const saveAuth = (auth) => {
        console.log("Auth 13", auth);
        if (auth) {
             setAuth(auth);
        }
        else {
            removeAuth(auth);
        }
    };

    const logout = () => {
        saveAuth(undefined);
        setCurrentUser(undefined);
    };

    return (
        <AuthContext.Provider value={{ auth, saveAuth, currentUser, setCurrentUser, logout, error, setError }}>
            { children }
        </AuthContext.Provider>
    );

}

export { AuthProvider, useAuth };
