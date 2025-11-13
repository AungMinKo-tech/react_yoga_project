import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Search,
  Plus,
  Play,
  Clock,
  Eye,
  MoreVertical,
  ArrowLeft,
  Filter,
} from "lucide-react";

const TrainerVideos = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [filterCategory, setFilterCategory] = useState("all");

  // Sample data - သင့်အနေဖြင့် backend မှ data fetch လုပ်ရမည်
  const videos = [
    {
      id: 1,
      trainerId: 1,
      trainerName: "Hun",
      trainerRole: "Yoga & Pilate Instructor & Zoom ban",
      title: "Day 1",
      subtitle: "Stretching",
      thumbnail: null, // Video thumbnail URL ထည့်ရမည်
      duration: "45:30",
      views: 1250,
      uploadDate: "2024-03-15",
      category: "Yoga",
    },
    {
      id: 2,
      trainerId: 1,
      trainerName: "Hun",
      trainerRole: "Yoga & Pilate Instructor",
      title: "Day 2",
      subtitle: "Yoga Beginner",
      thumbnail: null,
      duration: "38:15",
      views: 980,
      uploadDate: "2024-03-16",
      category: "Yoga",
    },
    {
      id: 3,
      trainerId: 1,
      trainerName: "Hun",
      trainerRole: "Yoga & Pilate Instructor",
      title: "Day 3",
      subtitle: "Yoga & Breathwork",
      thumbnail: null,
      duration: "52:00",
      views: 1500,
      uploadDate: "2024-03-17",
      category: "Yoga",
    },
    {
      id: 4,
      trainerId: 2,
      trainerName: "Joh",
      trainerRole: "Fitness & Detox",
      title: "Day 1",
      subtitle: "Stretching",
      thumbnail: null,
      duration: "30:45",
      views: 750,
      uploadDate: "2024-03-15",
      category: "Fitness",
    },
    {
      id: 5,
      trainerId: 2,
      trainerName: "Joh",
      trainerRole: "Fitness & Detox",
      title: "Day 2",
      subtitle: "Breathwork",
      thumbnail: null,
      duration: "42:20",
      views: 890,
      uploadDate: "2024-03-16",
      category: "Fitness",
    },
    {
      id: 6,
      trainerId: 2,
      trainerName: "Joh",
      trainerRole: "Fitness & Detox",
      title: "Day 3",
      subtitle: "Slow Movement",
      thumbnail: null,
      duration: "55:10",
      views: 1100,
      uploadDate: "2024-03-17",
      category: "Fitness",
    },
    {
      id: 7,
      trainerId: 3,
      trainerName: "Tikk",
      trainerRole: "Energy Healer",
      title: "Day 1",
      subtitle: "Dancer",
      thumbnail: null,
      duration: "48:30",
      views: 620,
      uploadDate: "2024-03-15",
      category: "Energy Healing",
    },
    {
      id: 8,
      trainerId: 3,
      trainerName: "Tikk",
      trainerRole: "Energy Healer",
      title: "Day 2",
      subtitle: "Open Minded",
      thumbnail: null,
      duration: "35:45",
      views: 540,
      uploadDate: "2024-03-16",
      category: "Energy Healing",
    },
    {
      id: 9,
      trainerId: 3,
      trainerName: "Tikk",
      trainerRole: "Energy Healer",
      title: "Day 3",
      subtitle: "Value of Energy",
      thumbnail: null,
      duration: "50:00",
      views: 780,
      uploadDate: "2024-03-17",
      category: "Energy Healing",
    },
  ];

  const categories = [
    "all",
    "Yoga",
    "Fitness",
    "Energy Healing",
    "Meditation",
    "Dance",
  ];

  const filteredVideos = videos.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.trainerName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || video.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => navigate("/admin/trainers")}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Trainers</span>
      </button>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Trainers Videos</h1>
        <p className="text-gray-600 mt-1">Browse and manage training videos</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search videos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "all" ? "All Categories" : cat}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="popular">Most Popular</option>
        </select>

        <button
          onClick={() => navigate("/admin/videos/upload")}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium whitespace-nowrap flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          New Videos
        </button>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
          >
            {/* Video Thumbnail */}
            <div className="relative aspect-video bg-gradient-to-br from-green-400 via-green-500 to-green-700 overflow-hidden">
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                  <Play className="w-8 h-8 text-green-600 ml-1" />
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {video.duration}
              </div>

              {/* Category Badge */}
              <div className="absolute top-2 left-2 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                {video.category}
              </div>

              {/* Menu Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100"
              >
                <MoreVertical className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Video Info */}
            <div className="p-4">
              {/* Trainer Info */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {video.trainerName.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-800 text-sm truncate">
                    {video.trainerName}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {video.trainerRole}
                  </p>
                </div>
              </div>

              {/* Video Title */}
              <h3 className="font-bold text-gray-800 mb-1 truncate">
                {video.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3 truncate">
                {video.subtitle}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{video.views.toLocaleString()} views</span>
                </div>
                <span>
                  {new Date(video.uploadDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredVideos.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <Play className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            No videos found
          </h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your search or filters
          </p>
        </div>
      )}

      {/* Pagination */}
      {filteredVideos.length > 0 && (
        <>
          <div className="flex justify-center items-center gap-2 mt-8">
            <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">
              Previous
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Next
            </button>
          </div>

          <p className="text-center text-gray-600 mt-4">
            Showing 1-5 from {filteredVideos.length} data
          </p>
        </>
      )}
    </div>
  );
};

export default TrainerVideos;
