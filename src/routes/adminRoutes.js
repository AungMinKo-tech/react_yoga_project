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

{/* Admin routes with sidebar layout */ }
export const adminRoutes = (

    <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="appointments" element={<AppointmentList />} />
        <Route path="payments" element={<AdminPaymentList />} />

        {/* members routes */}
        <Route path="members">
            <Route index element={<Members />} />
        </Route>

        {/* trainers routes */}
        <Route path="trainers">
            <Route index element={<TrainersList />} />
            <Route path=":id" element={<TrainerDetail />} />
            <Route path=":id/videos" element={<TrainerVideos />} />
        </Route>

        {/* detox-food routes */}
        <Route path="detox-food">
            <Route path="view/:item_id" element={<ViewDetoxFood />} />
            <Route path=":user_id/lists" element={<ListDetoxFood />} />
        </Route>

        {/* Tabbed admin add routes (use AdminTabLayout) */}
        <Route element={<AdminTabLayout />}>
            <Route path="trainers/videos/upload" element={<VideoUpload />} />
            <Route path="trainers/add" element={<AddNewTrainer />} />
            <Route path="members/add" element={<AddNewMember />} />
            <Route path="detox-food/create" element={<CreateDetoxFood />} />
        </Route>
    </Route>
);