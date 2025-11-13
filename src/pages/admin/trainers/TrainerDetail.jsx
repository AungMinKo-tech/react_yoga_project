import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Search,
  MapPin,
  Phone,
  Mail,
  MoreVertical,
  Calendar,
  Clock,
  Play,
  ArrowLeft,
} from "lucide-react";
import DropdownMenuDialog from "../../../components/DropDownCustom.jsx";

const TrainerDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dropDownRoutes = [
    { name: "View Trainer Videos", to: "/admin/trainers/:id/videos" },
  ];
  const trainer = {
    id: 1,
    name: "Billi",
    role: "Trainer",
    location: "Jakarta, Indonesia",
    phone: "+12 345 6789 0",
    email: "Historia@mail.com",
    image: null,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    education: [
      { degree: "Energy Healer", years: "2013-2017" },
      { degree: "Master of Psychology", years: "2017-2020" },
    ],
    expertise: ["Energy Healing", "Sound Healing", "Crystal Healing", "Yoga"],
    schedules: [
      {
        id: 1,
        title: "Yoga",
        level: "Beginner",
        date: "March 20, 2026",
        time: "08:00 - 10:00 AM",
        color: "purple",
      },
      {
        id: 2,
        title: "Unlearn to Zero",
        type: "Video Upload",
        date: "March 20, 2026",
        time: "08:00 - 10:00 AM",
        color: "red",
      },
      {
        id: 3,
        title: "Serene Love",
        type: "Video Shooting",
        date: "March 20, 2026",
        time: "08:00 - 10:00 AM",
        color: "yellow",
      },
      {
        id: 4,
        title: "Meditation",
        class: "Class VII-C",
        date: "March 20, 2026",
        time: "08:00 - 10:00 AM",
        color: "green",
      },
    ],
  };

  const colorClasses = {
    purple: "border-l-purple-500 bg-purple-50",
    red: "border-l-red-500 bg-red-50",
    yellow: "border-l-yellow-500 bg-yellow-50",
    green: "border-l-green-600 bg-green-50",
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => navigate("/admin/trainers")}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Trainers</span>
      </button>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Trainer Details</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search here..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent w-64"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Trainer Info */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Profile Header with Cover */}
            <div className="relative h-40 bg-gradient-to-r from-green-600 via-yellow-500 to-orange-500">
              <div className="absolute top-4 right-6 text-white text-2xl font-bold">
                <DropdownMenuDialog
                  className="z-10"
                  items={dropDownRoutes.map((routes) => ({
                    ...routes,
                    to: routes.to
                      ? routes.to.replace(":id", trainer.id)
                      : undefined,
                  }))}
                />
              </div>
              {/* <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                <MoreVertical className="w-5 h-5 text-gray-600" />
              </button> */}
            </div>

            {/* Profile Picture */}
            <div className="relative px-6 pb-6">
              <div className="absolute -top-16 w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-4 border-white flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                {trainer.name.charAt(0).toUpperCase()}
              </div>

              {/* Trainer Info */}
              <div className="pt-20">
                <h2 className="text-2xl font-bold text-gray-800">
                  {trainer.name}
                </h2>
                <p className="text-gray-600 mb-4">{trainer.role}</p>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="p-2 bg-red-100 rounded-full">
                      <MapPin className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-sm">{trainer.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="p-2 bg-red-100 rounded-full">
                      <Phone className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-sm">{trainer.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="p-2 bg-red-100 rounded-full">
                      <Mail className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-sm">{trainer.email}</span>
                  </div>
                </div>

                {/* About Section */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    About:
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {trainer.about}
                  </p>
                </div>

                {/* Education Section */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    Education:
                  </h3>
                  <ul className="space-y-3">
                    {trainer.education.map((edu, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-gray-800 rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium text-gray-800">
                            {edu.degree}
                          </p>
                          <p className="text-sm text-gray-500">{edu.years}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expertise Section */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Expertise:
                  </h3>
                  <p className="text-gray-600">
                    {trainer.expertise.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Schedule */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-1">
              Schedule Details
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Thursday, 10th April, 2026
            </p>

            <div className="space-y-4">
              {trainer.schedules.map((schedule) => (
                <div
                  key={schedule.id}
                  className={`border-l-4 rounded-lg p-4 ${
                    colorClasses[schedule.color]
                  } hover:shadow-md transition-shadow cursor-pointer`}
                >
                  <h4 className="font-bold text-gray-800 mb-1">
                    {schedule.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {schedule.level || schedule.type || schedule.class}
                  </p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{schedule.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{schedule.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate(`/admin/trainers/${id}/videos`)}
              className="w-full mt-6 py-3 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors font-medium"
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerDetail;
