import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import axios from 'axios'
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from './auth/core/Auth.jsx';
import { setupAxios } from './auth/core/AuthHelper.js';


setupAxios(axios);

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <AuthProvider>
        <App/>
      </AuthProvider>
    </BrowserRouter>
)
