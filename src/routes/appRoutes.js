import React from "react";
import { Routes } from "react-router-dom";

import { publicRoutes } from "./publicRoutes.js";
import { authRoutes } from "./authRoutes.js";
import { adminRoutes } from "./adminRoutes.js";

export const AppRoutes = () => {
    return (
        <Routes>
            {publicRoutes}
            {adminRoutes}
            {authRoutes}
        </Routes>
    );
} 