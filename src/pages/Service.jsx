
import React from 'react';

const Service = () => {
  const videoPrograms = [
    {
      id: 1,
      title: "Alignment Pilates",
      desc: "Foundation principles for perfect posture and core strength",
      duration: "25 min",
      views: "12.5K",
      likes: "1.2K",
      instructor: "Maya Wellness",
      instructorRole: "Pilates Instructor",
      image: "https://images.unsplash.com/photo-1616460602930-629a271b76fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      initials: "MW"
    },
    {
      id: 2,
      title: "Alignment Pilates",
      desc: "Foundation principles for perfect posture and core strength",
      duration: "25 min",
      views: "12.5K",
      likes: "1.2K",
      instructor: "Maya Wellness",
      instructorRole: "Pilates Instructor",
      image: "https://images.unsplash.com/photo-1616460602930-629a271b76fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      initials: "MW"
    },
    {
      id: 3,
      title: "Alignment Pilates",
      desc: "Foundation principles for perfect posture and core strength",
      duration: "25 min",
      views: "12.5K",
      likes: "1.2K",
      instructor: "Maya Wellness",
      instructorRole: "Pilates Instructor",
      image: "https://images.unsplash.com/photo-1616460602930-629a271b76fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      initials: "MW"
    },
    {
      id: 4,
      title: "Alignment Pilates",
      desc: "Foundation principles for perfect posture and core strength",
      duration: "25 min",
      views: "12.5K",
      likes: "1.2K",
      instructor: "Maya Wellness",
      instructorRole: "Pilates Instructor",
      image: "https://images.unsplash.com/photo-1616460602930-629a271b76fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      initials: "MW"
    },
    {
      id: 5,
      title: "Yoga Flow Basics",
      desc: "Beginner-friendly yoga sequences for flexibility and peace",
      duration: "18 min",
      views: "8.7K",
      likes: "950",
      instructor: "Lila Yoga",
      instructorRole: "Yoga Teacher",
      image: "https://images.unsplash.com/photo-1544718045-1982b8a8fc9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      initials: "LY"
    },
    {
      id: 6,
      title: "Guided Meditation",
      desc: "Deep relaxation techniques for stress relief and mental clarity",
      duration: "30 min",
      views: "15.2K",
      likes: "2.1K",
      instructor: "Zen Master",
      instructorRole: "Meditation Guide",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      initials: "ZM"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* 🏔️ HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src="/assets/programv.jpg"
            className="w-full h-full object-cover" 
            alt="Wellness Background" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 text-white px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6 lg:mb-8">
                <span className="w-2 h-2 lg:w-3 lg:h-3 bg-green-400 rounded-full"></span>
                <span className="text-xs lg:text-sm tracking-widest opacity-90">COMPLETE WELLNESS JOURNEY</span>
                <span className="w-2 h-2 lg:w-3 lg:h-3 bg-green-400 rounded-full"></span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 lg:mb-6">
                OUR <span className="text-green-400">PROGRAM</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6 lg:mb-8 opacity-90 max-w-2xl mx-auto lg:mx-0">
                Join thousands who have discovered inner peace and wellness through our carefully crafted programs.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mt-8 lg:mt-0">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-center lg:text-left">Free Wellness Assessment</h3>
              <p className="text-gray-200 mb-6 text-center lg:text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corrupti accusantium quas vel molestias repellendus aliquid esse voluptatem iure maxime dolorem.
              </p>
              <button className="w-full bg-transparent border-2 border-white hover:bg-green-200 hover:text-black text-white font-bold py-3 rounded-lg transition-all">
                Take Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO PROGRAMS SECTION */}
      <section className="py-12 lg:py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Explore Our Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corrupti accusantium quas vel molestias repellendus aliquid esse voluptatem iure maxime dolorem
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8">
            {videoPrograms.map((program) => (
              <div key={program.id} className="video-card bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative group cursor-pointer">
                  <img 
                    src={program.image}
                    className="w-full h-48 lg:h-52 object-cover" 
                    alt={program.title}
                  />
                  {/* Trial Course Button */}
                  <div className="absolute top-3 right-3">
                    <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
                      Trial Course
                    </button>
                  </div>
                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform">
                      <i className="fas fa-play text-white text-lg ml-1"></i>
                    </div>
                  </div>
                </div>
                
                <div className="video-content p-4 lg:p-6">
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 lg:mb-4">{program.desc}</p>
                    <div className="flex items-center justify-between text-xs lg:text-sm text-gray-500 mb-3 lg:mb-4">
                      <div className="flex items-center space-x-1">
                        <i className="fas fa-clock text-purple-500"></i>
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                          <i className="fas fa-eye text-green-500"></i>
                          <span>{program.views}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <i className="fas fa-thumbs-up text-red-500"></i>
                          <span>{program.likes}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{program.initials}</span>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-700">{program.instructor}</p>
                        <p className="text-xs text-gray-500">{program.instructorRole}</p>
                      </div>
                    </div>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm transition-colors flex items-center space-x-1">
                      <i className="fas fa-play"></i>
                      <span>Play</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-8 lg:mt-12">
            <button className="bg-white border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
              View All Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;