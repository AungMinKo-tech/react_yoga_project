import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Phone, Mail, MoreVertical } from "lucide-react";
import DropdownMenuDialog from "../../../components/DropDownCustom.jsx";

const TrainersList = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const dropDownRoutes = [
    { name: "View Trainer Videos", to: "/admin/trainers/:id/videos" },
    {
      name: "View Trainer Details",
      to: "/admin/trainers/:id",
      textColor: "text-red-600",
    },
    {
      name: "Delete Trainer",
      onClick: () => alert("Delete Trainer"),
      textColor: "text-red-600",
    },
  ];
  const trainers = [
    {
      id: 1,
      name: "Hun",
      role: "Yoga Instructor",
      image: null,
      phone: "+95 9123456789",
      email: "hun@gym.com",
    },
    {
      id: 2,
      name: "Ni",
      role: "Astrology Trainer",
      image: null,
      phone: "+95 9123456789",
      email: "ni@gym.com",
    },
    {
      id: 3,
      name: "Bin",
      role: "Counselor",
      image: null,
      phone: "+95 9123456789",
      email: "bin@gym.com",
    },
    {
      id: 4,
      name: "Tom",
      role: "Life Coach",
      image: null,
      phone: "+95 9123456789",
      email: "tom@gym.com",
    },
    {
      id: 5,
      name: "Joh",
      role: "Therapist",
      image: null,
      phone: "+95 9123456789",
      email: "joh@gym.com",
    },
    {
      id: 6,
      name: "Bob",
      role: "Fitness Trainer",
      image: null,
      phone: "+95 9123456789",
      email: "bob@gym.com",
    },
    {
      id: 7,
      name: "Lod",
      role: "Nurse",
      image: null,
      phone: "+95 9123456789",
      email: "lod@gym.com",
    },
    {
      id: 8,
      name: "Ange",
      role: "Energy Healer",
      image: null,
      phone: "+95 9123456789",
      email: "ange@gym.com",
    },
    {
      id: 9,
      name: "Tikk",
      role: "Doctor",
      image: null,
      phone: "+95 9123456789",
      email: "tikk@gym.com",
    },
    {
      id: 10,
      name: "Sun",
      role: "Dancer",
      image: null,
      phone: "+95 9123456789",
      email: "sun@gym.com",
    },
    {
      id: 11,
      name: "Moon",
      role: "Psychologist",
      image: null,
      phone: "+95 9123456789",
      email: "moon@gym.com",
    },
    {
      id: 12,
      name: "Water",
      role: "Customer Service",
      image: null,
      phone: "+95 9123456789",
      email: "water@gym.com",
    },
  ];

  const filteredTrainers = trainers.filter(
    (trainer) =>
      trainer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trainer.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTrainerClick = (trainerId) => {
    navigate(`/admin/trainers/${trainerId}`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Trainers</h1>
        <p className="text-gray-600 mt-1">
          Manage your gym trainers and instructors
        </p>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search trainers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="name">Name A-Z</option>
        </select>

        <button
          onClick={() => navigate("/admin/trainers/add")}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium whitespace-nowrap"
        >
          + New Trainer
        </button>
      </div>

      {/* Trainers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredTrainers.map((trainer) => (
          <div
            key={trainer.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group"
            onClick={() => handleTrainerClick(trainer.id)}
          >
            {/* Card Header with Menu */}
            <div className="relative">
              <div
                className="absolute top-3 right-3"
                onClick={(e) => e.stopPropagation()}
              >
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
            </div>

            {/* Profile Image */}
            <div className="flex justify-center pt-8 pb-4">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                {trainer.name.charAt(0).toUpperCase()}
              </div>
            </div>

            {/* Trainer Info */}
            <div className="text-center px-4 pb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                {trainer.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{trainer.role}</p>

              {/* Contact Actions */}
              <div className="flex justify-center gap-3">
                <a
                  href={`tel:${trainer.phone}`}
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors"
                  title="Call"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${trainer.email}`}
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">
          Previous
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
          1
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          2
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          3
        </button>
        <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          Next
        </button>
      </div>

      {/* Results Count */}
      <p className="text-center text-gray-600 mt-4">
        Showing 1-5 from {filteredTrainers.length} data
      </p>
    </div>
  );
};

export default TrainersList;
