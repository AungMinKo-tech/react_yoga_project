import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Upload,
  X,
  Play,
  Image as ImageIcon,
  Calendar,
  Clock,
  User,
  Tag,
  ArrowLeft,
} from "lucide-react";

const VideoUpload = () => {
  const navigate = useNavigate();
  const videoInputRef = useRef(null);
  const thumbnailInputRef = useRef(null);

  const [formData, setFormData] = useState({
    videoCaption: "",
    category: "",
    label: "",
    trainerId: "",
    scheduledDate: "",
    scheduledTime: "",
  });

  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [errors, setErrors] = useState({});

  // Sample data - Backend မှ fetch လုပ်ရမည်
  const categories = [
    "Fitness & Wellness",
    "Yoga",
    "Meditation",
    "Energy Healing",
    "Dance",
    "Nutrition",
    "Mental Health",
  ];

  const trainers = [
    { id: 1, name: "Hun - Yoga Instructor" },
    { id: 2, name: "Ni - Astrology Trainer" },
    { id: 3, name: "Bin - Counselor" },
    { id: 4, name: "Tom - Life Coach" },
    { id: 5, name: "Joh - Therapist" },
    { id: 6, name: "Bob - Fitness Trainer" },
  ];

  const handleVideoSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const validTypes = ["video/mp4", "video/webm", "video/mov", "video/avi"];
      if (!validTypes.includes(file.type)) {
        setErrors({
          ...errors,
          video: "Please select a valid video file (MP4, MOV, WEBM, AVI)",
        });
        return;
      }

      // Validate file size (max 500MB)
      if (file.size > 500 * 1024 * 1024) {
        setErrors({
          ...errors,
          video: "Video file size must be less than 500MB",
        });
        return;
      }

      setVideoFile(file);
      setVideoPreview(URL.createObjectURL(file));
      setErrors({ ...errors, video: null });
    }
  };

  const handleThumbnailSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
      if (!validTypes.includes(file.type)) {
        setErrors({
          ...errors,
          thumbnail: "Please select a valid image file (JPG, PNG, WEBP)",
        });
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors({
          ...errors,
          thumbnail: "Thumbnail size must be less than 5MB",
        });
        return;
      }

      setThumbnailFile(file);
      setThumbnailPreview(URL.createObjectURL(file));
      setErrors({ ...errors, thumbnail: null });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: null });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!videoFile) newErrors.video = "Please select a video file";
    if (!formData.videoCaption.trim())
      newErrors.videoCaption = "Video caption is required";
    if (!formData.category) newErrors.category = "Please select a category";
    if (!formData.trainerId) newErrors.trainerId = "Please select a trainer";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsUploading(true);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    // In real application, upload to backend
    const formDataToSend = new FormData();
    formDataToSend.append("video", videoFile);
    if (thumbnailFile) formDataToSend.append("thumbnail", thumbnailFile);
    formDataToSend.append("caption", formData.videoCaption);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("label", formData.label);
    formDataToSend.append("trainerId", formData.trainerId);
    formDataToSend.append("scheduledDate", formData.scheduledDate);
    formDataToSend.append("scheduledTime", formData.scheduledTime);

    // Simulate API call
    setTimeout(() => {
      setIsUploading(false);
      setUploadProgress(0);
      alert("Video uploaded successfully!");
      navigate("/admin/videos");
    }, 2500);
  };

  const handleSaveAsDraft = () => {
    // Save as draft logic
    alert("Saved as draft!");
  };

  const removeVideo = () => {
    setVideoFile(null);
    setVideoPreview(null);
    if (videoInputRef.current) videoInputRef.current.value = "";
  };

  const removeThumbnail = () => {
    setThumbnailFile(null);
    setThumbnailPreview(null);
    if (thumbnailInputRef.current) thumbnailInputRef.current.value = "";
  };

  return (
    <div className=" bg-gray-50 min-h-screen">
      <form onSubmit={handleSubmit}>
        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm">
          {/* Section Header */}
          <div className="bg-admin_bg_color text-white px-6 py-3 rounded-t-lg">
            <h2 className="text-lg font-semibold">Details</h2>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - Video Upload */}
              <div>
                {/* Video Upload Area */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Video File <span className="text-red-500">*</span>
                  </label>

                  {!videoFile ? (
                    <div
                      onClick={() => videoInputRef.current?.click()}
                      className="border-2 border-dashed border-green-300 rounded-lg p-8 text-center cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all bg-gray-50"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                          <Upload className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                          Select video
                        </h3>
                        <p className="text-sm text-gray-600 mb-1">
                          16:9 ratio & 9:16 ratio to upload
                        </p>
                        <p className="text-xs text-gray-500 mb-4">
                          Supported Format: MP4, MOV, WEBM, AVI
                        </p>
                        <button
                          type="button"
                          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                        >
                          <Upload className="w-4 h-4" />
                          Select File
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="relative border-2 border-green-300 rounded-lg overflow-hidden bg-black">
                      <video
                        src={videoPreview}
                        controls
                        className="w-full aspect-video"
                      />
                      <button
                        type="button"
                        onClick={removeVideo}
                        className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white px-3 py-1 rounded text-sm">
                        {(videoFile.size / (1024 * 1024)).toFixed(2)} MB
                      </div>
                    </div>
                  )}

                  <input
                    ref={videoInputRef}
                    type="file"
                    accept="video/*"
                    onChange={handleVideoSelect}
                    className="hidden"
                  />
                  {errors.video && (
                    <p className="text-red-500 text-sm mt-2">{errors.video}</p>
                  )}
                </div>

                {/* Thumbnail Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Video Thumbnail (Optional)
                  </label>

                  {!thumbnailPreview ? (
                    <div
                      onClick={() => thumbnailInputRef.current?.click()}
                      className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all"
                    >
                      <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">
                        Drag and drop or click here to select file
                      </p>
                      <p className="text-xs text-gray-500">
                        Recommended: 1280x720px (16:9 ratio)
                      </p>
                    </div>
                  ) : (
                    <div className="relative border-2 border-green-300 rounded-lg overflow-hidden">
                      <img
                        src={thumbnailPreview}
                        alt="Thumbnail preview"
                        className="w-full aspect-video object-cover"
                      />
                      <button
                        type="button"
                        onClick={removeThumbnail}
                        className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  <input
                    ref={thumbnailInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleThumbnailSelect}
                    className="hidden"
                  />
                  {errors.thumbnail && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.thumbnail}
                    </p>
                  )}
                </div>
              </div>

              {/* Right Column - Form Fields */}
              <div className="space-y-4">
                {/* Video Caption */}
                <div>
                  <label
                    htmlFor="videoCaption"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Video Caption <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="videoCaption"
                    name="videoCaption"
                    value={formData.videoCaption}
                    onChange={handleInputChange}
                    placeholder="Enter your video caption"
                    className={`w-full px-4 py-2 border ${
                      errors.videoCaption ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                  />
                  {errors.videoCaption && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.videoCaption}
                    </p>
                  )}
                </div>

                {/* Trainer Selection */}
                <div>
                  <label
                    htmlFor="trainerId"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    <User className="w-4 h-4 inline mr-1" />
                    Select Trainer <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="trainerId"
                    name="trainerId"
                    value={formData.trainerId}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${
                      errors.trainerId ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white`}
                  >
                    <option value="">Select a trainer</option>
                    {trainers.map((trainer) => (
                      <option key={trainer.id} value={trainer.id}>
                        {trainer.name}
                      </option>
                    ))}
                  </select>
                  {errors.trainerId && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.trainerId}
                    </p>
                  )}
                </div>

                {/* Video Category */}
                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Video Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${
                      errors.category ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white`}
                  >
                    <option value="">Fitness & Wellness</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.category}
                    </p>
                  )}
                </div>

                {/* Label/Tags */}
                <div>
                  <label
                    htmlFor="label"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    <Tag className="w-4 h-4 inline mr-1" />
                    Label / Tags
                  </label>
                  <input
                    type="text"
                    id="label"
                    name="label"
                    value={formData.label}
                    onChange={handleInputChange}
                    placeholder="Enter your main text here"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Add tags separated by commas (e.g., beginner, stretching,
                    morning)
                  </p>
                </div>

                {/* Scheduled Date */}
                <div>
                  <label
                    htmlFor="scheduledDate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Scheduled Date (Optional)
                  </label>
                  <input
                    type="date"
                    id="scheduledDate"
                    name="scheduledDate"
                    value={formData.scheduledDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                {/* Scheduled Time */}
                <div>
                  <label
                    htmlFor="scheduledTime"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    <Clock className="w-4 h-4 inline mr-1" />
                    Scheduled Time (Optional)
                  </label>
                  <input
                    type="time"
                    id="scheduledTime"
                    name="scheduledTime"
                    value={formData.scheduledTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Upload Progress */}
            {isUploading && (
              <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Uploading...
                  </span>
                  <span className="text-sm font-medium text-green-600">
                    {uploadProgress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 mt-6">
              <button
                type="button"
                onClick={handleSaveAsDraft}
                disabled={isUploading}
                className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium disabled:opacity-50"
              >
                Save as Draft
              </button>
              <button
                type="submit"
                disabled={isUploading}
                className="px-8 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isUploading ? "Uploading..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VideoUpload;
