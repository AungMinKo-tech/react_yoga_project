// src/routes/RoleProtectedRoute.js
import React from 'react';
import { Route } from 'react-router-dom';

import AccountTemplate from "../pages/AccountCreation/AccountTemplate.jsx";
import Login from "../pages/AccountCreation/Login.jsx";
import Register from "../pages/AccountCreation/Register.jsx";
import CreateNewPassword from "../pages/AccountCreation/CreateNewPassword.jsx";
import ForgotPassword from "../pages/AccountCreation/ForgotPassword.jsx";
import OTPVerificcation from "../pages/AccountCreation/OTPVerificcation.jsx";

// const withAccountLayout = (Component) =>{
//     return(
//         <AccountTemplate>
//             <Component />
//         </AccountTemplate>
//     );
// }

export const authRoutes =[
  {
    path: '/signin',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/verify-otp',
    element: <OTPVerificcation />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/create-new-password',
    element: <CreateNewPassword />
  }
];
