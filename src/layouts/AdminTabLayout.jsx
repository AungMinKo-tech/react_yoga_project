import React from "react";
import { NavLink, Outlet } from "react-router-dom";

// AdminTabLayout: renders a top tab bar and an Outlet for nested admin routes
export default function AdminTabLayout() {
  const tabs = [
    { label: "Add Trainer", to: "/admin/trainers/add" },
    { label: "Add Member", to: "/admin/members/add" },
    { label: "Add Video", to: "/admin/trainers/videos/upload" },
    { label: "Add Food", to: "/admin/detox-food/create" },
  ];

  return (
    <div className="flex flex-col">
      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-gray-200">
        {tabs.map((t) => (
          <NavLink
            key={t.to}
            to={t.to}
            className={({ isActive }) =>
              `px-4 py-2 font-medium rounded-t-lg ${
                isActive
                  ? "text-white bg-admin_bg_color"
                  : "text-gray-600 hover:text-gray-800"
              }`
            }
          >
            {t.label}
          </NavLink>
        ))}
      </div>

      {/* Outlet renders the nested route content for the active tab */}
      <div className="pt-4">
        <Outlet />
      </div>
    </div>
  );
}
