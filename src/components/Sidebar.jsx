import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  UserCheck,
  Calendar,
  BookOpen,
  Utensils,
  Settings,
  Video,
  Menu,
  X,
  UserPlus,
  UserCog,
  Receipt,
} from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: <Home size={20} /> },
    {
      name: "Trainers",
      path: "/admin/trainers",
      icon: <UserCheck size={20} />,
    },
    { name: "Members", path: "/admin/members", icon: <Users size={20} /> },
    {
      name: "Add Trainer",
      path: "/admin/trainers/add",
      icon: <UserCog size={20} />,
    },
    {
      name: "Add Member",
      path: "/admin/members/add",
      icon: <UserPlus size={20} />,
    },

    {
      name: "Add Trainer Video",
      path: "/admin/trainers/videos/upload",
      icon: <Video size={20} />,
    },
    {
      name: "Add Detox Food",
      path: "/admin/detox-food/create",
      icon: <Utensils size={20} />,
    },

    {
      name: "Appointments",
      path: "/admin/appointments",
      icon: <Calendar size={20} />,
    },
    {
      name: "Payments",
      path: "/admin/payments",
      icon: <Receipt size={20} />,
    },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-green-900 text-white p-2 rounded-md shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`bg-green-900 text-white w-64 min-h-screen flex flex-col justify-between fixed z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div>
          <div className="p-6 text-center border-b border-green-700">
            <img
              src="/assets/logo1.png"
              alt="Logo"
              className="mx-auto mb-2 h-16 w-16"
            />
            <h3 className="text-lg font-semibold text-white">
              Unlock Wealth Resort
            </h3>
          </div>
          <ul className="mt-6 space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-6 py-3 transition-all duration-200 ${
                    location.pathname === item.path
                      ? "bg-white text-green-900 rounded-l-full font-semibold"
                      : "text-gray-300 hover:bg-green-800 hover:text-white"
                  }`}
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 text-center text-xs text-gray-400 border-t border-green-700">
          <p>Helen Healing Resort</p>
          <p>
            Made with <span className="text-red-500">❤️</span> by Helen
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
