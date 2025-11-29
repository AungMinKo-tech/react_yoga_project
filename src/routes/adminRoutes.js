import React from 'react';
import { Route } from 'react-router-dom';

import AdminLayout from "../layouts/AdminLayout.jsx";
import AdminTabLayout from "../layouts/AdminTabLayout.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

// Admin pages
import Dashboard from "../pages/admin/Dashboard.jsx";
import Members from "../pages/admin/Members.jsx";
import AddNewMember from "../pages/admin/Trainers.jsx";

//  detox food pages
import CreateDetoxFood from "../pages/admin/detox-food/CreateDetoxFood.jsx";
import ViewDetoxFood from "../pages/admin/detox-food/ViewDetoxFood.jsx";
import ListDetoxFood from "../pages/admin/detox-food/ListDetoxFood.jsx";

// trainer pages
import TrainersList from "../pages/admin/trainers/TrainersList.jsx";
import TrainerDetail from "../pages/admin/trainers/TrainerDetail.jsx";
import TrainerVideos from "../pages/admin/trainers/TrainerVideos.jsx";
import AddNewTrainer from "../pages/admin/trainers/AddNewTrainer.jsx";
import VideoUpload from "../pages/admin/trainers/VideoUpload.jsx";

import AppointmentList from "../pages/admin/AppointmentList.jsx";
import AdminPaymentList from "../pages/admin/AdminPaymentList.jsx";

// const withAdminLayout = (Component) =>{
//     return(
//         <AdminLayout>
//             <Component />
//         </AdminLayout>
//         );
// }

// const withAdminTabLayout = (Component) =>{
//     return(
//         <AdminTabLayout>
//             <Component />
//         </AdminTabLayout>
//         );
// }

{/* Admin routes with sidebar layout */ }
export const adminRoutes = [

    {
        path: '/admin',
        element:  <Dashboard />
    },
    {
        path: "/admin/appointments",
        element: <AppointmentList />
    },
    {
        path: "/admin/payments",
        element: <AdminPaymentList />
    },
    // members routes
    {
        path: "/admin/members",
        element: <Members />
    },
    // trainers routes
    {
        path: "/admin/trainers",
        element: <TrainersList />
    },
    {
        path: "/admin/trainers/:id",
        element: <TrainerDetail />
    },
    {
        path: "/admin/trainers/:id/videos",
        element: <TrainerVideos />
    },
    // detox-food routes
    {
        path: "/admin/detox-food/view/:item_id",
        element: <ViewDetoxFood />
    },
    {
        path: "/admin/detox-food/:user_id/lists",
        element: <ListDetoxFood />
    },
    // Tabbed admin add routes (use AdminTabLayout)
    {
        path: "/admin/trainers/videos/upload",
        element: <VideoUpload />
    },
    {
        path: "/admin/trainers/add",
        element: <AddNewTrainer />
    },
    {
        path: "/admin/members/add",
        element: <AddNewMember />
    },
    {
        path: "/admin/detox-food/create",
        element: <CreateDetoxFood />
    }
];