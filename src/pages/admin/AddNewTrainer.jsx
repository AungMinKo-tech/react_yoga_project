import { useState } from "react";
import { Upload } from "lucide-react";

const AddNewTrainer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
    email: "",
    phone: "",
    address: "",
    photo: null,
    dateOfBirth: "",
    placeOfBirth: "",
    university: "",
    degree: "",
    startDate: "",
    endDate: "",
    city: "",
  });

  const [errors, setErrors] = useState({});
  const [photoPreview, setPhotoPreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        photo: file,
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
      if (errors.photo) {
        setErrors((prev) => ({
          ...prev,
          photo: "",
        }));
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full & Nick Name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\+?[\d\s-]+$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    } else if (formData.address.trim().length < 10) {
      newErrors.address = "Address must be at least 10 characters";
    }

    // Photo validation
    if (!formData.photo) {
      newErrors.photo = "Photo is required";
    }

    // Date of Birth validation
    if (!formData.dateOfBirth.trim()) {
      newErrors.dateOfBirth = "Date of Birth is required";
    }

    // Place of Birth validation
    if (!formData.placeOfBirth.trim()) {
      newErrors.placeOfBirth = "Place of Birth is required";
    }

    // University validation
    if (!formData.university.trim()) {
      newErrors.university = "University is required";
    }

    // Degree validation
    if (!formData.degree.trim()) {
      newErrors.degree = "Degree is required";
    }

    // Start Date validation
    if (!formData.startDate.trim()) {
      newErrors.startDate = "Start Date is required";
    }

    // End Date validation
    if (!formData.endDate.trim()) {
      newErrors.endDate = "End Date is required";
    }

    // City validation
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      alert("Please fix all validation errors before submitting.");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Trainer added successfully!");

    // Reset form
    setFormData({
      fullName: "",
      password: "",
      email: "",
      phone: "",
      address: "",
      photo: null,
      dateOfBirth: "",
      placeOfBirth: "",
      university: "",
      degree: "",
      startDate: "",
      endDate: "",
      city: "",
    });
    setPhotoPreview(null);
    setErrors({});
  };

  const handleSaveDraft = () => {
    console.log("Saved as draft:", formData);
    alert("Draft saved successfully!");
  };

  return (
    <div className="max-w-screen mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
          Add New Trainer
        </h1>
        <div className="text-right">
          <p className="text-sm text-gray-600">Helen</p>
          <p className="text-xs text-gray-500">Admin</p>
        </div>
      </div>

      {/* Personal Details Section */}
      <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
        <div className="bg-green-900 text-white px-6 py-4">
          <h2 className="text-lg font-semibold">Personal Details</h2>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full & Nick Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full & Nick Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Maria"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="222222"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Historiaj@mail.com"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1234567890"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows="4"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua ex ea commodo consequat."
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                  errors.address ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.address && (
                <p className="text-red-500 text-xs mt-1">{errors.address}</p>
              )}
              <div className="text-right text-xs text-gray-400 mt-1">
                0/2000
              </div>
            </div>

            {/* Photo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Photo <span className="text-red-500">*</span>
              </label>
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:border-green-500 transition-colors ${
                  errors.photo ? "border-red-500" : "border-gray-300"
                }`}
                onClick={() => document.getElementById("photo-upload").click()}
              >
                {photoPreview ? (
                  <img
                    src={photoPreview}
                    alt="Preview"
                    className="mx-auto h-32 w-32 object-cover rounded-lg"
                  />
                ) : (
                  <>
                    <Upload className="mx-auto mb-2 text-gray-400" size={40} />
                    <p className="text-sm text-gray-500">
                      Drag and drop or click here to select file
                    </p>
                  </>
                )}
                <input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
              </div>
              {errors.photo && (
                <p className="text-red-500 text-xs mt-1">{errors.photo}</p>
              )}
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                placeholder="24 February 1997"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                  errors.dateOfBirth ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.dateOfBirth && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.dateOfBirth}
                </p>
              )}
            </div>

            {/* Place of Birth */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Place of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="placeOfBirth"
                value={formData.placeOfBirth}
                onChange={handleInputChange}
                placeholder="Jakarta, Indonesia"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                  errors.placeOfBirth ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.placeOfBirth && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.placeOfBirth}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
        <div className="bg-green-900 text-white px-6 py-4">
          <h2 className="text-lg font-semibold">Education</h2>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* University */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                University <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="university"
                value={formData.university}
                onChange={handleInputChange}
                placeholder="University Akademi Habana"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                  errors.university ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.university && (
                <p className="text-red-500 text-xs mt-1">{errors.university}</p>
              )}
            </div>

            {/* Degree */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Degree <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleInputChange}
                placeholder="History Major"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                  errors.degree ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.degree && (
                <p className="text-red-500 text-xs mt-1">{errors.degree}</p>
              )}
            </div>

            {/* Start & End Date */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start & End Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  placeholder="September 2013"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.startDate ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.startDate && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.startDate}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  &nbsp;
                </label>
                <input
                  type="text"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  placeholder="September 2017"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.endDate ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.endDate && (
                  <p className="text-red-500 text-xs mt-1">{errors.endDate}</p>
                )}
              </div>
            </div>

            {/* City */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Yogyakarta, Indonesia"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                  errors.city ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.city && (
                <p className="text-red-500 text-xs mt-1">{errors.city}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={handleSaveDraft}
          className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Save as Draft
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="px-6 py-2 bg-green-900 text-white rounded-lg hover:bg-green-800 transition-colors"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddNewTrainer;
