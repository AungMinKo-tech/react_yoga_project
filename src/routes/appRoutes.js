import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";


import MainLayout from "../layouts/MainLayout.jsx";      
import AdminLayout from "../layouts/AdminLayout.jsx";     
import AccountTemplate from "../pages/AccountCreation/AccountTemplate.jsx";

import { publicRoutes } from "./publicRoutes.js";
import { authRoutes } from "./authRoutes.js";
import { adminRoutes } from "./adminRoutes.js";

import { useAuth } from "../context/AuthContext.jsx";

export const AppRoutes = () => {
    const { isLoading, isAuthenticated, user, role } = useAuth();

    if(isLoading){
        return <div>Loading...</div>;
    }

    // Helper function to create the JSX for a nested route
    const renderNestedRoutes = (routes) => (
        routes.map((route, index) => (
            <Route 
                key={route.path || index}
                path={route.path}
                element={route.element}
            />
        ))
    );
    return (
        <Routes>
            <Route element={<MainLayout />}>
                {renderNestedRoutes(publicRoutes)}
            </Route>
            <Route element={
                isAuthenticated && role === 1
                ? <AdminLayout />
                : <Navigate to="/login" replace />
            }>
                {renderNestedRoutes(adminRoutes)}
            </Route>
            <Route element={
                !isAuthenticated
                ? <AccountTemplate />
                : <Navigate to="/" replace />
            }>
                {renderNestedRoutes(authRoutes)}
            </Route>
           
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
} 