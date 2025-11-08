import { useState } from "react";
import { Upload } from "lucide-react";

const AddNewMember = () => {
  const [formData, setFormData] = useState({
    photo: null,
    fullName: "",
    nickname: "",
    dateOfBirth: "",
    weight: "",
    email: "",
    telegramPhone: "",
    password: "",
    whatsappPhone: "",
    dailyRoutine: "",
    address: "",
    specialRequest: "",
  });

  const [errors, setErrors] = useState({});
  const [photoPreview, setPhotoPreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
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

    // Photo validation
    if (!formData.photo) {
      newErrors.photo = "Photo is required";
    }

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }

    // Date of Birth validation
    if (!formData.dateOfBirth.trim()) {
      newErrors.dateOfBirth = "Date & Place of Birth is required";
    }

    // Weight validation
    if (!formData.weight.trim()) {
      newErrors.weight = "Weight is required";
    } else if (isNaN(formData.weight) || Number(formData.weight) <= 0) {
      newErrors.weight = "Weight must be a valid number";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    // Telegram Phone validation
    if (!formData.telegramPhone.trim()) {
      newErrors.telegramPhone = "Telegram phone is required";
    } else if (!/^\+?[\d\s-]+$/.test(formData.telegramPhone)) {
      newErrors.telegramPhone = "Invalid phone number";
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // WhatsApp Phone validation
    if (!formData.whatsappPhone.trim()) {
      newErrors.whatsappPhone = "WhatsApp phone is required";
    } else if (!/^\+?[\d\s-]+$/.test(formData.whatsappPhone)) {
      newErrors.whatsappPhone = "Invalid phone number";
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to first error
      const firstErrorField = document.querySelector(".border-red-500");
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    // Form is valid, submit data
    console.log("Form submitted:", formData);
    alert("Member added successfully!");
  };

  const handleSaveDraft = () => {
    console.log("Saved as draft:", formData);
    alert("Draft saved successfully!");
  };

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-6 mb-6 border-b">
        <button className="pb-3 px-2 text-gray-600 hover:text-green-900">
          Add Video
        </button>
        <button className="pb-3 px-2 text-green-900 border-b-2 border-green-900 font-medium">
          Add Member
        </button>
        <button className="pb-3 px-2 text-gray-600 hover:text-green-900">
          Add Food
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Member Details */}
        <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
          <div className="bg-green-900 text-white px-6 py-4">
            <h2 className="text-lg font-semibold">Member Details</h2>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Photo Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo <span className="text-red-500">*</span>
                </label>
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:border-green-500 transition-colors ${
                    errors.photo ? "border-red-500" : "border-gray-300"
                  }`}
                  onClick={() =>
                    document.getElementById("photo-upload").click()
                  }
                >
                  {photoPreview ? (
                    <img
                      src={photoPreview}
                      alt="Preview"
                      className="mx-auto h-32 w-32 object-cover rounded-lg"
                    />
                  ) : (
                    <>
                      <Upload
                        className="mx-auto mb-2 text-gray-400"
                        size={40}
                      />
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

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Samantha"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Nickname */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nickname
                </label>
                <input
                  type="text"
                  name="nickname"
                  value={formData.nickname}
                  onChange={handleInputChange}
                  placeholder="Nickname"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Date & Place of Birth */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date & Place of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  placeholder="24 February 1997 - Jakarta"
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

              {/* Weight */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weight <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  placeholder="kg"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.weight ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.weight && (
                  <p className="text-red-500 text-xs mt-1">{errors.weight}</p>
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
                  placeholder="salena@mailinator.com"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Telegram Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telegram Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="telegramPhone"
                  value={formData.telegramPhone}
                  onChange={handleInputChange}
                  placeholder="+123456789"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.telegramPhone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.telegramPhone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.telegramPhone}
                  </p>
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
                  placeholder="Password"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              {/* WhatsApp Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Whatsapp Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="whatsappPhone"
                  value={formData.whatsappPhone}
                  onChange={handleInputChange}
                  placeholder="+123456789"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.whatsappPhone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.whatsappPhone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.whatsappPhone}
                  </p>
                )}
              </div>

              {/* Daily Routine */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Daily Routine for weekly
                </label>
                <textarea
                  name="dailyRoutine"
                  value={formData.dailyRoutine}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua ex ea commodo consequat."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <div className="text-right text-xs text-gray-400 mt-1">
                  0/2000
                </div>
              </div>

              {/* Address */}
              <div className="md:col-span-2">
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
            </div>
          </div>
        </div>

        {/* Medical Details */}
        <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
          <div className="bg-green-900 text-white px-6 py-4">
            <h2 className="text-lg font-semibold">Medical Details</h2>
          </div>

          <div className="p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Special Request
            </label>
            <textarea
              name="specialRequest"
              value={formData.specialRequest}
              onChange={handleInputChange}
              rows="6"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua ex ea commodo consequat."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <div className="text-right text-xs text-gray-400 mt-1">0/2000</div>
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
            type="submit"
            className="px-6 py-2 bg-green-900 text-white rounded-lg hover:bg-green-800 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewMember;
