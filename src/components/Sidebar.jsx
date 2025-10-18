import { Link, useLocation } from "react-router-dom";
import { Home, Users, UserCheck, Calendar, BookOpen, Utensils, Settings, Video } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <Home size={20} /> },
    { name: "Members", path: "/members", icon: <Users size={20} /> },
    { name: "Trainers", path: "/trainers", icon: <UserCheck size={20} /> },
    { name: "Event", path: "/event", icon: <Calendar size={20} /> },
    { name: "Card Reading", path: "/card", icon: <BookOpen size={20} /> },
    { name: "Food", path: "/food", icon: <Utensils size={20} /> },
    { name: "Admin", path: "/admin", icon: <Settings size={20} /> },
    { name: "Trainers Videos", path: "/videos", icon: <Video size={20} /> },
  ];

  return (
    <div className="bg-green-900 text-white w-64 min-h-screen flex flex-col justify-between fixed">
      <div>
        <div className="p-6 text-center border-b border-green-700">
          <img src="/assets/logo1.png" alt="Logo" className="mx-auto mb-2 h-16 w-16" />
          <h3 className="text-lg font-semibold text-white">Unlock Wealth Resort</h3>
        </div>
        <ul className="mt-6 space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-6 py-3 transition-all duration-200 ${location.pathname === item.path
                  ? "bg-white text-black rounded-l-full"
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
  );
};

export default Sidebar;