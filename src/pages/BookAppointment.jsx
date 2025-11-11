import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

const BookAppointment = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    trainer: "",
    date: "",
    time: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  // Sample data - Backend မှ fetch လုပ်ရမည်
  const services = [
    { id: 1, name: "Free Consultation", duration: "15 min", price: "Free" },
    { id: 2, name: "Gold Consultation", duration: "30 min", price: "$50" },
    { id: 3, name: "Premium Consultation", duration: "45 min", price: "$100" },
    { id: 4, name: "Diamond Consultation", duration: "60 min", price: "$150" },
  ];

  const trainers = [
    { id: 1, name: "Hun", specialty: "Yoga Instructor", avatar: null },
    { id: 2, name: "Ni", specialty: "Astrology Trainer", avatar: null },
    { id: 3, name: "Bin", specialty: "Counselor", avatar: null },
    { id: 4, name: "Tom", specialty: "Life Coach", avatar: null },
    { id: 5, name: "Joh", specialty: "Therapist", avatar: null },
    { id: 6, name: "Bob", specialty: "Fitness Trainer", avatar: null },
  ];

  const timeSlots = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: null });
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.fullName.trim())
        newErrors.fullName = "Full name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Email is invalid";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    }

    if (step === 2) {
      if (!formData.service) newErrors.service = "Please select a service";
      if (!formData.trainer) newErrors.trainer = "Please select a trainer";
    }

    if (step === 3) {
      if (!formData.date) newErrors.date = "Please select a date";
      if (!formData.time) newErrors.time = "Please select a time";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    // In real application, send to backend
    console.log("Booking appointment:", formData);

    // Simulate API call
    setTimeout(() => {
      setShowSuccess(true);
    }, 500);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4 pt-12">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Success!</h2>
          <p className="text-gray-600 mb-6">
            Your appointment request has been submitted successfully. You will
            receive a confirmation email once it's approved by our admin.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <h3 className="font-semibold text-gray-800 mb-3">
              Booking Details:
            </h3>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Name:</span> {formData.fullName}
              </p>
              <p>
                <span className="font-medium">Service:</span>{" "}
                {
                  services.find((s) => s.id === parseInt(formData.service))
                    ?.name
                }
              </p>
              <p>
                <span className="font-medium">Trainer:</span>{" "}
                {
                  trainers.find((t) => t.id === parseInt(formData.trainer))
                    ?.name
                }
              </p>
              <p>
                <span className="font-medium">Date:</span> {formData.date}
              </p>
              <p>
                <span className="font-medium">Time:</span> {formData.time}
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/")}
            className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 pt-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Book an Appointment
          </h1>
          <p className="text-gray-600">
            Schedule your session with our expert trainers
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {[1, 2, 3].map((step) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                      currentStep >= step
                        ? "bg-green-600 text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    {step}
                  </div>
                  <span
                    className={`text-sm mt-2 font-medium ${
                      currentStep >= step ? "text-green-600" : "text-gray-500"
                    }`}
                  >
                    {step === 1 && "Personal Info"}
                    {step === 2 && "Service & Trainer"}
                    {step === 3 && "Date & Time"}
                  </span>
                </div>
                {step < 3 && (
                  <div
                    className={`flex-1 h-1 mx-4 rounded transition-all ${
                      currentStep > step ? "bg-green-600" : "bg-gray-300"
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Personal Information
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-1" />
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 border ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-1" />
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-3 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-1" />
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+95 9XXXXXXXXX"
                  className={`w-full px-4 py-3 border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Service & Trainer Selection */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Choose Service & Trainer
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Service <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      onClick={() =>
                        setFormData({
                          ...formData,
                          service: service.id.toString(),
                        })
                      }
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        formData.service === service.id.toString()
                          ? "border-green-600 bg-green-50"
                          : "border-gray-300 hover:border-green-400"
                      }`}
                    >
                      <h3 className="font-bold text-gray-800 mb-1">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {service.duration} • {service.price}
                      </p>
                    </div>
                  ))}
                </div>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-2">{errors.service}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Trainer <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {trainers.map((trainer) => (
                    <div
                      key={trainer.id}
                      onClick={() =>
                        setFormData({
                          ...formData,
                          trainer: trainer.id.toString(),
                        })
                      }
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all text-center ${
                        formData.trainer === trainer.id.toString()
                          ? "border-green-600 bg-green-50"
                          : "border-gray-300 hover:border-green-400"
                      }`}
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center text-white text-xl font-bold mx-auto mb-2">
                        {trainer.name.charAt(0)}
                      </div>
                      <h3 className="font-bold text-gray-800">
                        {trainer.name}
                      </h3>
                      <p className="text-xs text-gray-600">
                        {trainer.specialty}
                      </p>
                    </div>
                  ))}
                </div>
                {errors.trainer && (
                  <p className="text-red-500 text-sm mt-2">{errors.trainer}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Date & Time Selection */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Select Date & Time
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Appointment Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split("T")[0]}
                  className={`w-full px-4 py-3 border ${
                    errors.date ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                />
                {errors.date && (
                  <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Available Time Slots <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData({ ...formData, time: slot })}
                      className={`py-2 px-3 border-2 rounded-lg font-medium transition-all ${
                        formData.time === slot
                          ? "border-green-600 bg-green-600 text-white"
                          : "border-gray-300 hover:border-green-400"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                {errors.time && (
                  <p className="text-red-500 text-sm mt-2">{errors.time}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-1" />
                  Additional Notes (Optional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Any specific requirements or questions?"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                ></textarea>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
              >
                Back
              </button>
            )}
            <button
              type="button"
              onClick={handleNext}
              className="flex-1 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              {currentStep === 3 ? "Submit Booking" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
