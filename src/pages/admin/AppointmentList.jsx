import React, { useState } from "react";
import {
  Search,
  Calendar,
  Clock,
  Edit,
  Trash2,
  Filter,
  Download,
  Plus,
} from "lucide-react";

const AppointmentList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showApprovalModal, setShowApprovalModal] = useState(false);

  // Sample data - Backend မှ fetch လုပ်ရမည်
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      clientName: "Helene Wealth",
      email: "helenewealth@gmail.com",
      date: "January 06, 2026",
      time: "08:00 AM",
      service: "Free Consultation",
      status: "pending",
      trainer: "Hun - Yoga Instructor",
      phone: "+95 9123456789",
      notes: "First time client, interested in yoga basics",
    },
    {
      id: 2,
      clientName: "Frank Smith",
      email: "helenewealth@gmail.com",
      date: "January 06, 2026",
      time: "08:00 AM",
      service: "Free Consultation",
      status: "pending",
      trainer: "Joh - Fitness Trainer",
      phone: "+95 9123456789",
      notes: "Weight loss consultation",
    },
    {
      id: 3,
      clientName: "Will Smith",
      email: "helenewealth@gmail.com",
      date: "January 06, 2026",
      time: "08:00 AM",
      service: "Free Consultation",
      status: "approved",
      trainer: "Bob - Fitness Trainer",
      phone: "+95 9123456789",
      notes: "Follow-up session",
    },
    {
      id: 4,
      clientName: "Baby Nini",
      email: "helenewealth@gmail.com",
      date: "January 06, 2026",
      time: "08:00 AM",
      service: "Gold Consultation",
      status: "approved",
      trainer: "Ni - Astrology Trainer",
      phone: "+95 9123456789",
      notes: "Premium member consultation",
    },
    {
      id: 5,
      clientName: "Trangine Way",
      email: "helenewealth@gmail.com",
      date: "January 06, 2026",
      time: "08:00 AM",
      service: "Premium Consultation",
      status: "approved",
      trainer: "Tom - Life Coach",
      phone: "+95 9123456789",
      notes: "Career counseling session",
    },
    {
      id: 6,
      clientName: "Godran Wave",
      email: "helenewealth@gmail.com",
      date: "January 06, 2026",
      time: "08:00 AM",
      service: "Diamond Consultation",
      status: "approved",
      trainer: "Tikk - Energy Healer",
      phone: "+95 9123456789",
      notes: "Energy healing and meditation",
    },
  ]);

  const statusConfig = {
    pending: { color: "text-orange-600", bg: "bg-orange-100", icon: "⏳" },
    approved: { color: "text-green-600", bg: "bg-green-100", icon: "✓" },
    rejected: { color: "text-red-600", bg: "bg-red-100", icon: "✕" },
    completed: { color: "text-blue-600", bg: "bg-blue-100", icon: "✓" },
  };

  const filteredAppointments = appointments.filter((apt) => {
    const matchesSearch =
      apt.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apt.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apt.service.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "all" || apt.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleEdit = (appointment) => {
    setSelectedAppointment(appointment);
    setShowApprovalModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      setAppointments(appointments.filter((apt) => apt.id !== id));
    }
  };

  const getStatusBadge = (status) => {
    const config = statusConfig[status];
    return (
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-full ${config.bg}`}
      >
        <span className={`text-xl ${config.color}`}>{config.icon}</span>
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Admin for Appointment Lists
        </h1>
        <p className="text-gray-600">
          Manage and review all appointment requests
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
            <option value="completed">Completed</option>
          </select>

          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Download className="w-5 h-5" />
            <span>Export</span>
          </button>

          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
            <Plus className="w-5 h-5" />
            <span>New Appointment</span>
          </button>
        </div>
      </div>

      {/* Section Title */}
      <div className="bg-white rounded-t-lg shadow-sm px-6 py-3 mb-0">
        <h2 className="text-lg font-bold text-gray-800">
          Appointment List Actions
        </h2>
      </div>

      {/* Table */}
      <div className="bg-white rounded-b-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Client Name & Email
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Date
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Time
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Service
                </th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredAppointments.map((appointment) => (
                <tr
                  key={appointment.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-800">
                        {appointment.clientName}
                      </p>
                      <p className="text-sm text-gray-500">
                        {appointment.email}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {appointment.date}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {appointment.time}
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-800">
                        {appointment.service}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      {getStatusBadge(appointment.status)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleEdit(appointment)}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(appointment.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredAppointments.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No appointments found</p>
          </div>
        )}
      </div>

      {/* Approval Modal */}
      {showApprovalModal && selectedAppointment && (
        <AppointmentApprovalModal
          appointment={selectedAppointment}
          onClose={() => {
            setShowApprovalModal(false);
            setSelectedAppointment(null);
          }}
          onUpdate={(updatedAppointment) => {
            setAppointments(
              appointments.map((apt) =>
                apt.id === updatedAppointment.id ? updatedAppointment : apt
              )
            );
            setShowApprovalModal(false);
            setSelectedAppointment(null);
          }}
        />
      )}
    </div>
  );
};

// Approval Modal Component
const AppointmentApprovalModal = ({ appointment, onClose, onUpdate }) => {
  const [meetingLink, setMeetingLink] = useState("");
  const [status, setStatus] = useState(appointment.status);

  const handleApprove = () => {
    if (!meetingLink.trim()) {
      alert("Please enter a meeting link");
      return;
    }
    onUpdate({ ...appointment, status: "approved", meetingLink });
  };

  const handleReject = () => {
    if (window.confirm("Are you sure you want to reject this appointment?")) {
      onUpdate({ ...appointment, status: "rejected" });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-green-100 rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Appointment Approval
        </h2>

        <div className="space-y-3 mb-6">
          <div>
            <span className="font-semibold text-gray-700">Name: </span>
            <span className="text-gray-600">{appointment.clientName}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Email: </span>
            <span className="text-gray-600">{appointment.email}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Date: </span>
            <span className="text-gray-600">{appointment.date}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Time: </span>
            <span className="text-gray-600">{appointment.time}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">
              Appointment Type:{" "}
            </span>
            <span className="text-gray-600">{appointment.service}</span>
          </div>
          {appointment.trainer && (
            <div>
              <span className="font-semibold text-gray-700">Trainer: </span>
              <span className="text-gray-600">{appointment.trainer}</span>
            </div>
          )}
          {appointment.notes && (
            <div>
              <span className="font-semibold text-gray-700">Notes: </span>
              <span className="text-gray-600">{appointment.notes}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={handleApprove}
            className="flex-1 py-3 bg-green-800 text-white rounded-xl hover:bg-green-900 transition-colors font-semibold"
          >
            Approve
          </button>
          <button
            onClick={handleReject}
            className="flex-1 py-3 bg-red-400 text-white rounded-xl hover:bg-red-500 transition-colors font-semibold"
          >
            Reject
          </button>
        </div>

        {/* Meeting Link */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Meeting Link
          </label>
          <textarea
            value={meetingLink}
            onChange={(e) => setMeetingLink(e.target.value)}
            placeholder="Please join the link"
            className="w-full px-4 py-3 border-0 rounded-xl focus:ring-2 focus:ring-green-500 resize-none h-24"
          />
        </div>

        {/* Bottom Actions */}
        <div className="flex gap-3">
          <button
            onClick={() => {
              onUpdate({ ...appointment, meetingLink });
              alert("Changes saved!");
            }}
            className="flex-1 py-3 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition-colors font-semibold"
          >
            Save Changes
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition-colors font-semibold"
          >
            Back to List
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentList;
