import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 lg:ml-64 p-4 lg:p-8">
        <div className="mt-12 lg:mt-0">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
