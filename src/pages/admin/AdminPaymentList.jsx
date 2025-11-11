import React, { useState } from "react";
import {
  Search,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Download,
  Filter,
  Image as ImageIcon,
  X,
} from "lucide-react";

const AdminPaymentList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  // Sample data - Backend မှ fetch လုပ်ရမည်
  const [payments, setPayments] = useState([
    {
      id: 1,
      userId: "USR001",
      name: "Helen",
      email: "hele@email.com",
      phone: "09123485247",
      plan: "Premium 6 Months",
      transactionId: "1234738584",
      amount: 111,
      paymentMethod: "Kpay",
      paymentScreenshot: null, // URL to screenshot
      status: "pending",
      message: "Please upload payment screenshot",
      submittedDate: "2024-01-06",
      submittedTime: "10:30 AM",
    },
    {
      id: 2,
      userId: "USR002",
      name: "Helen",
      email: "hele@email.com",
      phone: "09123485247",
      plan: "Premium 6 Months",
      transactionId: "1234738584",
      amount: 111,
      paymentMethod: "Kpay",
      paymentScreenshot: "/screenshots/payment2.jpg",
      status: "pending",
      message: "Please upload payment screenshot",
      submittedDate: "2024-01-06",
      submittedTime: "11:15 AM",
    },
    {
      id: 3,
      userId: "USR003",
      name: "Helen",
      email: "hele@email.com",
      phone: "09123485247",
      plan: "Premium 6 Months",
      transactionId: "1234738584",
      amount: 111,
      paymentMethod: "Kpay",
      paymentScreenshot: "/screenshots/payment3.jpg",
      status: "approved",
      message: "Premium 6 months plan accept",
      approvedDate: "2024-01-06",
      approvedBy: "Admin",
      submittedDate: "2024-01-05",
    },
    {
      id: 4,
      userId: "USR004",
      name: "Helen",
      email: "hele@email.com",
      phone: "09123485247",
      plan: "Gold Consultation",
      transactionId: "1234738584",
      amount: 111,
      paymentMethod: "Kpay",
      paymentScreenshot: "/screenshots/payment4.jpg",
      status: "approved",
      message: "Gold consultation accept",
      approvedDate: "2024-01-06",
      submittedDate: "2024-01-05",
    },
  ]);

  const statusConfig = {
    pending: {
      icon: Clock,
      color: "text-orange-600",
      bg: "bg-orange-100",
      borderColor: "border-orange-300",
    },
    approved: {
      icon: CheckCircle,
      color: "text-green-600",
      bg: "bg-green-100",
      borderColor: "border-green-300",
    },
    rejected: {
      icon: XCircle,
      color: "text-red-600",
      bg: "bg-red-100",
      borderColor: "border-red-300",
    },
  };

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.transactionId.includes(searchQuery);
    const matchesStatus =
      filterStatus === "all" || payment.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleViewDetails = (payment) => {
    setSelectedPayment(payment);
    setShowDetailModal(true);
  };

  const handleApprove = (paymentId) => {
    setPayments(
      payments.map((p) =>
        p.id === paymentId
          ? {
              ...p,
              status: "approved",
              message: `${p.plan} plan accepted`,
              approvedDate: new Date().toISOString().split("T")[0],
              approvedBy: "Admin",
            }
          : p
      )
    );
    setShowDetailModal(false);
    // Send email notification to user
    alert("Payment approved! Notification email sent to user.");
  };

  const handleReject = (paymentId) => {
    if (window.confirm("Are you sure you want to reject this payment?")) {
      setPayments(
        payments.map((p) =>
          p.id === paymentId
            ? {
                ...p,
                status: "rejected",
                message: "Payment rejected. Please contact admin.",
                rejectedDate: new Date().toISOString().split("T")[0],
                rejectedBy: "Admin",
              }
            : p
        )
      );
      setShowDetailModal(false);
      alert("Payment rejected! Notification email sent to user.");
    }
  };

  const getStatusIcon = (status) => {
    const config = statusConfig[status];
    const IconComponent = config.icon;
    return (
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-full ${config.bg}`}
      >
        <IconComponent className={`w-5 h-5 ${config.color}`} />
      </div>
    );
  };

  // Statistics
  const stats = {
    total: payments.length,
    pending: payments.filter((p) => p.status === "pending").length,
    approved: payments.filter((p) => p.status === "approved").length,
    rejected: payments.filter((p) => p.status === "rejected").length,
    totalAmount: payments
      .filter((p) => p.status === "approved")
      .reduce((sum, p) => sum + p.amount, 0),
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Payment Requests
        </h1>
        <p className="text-gray-600">
          Review and manage membership payment requests
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-blue-500">
          <p className="text-sm text-gray-600 mb-1">Total Requests</p>
          <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-orange-500">
          <p className="text-sm text-gray-600 mb-1">Pending</p>
          <p className="text-2xl font-bold text-orange-600">{stats.pending}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-green-500">
          <p className="text-sm text-gray-600 mb-1">Approved</p>
          <p className="text-2xl font-bold text-green-600">{stats.approved}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-red-500">
          <p className="text-sm text-gray-600 mb-1">Rejected</p>
          <p className="text-2xl font-bold text-red-600">{stats.rejected}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-purple-500">
          <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
          <p className="text-2xl font-bold text-purple-600">
            ${stats.totalAmount}
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name, email, or transaction ID..."
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
          </select>

          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Download className="w-5 h-5" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Action
                </th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  User ID
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Transaction ID
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Plan
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Message
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredPayments.map((payment) => (
                <tr
                  key={payment.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleViewDetails(payment)}
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-5 h-5 text-gray-600" />
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      {getStatusIcon(payment.status)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-800">
                        {payment.name}
                      </p>
                      <p className="text-sm text-gray-500">{payment.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-gray-700">
                    {payment.transactionId}
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-800">
                        {payment.plan}
                      </p>
                      <p className="text-sm text-gray-500">${payment.amount}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{payment.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredPayments.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500">No payment requests found</p>
          </div>
        )}
      </div>

      {/* Payment Detail Modal */}
      {showDetailModal && selectedPayment && (
        <PaymentDetailModal
          payment={selectedPayment}
          onClose={() => {
            setShowDetailModal(false);
            setSelectedPayment(null);
          }}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      )}
    </div>
  );
};

// Payment Detail Modal Component
const PaymentDetailModal = ({ payment, onClose, onApprove, onReject }) => {
  const [showScreenshot, setShowScreenshot] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Payment Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          {/* Status Badge */}
          <div className="flex justify-center mb-6">
            <div
              className={`px-6 py-2 rounded-full text-sm font-semibold ${
                payment.status === "pending"
                  ? "bg-orange-100 text-orange-700"
                  : payment.status === "approved"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {payment.status.toUpperCase()}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Left Column - User Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-800 border-b pb-2">
                User Information
              </h3>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  User ID
                </label>
                <p className="text-gray-800 font-medium">{payment.userId}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Name
                </label>
                <p className="text-gray-800 font-medium">{payment.name}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Email
                </label>
                <p className="text-gray-800 font-medium">{payment.email}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Phone
                </label>
                <p className="text-gray-800 font-medium">{payment.phone}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Submitted Date
                </label>
                <p className="text-gray-800 font-medium">
                  {payment.submittedDate} {payment.submittedTime}
                </p>
              </div>
            </div>

            {/* Right Column - Payment Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-800 border-b pb-2">
                Payment Information
              </h3>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Package
                </label>
                <p className="text-gray-800 font-medium text-lg">
                  {payment.plan}
                </p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Payment Method
                </label>
                <p className="text-gray-800 font-medium">
                  {payment.paymentMethod}
                </p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Transaction ID
                </label>
                <p className="text-gray-800 font-mono font-bold text-lg">
                  {payment.transactionId}
                </p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Amount Paid
                </label>
                <p className="text-green-600 font-bold text-2xl">
                  ${payment.amount}
                </p>
              </div>

              {payment.approvedDate && (
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Approved Date
                  </label>
                  <p className="text-gray-800 font-medium">
                    {payment.approvedDate}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Payment Screenshot */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">
              Payment Screenshot
            </h3>
            {payment.paymentScreenshot ? (
              <div className="relative border-2 border-gray-300 rounded-lg overflow-hidden">
                <img
                  src={payment.paymentScreenshot}
                  alt="Payment screenshot"
                  className="w-full cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setShowScreenshot(true)}
                />
                <button
                  onClick={() => setShowScreenshot(true)}
                  className="absolute top-2 right-2 p-2 bg-black bg-opacity-50 text-white rounded-lg hover:bg-opacity-70 transition-all"
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">No screenshot uploaded</p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          {payment.status === "pending" && (
            <div className="flex gap-4">
              <button
                onClick={() => onApprove(payment.id)}
                className="flex-1 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Approve Payment
              </button>
              <button
                onClick={() => onReject(payment.id)}
                className="flex-1 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold flex items-center justify-center gap-2"
              >
                <XCircle className="w-5 h-5" />
                Reject Payment
              </button>
            </div>
          )}

          {payment.status === "approved" && (
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-2" />
              <p className="text-green-800 font-semibold">
                Payment has been approved
              </p>
              <p className="text-sm text-green-600">
                User's membership is now active
              </p>
            </div>
          )}

          {payment.status === "rejected" && (
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-center">
              <XCircle className="w-12 h-12 text-red-600 mx-auto mb-2" />
              <p className="text-red-800 font-semibold">
                Payment has been rejected
              </p>
              <p className="text-sm text-red-600">User has been notified</p>
            </div>
          )}
        </div>
      </div>

      {/* Full Screen Screenshot Modal */}
      {showScreenshot && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setShowScreenshot(false)}
        >
          <button
            onClick={() => setShowScreenshot(false)}
            className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={payment.paymentScreenshot}
            alt="Payment screenshot full size"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default AdminPaymentList;
