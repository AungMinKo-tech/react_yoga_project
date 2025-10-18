// import { Route, Router, Routes } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const Admin = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome to the admin area. You can add your components and content here.
        </p>
      </main>
    </div>
  );
};

export default Admin;