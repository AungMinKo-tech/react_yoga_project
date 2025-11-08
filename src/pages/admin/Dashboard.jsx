import {
  Users,
  UserCheck,
  Calendar,
  Utensils,
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  CreditCard,
} from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [currentMonth, setCurrentMonth] = useState("Jan 2026");

  const stats = [
    {
      label: "Members",
      value: "932",
      icon: <Users size={24} />,
      bgColor: "bg-green-600",
      iconBg: "bg-green-700",
    },
    {
      label: "Trainers",
      value: "754",
      icon: <UserCheck size={24} />,
      bgColor: "bg-orange-500",
      iconBg: "bg-orange-600",
    },
    {
      label: "Events",
      value: "40",
      icon: <Calendar size={24} />,
      bgColor: "bg-yellow-500",
      iconBg: "bg-yellow-600",
    },
    {
      label: "Foods",
      value: "32k",
      icon: <Utensils size={24} />,
      bgColor: "bg-green-700",
      iconBg: "bg-green-800",
    },
  ];

  const memberships = [
    {
      id: 1,
      letter: "A",
      phone: "ID 123456789",
      status: "Subscription day left",
      amount: "$ 50,038",
      active: true,
    },
    {
      id: 2,
      letter: "B",
      phone: "ID 123456789",
      status: "",
      amount: "$ 50,038",
      active: true,
    },
    {
      id: 3,
      letter: "J",
      phone: "ID 123456789",
      status: "",
      amount: "$ 50,038",
      active: false,
    },
    {
      id: 4,
      letter: "K",
      phone: "ID 123456789",
      status: "",
      amount: "$ 50,038",
      active: true,
    },
    {
      id: 5,
      letter: "N",
      phone: "ID 123456789",
      status: "",
      amount: "$ 50,038",
      active: true,
    },
  ];

  // Calendar data
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const calendarDays = [
    [31, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, 1, 2, 3],
  ];

  const specialDays = {
    8: { color: "bg-green-600", isSpecial: true },
    23: { color: "bg-orange-500", isSpecial: true },
    20: { color: "bg-yellow-500", isSpecial: true },
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
          Dashboard
        </h1>
        <div className="relative w-full sm:w-auto">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <div className={`${stat.bgColor} p-4 rounded-full text-white`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* HRR Calendar */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-800">HRR Calendar</h2>
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800">
              <span>{currentMonth}</span>
              <ChevronDown size={16} />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="space-y-2">
            {/* Days of Week */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {daysOfWeek.map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-medium text-gray-600 py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            {calendarDays.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-cols-7 gap-2">
                {week.map((day, dayIndex) => {
                  const isCurrentMonth =
                    !(weekIndex === 0 && day > 20) &&
                    !(weekIndex === 4 && day < 10);
                  const special = specialDays[day];

                  return (
                    <div
                      key={dayIndex}
                      className={`aspect-square flex items-center justify-center text-sm rounded-lg cursor-pointer transition-colors
                        ${
                          !isCurrentMonth
                            ? "text-gray-300"
                            : "text-gray-700 hover:bg-gray-100"
                        }
                        ${
                          special
                            ? `${special.color} text-white hover:opacity-90`
                            : ""
                        }
                      `}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Membership */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-6">Membership</h2>

          {/* Membership List */}
          <div className="space-y-4 mb-6">
            {memberships.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {member.letter}
                  </div>
                  <div>
                    <p className="text-sm text-green-600 font-medium">
                      {member.phone}
                    </p>
                    {member.status && (
                      <p className="text-xs text-gray-500">{member.status}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-gray-800">
                    {member.amount}
                  </span>
                  <button
                    className={`p-2 rounded-full ${
                      member.active ? "bg-gray-100" : "bg-gray-50"
                    }`}
                  >
                    <CreditCard
                      size={16}
                      className={
                        member.active ? "text-gray-600" : "text-gray-400"
                      }
                    />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <MoreVertical size={16} className="text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between pt-4 border-t">
            <p className="text-sm text-gray-600">
              Showing <span className="font-medium">1-5</span> from{" "}
              <span className="font-medium">100</span> data
            </p>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ChevronLeft size={20} className="text-gray-600" />
              </button>
              <button className="w-8 h-8 bg-green-600 text-white rounded-lg font-medium">
                1
              </button>
              <button className="w-8 h-8 hover:bg-gray-100 rounded-lg font-medium text-gray-600">
                2
              </button>
              <button className="w-8 h-8 hover:bg-gray-100 rounded-lg font-medium text-gray-600">
                3
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
