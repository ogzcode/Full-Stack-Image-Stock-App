import { Routes, Outlet, Route, Navigate } from "react-router-dom";
import "./App.css";

import { useAuth } from "./auth/core/Auth";

import AuthPage from "./auth/AuthPage";
import Profile from "./component/Profile";
import ErrorPage from "./error/ErrorPage";
import { useEffect, useRef } from "react";

import { getUserByToken } from "./auth/core/request";


function App() {
  const { auth, logout, setCurrentUser } = useAuth();
  const { currentUser } = useAuth();
  const didRequest = useRef(false);

  useEffect(() => {
    const requestUser = async (token) => {
      try {
        if (!didRequest.current) {
          const user = await getUserByToken(token);
          setCurrentUser(user);
        }
      }
      catch (error) {
        console.log(error);
        if (!didRequest.current) {
          logout();
        }
      }

      return () => (didRequest.current = true);
    }

    if (auth) {
      requestUser(auth);
    }
    else {
      logout();
    }

  }, []);

  return (
    <div className="main-container min-h-screen min-w-full z-0 bg-cover bg-no-repeat bg-fixed">
      <Outlet />

      <Routes>
        {
          currentUser ?
            (
              <>
                <Route index path="profile/*" element={<Profile/>} />
                <Route index path="*" element={<Navigate to="/profile" />} />
              </>
            )
            : (
              <>
                <Route path="auth/*" element={<AuthPage />} />
                <Route path="*" element={<Navigate to="/auth/login" />} />
              </>
            )
        }
      </Routes>
    </div>
  );
}

export default App;
