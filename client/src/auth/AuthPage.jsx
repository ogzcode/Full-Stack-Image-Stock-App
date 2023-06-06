import { Routes, Route } from "react-router-dom";

import LoginPage from "./component/LoginPage";
import SignupPage from "./component/SignupPage";
import ErrorPage from "../error/ErrorPage";

export default function AuthPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route index element={<LoginPage />} />
                <Route path="/*" element={<ErrorPage/>}/>
            </Routes>
        </div>
    );
}