import React from "react";
import { Outlet } from "react-router";
const AccountTemplate = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-poppins ">
      {/* Main Content */}
      <div className="flex flex-1">
        {/* Right Side - Image */}
        <div className="w-1/2 hidden lg:flex items-center justify-center mb-5 ml-10">
          <img
            src="/assets/home2.png"
            alt="Healing Resort"
            className="object-cover rounded-full"
          />
        </div>
        {/* Left Side - Sign Up Form */}
        <Outlet />
      </div>
    </div>
  );
};

export default AccountTemplate;
