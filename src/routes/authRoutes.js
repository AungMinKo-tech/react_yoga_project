// src/routes/RoleProtectedRoute.js
import React from 'react';
import { Route } from 'react-router-dom';

import AccountTemplate from "../pages/AccountCreation/AccountTemplate.jsx";
import Login from "../pages/AccountCreation/Login.jsx";
import Register from "../pages/AccountCreation/Register.jsx";
import CreateNewPassword from "../pages/AccountCreation/CreateNewPassword.jsx";
import ForgotPassword from "../pages/AccountCreation/ForgotPassword.jsx";
import OTPVerificcation from "../pages/AccountCreation/OTPVerificcation.jsx";

export const authRoutes =(
  <Route path="" element={<AccountTemplate />}>
    <Route path="/signin" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/verify-otp" element={<OTPVerificcation />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/create-new-password" element={<CreateNewPassword />} />
  </Route>
);
