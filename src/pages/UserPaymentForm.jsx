import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreditCard,
  Upload,
  X,
  User,
  Phone,
  Mail,
  DollarSign,
  CheckCircle,
  Image as ImageIcon,
  AlertCircle,
} from "lucide-react";

const UserPaymentForm = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedPlan: "",
    paymentMethod: "",
    transactionId: "",
    amount: "",
  });

  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [screenshotPreview, setScreenshotPreview] = useState(null);
  const [errors, setErrors] = useState({});

  // Available Plans
  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      duration: "1 Month",
      price: 50,
      features: ["Gym Access", "Locker", "Free Water"],
    },
    {
      id: 2,
      name: "Standard Plan",
      duration: "3 Months",
      price: 120,
      features: [
        "Gym Access",
        "Locker",
        "Free Water",
        "2 Personal Training Sessions",
      ],
      discount: "20% OFF",
    },
    {
      id: 3,
      name: "Premium Plan",
      duration: "6 Months",
      price: 200,
      features: [
        "Gym Access",
        "Locker",
        "Free Water",
        "Unlimited Personal Training",
        "Nutrition Plan",
      ],
      discount: "33% OFF",
      popular: true,
    },
    {
      id: 4,
      name: "Diamond Plan",
      duration: "12 Months",
      price: 350,
      features: [
        "All Premium Features",
        "Private Locker",
        "Spa Access",
        "24/7 Support",
        "Free Merchandise",
      ],
      discount: "42% OFF",
    },
  ];

  // Payment Methods
  const paymentMethods = [
    { id: "kpay", name: "KBZ Pay", logo: "💳" },
    { id: "wavepay", name: "Wave Pay", logo: "🌊" },
    { id: "cbpay", name: "CB Pay", logo: "💰" },
    { id: "ayapay", name: "AYA Pay", logo: "🏦" },
    { id: "bank", name: "Bank Transfer", logo: "🏛️" },
  ];

  // Bank Account Info (သင့် gym ရဲ့ account info)
  const bankAccounts = {
    kpay: {
      accountName: "Helen",
      accountNumber: "09123456789",
      type: "KBZ Pay",
    },
    wavepay: {
      accountName: "Helen",
      accountNumber: "09123456789",
      type: "Wave Pay",
    },
    cbpay: {
      accountName: "Helen",
      accountNumber: "09123456789",
      type: "CB Pay",
    },
    ayapay: {
      accountName: "Helen",
      accountNumber: "09123456789",
      type: "AYA Pay",
    },
    bank: {
      accountName: "Helen Gym",
      accountNumber: "0102047245",
      type: "KBZ Bank",
      branch: "Yangon Main Branch",
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: null });
  };

  const handlePlanSelect = (planId) => {
    const plan = plans.find((p) => p.id === planId);
    setFormData({
      ...formData,
      selectedPlan: planId.toString(),
      amount: plan.price.toString(),
    });
    setErrors({ ...errors, selectedPlan: null });
  };

  const handlePaymentMethodSelect = (methodId) => {
    setFormData({ ...formData, paymentMethod: methodId });
    setErrors({ ...errors, paymentMethod: null });
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const validTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!validTypes.includes(file.type)) {
        setErrors({
          ...errors,
          screenshot: "Please upload a valid image (JPG, PNG)",
        });
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors({
          ...errors,
          screenshot: "Image size must be less than 5MB",
        });
        return;
      }

      setPaymentScreenshot(file);
      setScreenshotPreview(URL.createObjectURL(file));
      setErrors({ ...errors, screenshot: null });
    }
  };

  const removeScreenshot = () => {
    setPaymentScreenshot(null);
    setScreenshotPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Email is invalid";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    }

    if (step === 2) {
      if (!formData.selectedPlan)
        newErrors.selectedPlan = "Please select a plan";
    }

    if (step === 3) {
      if (!formData.paymentMethod)
        newErrors.paymentMethod = "Please select a payment method";
      if (!formData.transactionId.trim())
        newErrors.transactionId = "Transaction ID is required";
      if (!paymentScreenshot)
        newErrors.screenshot = "Please upload payment screenshot";
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
    const submitData = new FormData();
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("phone", formData.phone);
    submitData.append("plan", formData.selectedPlan);
    submitData.append("paymentMethod", formData.paymentMethod);
    submitData.append("transactionId", formData.transactionId);
    submitData.append("amount", formData.amount);
    submitData.append("paymentScreenshot", paymentScreenshot);

    // In real application, send to backend
    console.log("Submitting payment:", Object.fromEntries(submitData));

    // Simulate API call
    setTimeout(() => {
      setShowSuccess(true);
    }, 500);
  };

  const selectedPlan = plans.find(
    (p) => p.id === parseInt(formData.selectedPlan)
  );
  const selectedAccount = formData.paymentMethod
    ? bankAccounts[formData.paymentMethod]
    : null;

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Payment Submitted!
          </h2>
          <p className="text-gray-600 mb-6">
            Your payment has been submitted successfully and is pending admin
            approval. You will receive an email confirmation once approved.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <h3 className="font-semibold text-gray-800 mb-3">
              Payment Details:
            </h3>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Plan:</span> {selectedPlan?.name}
              </p>
              <p>
                <span className="font-medium">Amount:</span> ${formData.amount}
              </p>
              <p>
                <span className="font-medium">Transaction ID:</span>{" "}
                {formData.transactionId}
              </p>
              <p>
                <span className="font-medium">Payment Method:</span>{" "}
                {bankAccounts[formData.paymentMethod]?.type}
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/")}
              className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
            >
              Back to Home
            </button>
            <button
              onClick={() => navigate("/my-payments")}
              className="flex-1 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              View Status
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 pt-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Payment Methods
          </h1>
          <p className="text-gray-600">Choose your plan and complete payment</p>
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
                    {step === 2 && "Select Plan"}
                    {step === 3 && "Payment"}
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
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
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
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
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
                    placeholder="09XXXXXXXXX"
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

            {/* Step 2: Plan Selection */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Choose Your Plan
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {plans.map((plan) => (
                    <div
                      key={plan.id}
                      onClick={() => handlePlanSelect(plan.id)}
                      className={`relative border-2 rounded-xl p-6 cursor-pointer transition-all ${
                        formData.selectedPlan === plan.id.toString()
                          ? "border-green-600 bg-green-50 shadow-lg scale-105"
                          : "border-gray-300 hover:border-green-400 hover:shadow-md"
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 -right-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                          POPULAR
                        </div>
                      )}
                      {plan.discount && (
                        <div className="absolute -top-3 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          {plan.discount}
                        </div>
                      )}

                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {plan.duration}
                      </p>
                      <div className="text-3xl font-bold text-green-600 mb-4">
                        ${plan.price}
                        <span className="text-sm text-gray-500 font-normal">
                          /{plan.duration}
                        </span>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {plan.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {errors.selectedPlan && (
                  <p className="text-red-500 text-sm text-center">
                    {errors.selectedPlan}
                  </p>
                )}
              </div>
            )}

            {/* Step 3: Payment Details */}
            {currentStep === 3 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Payment Method Selection */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Payment Details
                  </h2>

                  {/* Selected Plan Summary */}
                  {selectedPlan && (
                    <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Selected Plan
                      </h3>
                      <p className="text-lg font-bold text-green-600">
                        {selectedPlan.name}
                      </p>
                      <p className="text-2xl font-bold text-gray-800 mt-2">
                        ${selectedPlan.price}
                      </p>
                    </div>
                  )}

                  {/* Payment Method */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Choose Payment Method{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-3">
                      {paymentMethods.map((method) => (
                        <div
                          key={method.id}
                          onClick={() => handlePaymentMethodSelect(method.id)}
                          className={`flex items-center gap-3 border-2 rounded-lg p-4 cursor-pointer transition-all ${
                            formData.paymentMethod === method.id
                              ? "border-green-600 bg-green-50"
                              : "border-gray-300 hover:border-green-400"
                          }`}
                        >
                          <span className="text-3xl">{method.logo}</span>
                          <span className="font-medium text-gray-800">
                            {method.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    {errors.paymentMethod && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.paymentMethod}
                      </p>
                    )}
                  </div>

                  {/* Bank Account Info */}
                  {selectedAccount && (
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-blue-600" />
                        Transfer to this account
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p>
                          <span className="font-medium">Account Name:</span>{" "}
                          {selectedAccount.accountName}
                        </p>
                        <p>
                          <span className="font-medium">Account Type:</span>{" "}
                          {selectedAccount.type}
                        </p>
                        <p>
                          <span className="font-medium">Account Number:</span>{" "}
                          <span className="font-mono font-bold text-lg">
                            {selectedAccount.accountNumber}
                          </span>
                        </p>
                        {selectedAccount.branch && (
                          <p>
                            <span className="font-medium">Branch:</span>{" "}
                            {selectedAccount.branch}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right: Payment Proof */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    Upload Payment Proof
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Transaction ID <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="transactionId"
                      value={formData.transactionId}
                      onChange={handleInputChange}
                      placeholder="Enter transaction ID"
                      className={`w-full px-4 py-3 border ${
                        errors.transactionId
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                    />
                    {errors.transactionId && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.transactionId}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Payment Screenshot <span className="text-red-500">*</span>
                    </label>

                    {!screenshotPreview ? (
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all"
                      >
                        <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-1">
                          Click to upload payment screenshot
                        </p>
                        <p className="text-xs text-gray-500">
                          PNG, JPG up to 5MB
                        </p>
                      </div>
                    ) : (
                      <div className="relative border-2 border-green-300 rounded-lg overflow-hidden">
                        <img
                          src={screenshotPreview}
                          alt="Payment screenshot"
                          className="w-full"
                        />
                        <button
                          type="button"
                          onClick={removeScreenshot}
                          className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}

                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                    {errors.screenshot && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.screenshot}
                      </p>
                    )}
                  </div>
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
                {currentStep === 3 ? "Submit Payment" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPaymentForm;
