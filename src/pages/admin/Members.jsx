import {
  Search,
  ChevronDown,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import DropdownMenuDialog from "../../components/DropDownCustom.jsx";

const Members = () => {
  const [selectedMembers, setSelectedMembers] = useState([]);

  // Use a template with :id which will be replaced per-row
  const dropDownRoutes = [
    { name: "View Detox Food", to: "/admin/detox-food/:id/lists" },
    { name: "Edit User Detail", onClick: () => alert("Edit User Detail") },
  ];

  const members = [
    {
      id: 1,
      name: "Naron William",
      phone: "#12345789",
      date: "March 25, 2025",
      country: "Germany",
      level: "VIP",
      avatar: "G",
    },
    {
      id: 2,
      name: "James Kevin",
      phone: "#12345789",
      date: "March 25, 2025",
      country: "Hermland",
      level: "Premium",
      avatar: "H",
    },
    {
      id: 3,
      name: "John Hope",
      phone: "#12345789",
      date: "March 26, 2025",
      country: "USA",
      level: "VIP",
      avatar: "I",
    },
    {
      id: 4,
      name: "Annanda Roo",
      phone: "#12345789",
      date: "March 28, 2025",
      country: "Austria",
      level: "Premium",
      avatar: "J",
    },
    {
      id: 5,
      name: "Jack Ajin",
      phone: "#12345789",
      date: "March 28, 2025",
      country: "Australia",
      level: "VIP",
      avatar: "K",
    },
    {
      id: 6,
      name: "Danny Ahmed",
      phone: "#12345789",
      date: "March 29, 2025",
      country: "Spain",
      level: "Premium",
      avatar: "L",
    },
  ];

  const toggleSelectAll = () => {
    if (selectedMembers.length === members.length) {
      setSelectedMembers([]);
    } else {
      setSelectedMembers(members.map((m) => m.id));
    }
  };

  const toggleSelectMember = (id) => {
    if (selectedMembers.includes(id)) {
      setSelectedMembers(selectedMembers.filter((m) => m !== id));
    } else {
      setSelectedMembers([...selectedMembers, id]);
    }
  };

  const getLevelColor = (level) => {
    return level === "VIP" ? "bg-orange-500" : "bg-yellow-500";
  };

  const getAvatarColor = (index) => {
    const colors = [
      "bg-green-600",
      "bg-green-700",
      "bg-green-800",
      "bg-green-600",
      "bg-green-700",
      "bg-green-800",
    ];
    return colors[index % colors.length];
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
          Members
        </h1>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors">
            <span>Newest</span>
            <ChevronDown size={16} />
          </button>
          <NavLink
            to="/admin/members/add"
            className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            <span>+</span>
            <span>New Member</span>
          </NavLink>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Members Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left">
                  <input
                    type="checkbox"
                    checked={selectedMembers.length === members.length}
                    onChange={toggleSelectAll}
                    className="rounded border-gray-300"
                  />
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  #
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Nick Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Country
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Contact
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Level
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {members.map((member, index) => (
                <tr
                  key={member.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedMembers.includes(member.id)}
                      onChange={() => toggleSelectMember(member.id)}
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 ${getAvatarColor(
                          index
                        )} rounded-full flex items-center justify-center text-white font-semibold`}
                      >
                        {member.avatar}
                      </div>
                      <Mail className="text-yellow-600" size={18} />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-orange-600 font-medium">
                    {member.phone}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {member.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {member.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {member.country}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <Phone size={18} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <Mail size={18} className="text-gray-600" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-4 py-1.5 ${getLevelColor(
                        member.level
                      )} text-white text-sm rounded-full font-medium`}
                    >
                      {member.level}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <DropdownMenuDialog
                      className="z-10"
                      items={dropDownRoutes.map((routes) => ({
                        ...routes,
                        to: routes.to
                          ? routes.to.replace(":id", member.id)
                          : undefined,
                      }))}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="border-t px-6 py-4 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing <span className="font-medium">1-6</span> from{" "}
            <span className="font-medium">100</span>
          </p>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button className="w-8 h-8 bg-orange-500 text-white rounded-lg font-medium">
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
  );
};

export default Members;
