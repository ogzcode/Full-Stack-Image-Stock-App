import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { getUserByToken, login } from "../core/request.js";
import { useAuth } from "../core/Auth";

import Alert from "../../error/Alert.jsx";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { saveAuth, setCurrentUser, setError, error } = useAuth();

    useEffect(() => {
        if (error) {
            let timer = setTimeout(() => {
                setError("");
            }, 1500)

            return () => clearInterval(timer);
        }
    }, [error]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const auth = await login(email, password);
            saveAuth(auth.data.token);
            const user = await getUserByToken(auth.data.token);
            setCurrentUser(user);
            navigate("/profile");
        }
        catch (error) {
            console.log(error);
            saveAuth(undefined);
            setError(error.response.data.message);
        }

        setEmail("");
        setPassword("");
    };

    return (
        <div className="flex min-h-full flex-col justify-center lg:px-8 bg-white/20 p-16 rounded-lg">
            {
                error && <Alert/>
            }
            
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
                    Login your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full outline-0 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full outline-0 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-white">
                    Don't have an account?{' '}
                    <Link to="/auth/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Try to signup
                    </Link>
                </p>
            </div>
        </div>
    );
}