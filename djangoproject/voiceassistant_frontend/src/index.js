import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

import AuthProvider from './components/auth/AuthProvider'
import AuthenticatedOnly from './components/auth/AuthenticatedOnly';
import GuestOnly from './components/auth/GuestOnly';

import HomePage from './components/homepage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
