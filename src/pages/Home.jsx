
import React, { useEffect } from 'react'; 

const Home = () => {
  useEffect(() => {
    // Horizontal Scroll Functionality for Mentors Section
    const mentorScroll = document.querySelector('.mentor-scroll');
    const scrollLeftMentor = document.querySelector('.scroll-left-mentor');
    const scrollRightMentor = document.querySelector('.scroll-right-mentor');

    if (mentorScroll && scrollLeftMentor && scrollRightMentor) {
      const cardWidth = 320;

      scrollLeftMentor.addEventListener('click', function () {
        mentorScroll.scrollBy({
          left: -cardWidth,
          behavior: 'smooth'
        });
      });

      scrollRightMentor.addEventListener('click', function () {
        mentorScroll.scrollBy({
          left: cardWidth,
          behavior: 'smooth'
        });
      });

      function updateArrowVisibility() {
        const scrollLeft = mentorScroll.scrollLeft;
        const scrollWidth = mentorScroll.scrollWidth;
        const clientWidth = mentorScroll.clientWidth;

        scrollLeftMentor.style.opacity = scrollLeft > 0 ? '1' : '0.5';
        scrollRightMentor.style.opacity = scrollLeft < scrollWidth - clientWidth ? '1' : '0.5';
      }

      mentorScroll.addEventListener('scroll', updateArrowVisibility);
      updateArrowVisibility();
    }
  }, []); // Empty dependency array

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-purple-50/30 min-h-screen font-poppins">
      {/* Serene Soul Mindfulness Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* Header Section */}
        <div className="font-poppins text-center mb-16 md:mb-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight mb-4">
            Your Trusted Guide to Energy Healing <br />
            <span className="text-gradient">in Southeast Asia.</span>
          </h1>

          <div className="max-w-3xl mx-auto font-beau-rivage">
            <p className="text-base md:text-lg text-green-500 leading-relaxed mb-8 font-light font-jost">
              Find, Compare, and Choose the Right Hospital with Confidence. Your Journey to Wellness Starts Here.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-8 tracking-tight">
            Serene Soul Mindfulness
          </h2>
        </div>

        {/* Main Content Card */}
        <div className="bg-black rounded-[3rem] md:rounded-[5rem] shadow-2xl p-6 md:p-8 mb-16">
          <div className="relative flex justify-center">
            <img src="/assets/home.png" alt="Mindfulness Practice" className="w-full rounded-[2rem] md:rounded-[4rem]" />
            <button className="absolute bottom-6 md:bottom-10 right-6 md:right-8 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg hover:bg-gray-500 transition-colors font-poppins">
              Join Courses
            </button>
          </div>
        </div>

        {/* Common Question Section */}
        <section className="text-center bg-gray-100 rounded-2xl p-6 md:p-8 mb-16">
          <div>
            <div className="pt-6 md:pt-8 pb-4 md:pb-6 flex items-center justify-center">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-black rounded-full mx-2 md:mx-4"></div>
              <p className="text-lg md:text-xl text-gray-700 font-poppins">WELCOME TO UNLOCK WEALTH RESORT</p>
              <div className="w-2 h-2 md:w-3 md:h-3 bg-black rounded-full mx-2 md:mx-4"></div>
            </div>
            <p className="text-3xl md:text-4xl lg:text-6xl text-gray-900 leading-tight mb-4 tracking-wider">
              ENERGY IS NEVER LIE FOR <br />MINDFULNESS
            </p>
            <h2 className="font-beau-rivage text-3xl md:text-4xl lg:text-6xl text-gray-900 leading-tight mt-20">Helen Thant</h2>
            <h3 className="mt-8 md:mt-4 text-gray-600 text-lg md:text-xl">Founder & CEO Flow</h3>
            <button className="text-sm md:text-xl lg:text-xl py-6 md:py-8 lg:p-20 mt-6 md:mt-8 border-b-2 border-gray-800 hover:text-green-200 transition-colors">
              DISCOVER ABOUT
            </button>
          </div>
        </section>
      </div>

      {/* Unlock Wealth Resort Section */}
      <div className="font-poppins bg-gray-50">
        <section className="relative w-full min-h-screen bg-cover bg-center" style={{backgroundImage: "url('/assets/home2.png')"}}>
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-16">
            <div className="w-full max-w-6xl bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-6 md:p-10 text-white">
              {/* Header Section */}
              <div className="text-center mb-12">
                <h1 className="font-beau-rivage text-4xl md:text-5xl font-bold mb-4">
                  Benefits from Unlock Wealth Resort
                </h1>
                <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto">
                  This list outlines the long-term benefits you can expect from engaging with this program or practice.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                {/* Personal Growth Card */}
                <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/30 transition">
                  <img src="/assets/g.png" alt="" />
                  <h3 className="text-xl font-semibold mb-3 text-green-200">Personal Growth & Skill Enhancement</h3>
                  <ul className="space-y-2 text-gray-100 text-sm md:text-base">
                    <li>• Advancement: You'll take your technique and expertise to a deeper level.</li>
                    <li>• Flexibility: You'll prevent injury and feel lighter by becoming more flexible.</li>
                    <li>• Mastery: Learn how to manage the corners of your mind on a whole new level</li>
                    <li>• Level Up: Bring your new, advanced skill set back to your own yoga students.</li>
                  </ul>
                </div>

                {/* Mind & Body Card */}
                <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/30 transition">
                  <div className="mb-2">
                    <div className="bg-green-900 rounded-lg px-3 py-2 md:px-4 md:py-2 inline-block">
                      <div className="flex items-center gap-2 md:gap-3">
                        <span className="text-green-100 text-sm md:text-base">⚖️</span>
                        <span className="font-semibold text-green-100 text-sm md:text-base">BALANCE LIFE</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-green-200">Mind & Body Well-being</h3>
                  <ul className="space-y-2 text-gray-100 text-sm md:text-base">
                    <li>• Boost vitality and endurance</li>
                    <li>• Sharpen awareness of body and mind</li>
                    <li>• Improve quality of sleep and energy</li>
                    <li>• Promote holistic wellness</li>
                  </ul>
                </div>

                {/* Emotional & Social Card */}
                <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/30 transition">
                  <div className="mb-2">
                    <div className="bg-green-900 rounded-lg px-3 py-2 md:px-4 md:py-2 inline-block">
                      <div className="flex items-center gap-2 md:gap-3">
                        <span className="text-green-100 text-sm md:text-base">⚖️</span>
                        <span className="font-semibold text-green-100 text-sm md:text-base">REDUCE STRESS</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-green-200">Emotional & Social Growth</h3>
                  <ul className="space-y-2 text-gray-100 text-sm md:text-base">
                    <li>• Achieve inner peace and joy</li>
                    <li>• Build a supportive community</li>
                    <li>• Strengthen emotional intelligence</li>
                    <li>• Connect with your authentic self</li>
                  </ul>
                </div>
              </div>

              {/* Button */}
              <div className="text-center mt-10">
                <button className="bg-green-900 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Offering Course Section */}
      <div className="max-w-8xl mx-auto mt-12 px-4">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 p-6 md:p-8 bg-white rounded-2xl shadow-lg">
          {/* Left Column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left ml-40">
            <div className="pt-6 md:pt-8 pb-4 md:pb-6 flex items-center text-center">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-black rounded-full"></div>
              <p className="text-gray-700 md:text-lg mx-2 md:mx-4">YOU CAN CHOOSE</p>
              <div className="w-2 h-2 md:w-3 md:h-3 bg-black rounded-full"></div>
            </div>
            <p className="text-7xl">OFFERING COURSE</p>
            <button className="font-poppins px-6 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-colors text-lg md:text-xl">
              _______ Join Class
            </button>
          </div>

          {/* Right Column with Features Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 px-1 md:px-2">
              <div className="bg-green-600 rounded-[4px] p-3 md:p-4">
                <h3 className="text-white text-sm md:text-base mb-1">Serene Healing</h3>
                <div className="space-y-2 text-white text-xs md:text-sm">
                  <img src="/assets/j.png" alt="Serene Healing" className="w-full h-auto" />
                </div>
              </div>
              <div className="bg-green-600 rounded-[4px] p-3 md:p-4">
                <h3 className="text-white text-sm md:text-base mb-1">Serene Healing</h3>
                <div className="space-y-2 text-white text-xs md:text-sm">
                  <img src="/assets/j.png" alt="Serene Healing" className="w-full h-auto" />
                </div>
              </div>
              <div className="bg-green-600 rounded-[4px] p-3 md:p-4">
                <h3 className="text-white text-sm md:text-base mb-1">Serene Healing</h3>
                <div className="space-y-2 text-white text-xs md:text-sm">
                  <img src="/assets/j.png" alt="Serene Healing" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto mt-12 px-4">
        <div className="bg-green-100 rounded-2xl p-6 md:p-12 lg:p-20">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Why UWR's Hideaway is Your ONLY Choice for a Real Reset
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Forget everything you think you know about retreats. This isn't your average yoga-and-smoothies
            vacation—it's a deep, powerful reset tailored precisely to you. The Core Difference: Total Freedom. Most
            retreats control your schedule; this one hands you the reins. Total Flexibility is the promise.
            Meditate, try a sound bath, move, create, or heal—you design your day to match your energy. No rigid
            structure, just True Freedom. Zero Pressure. Zero Judgment. You don't need to be a wellness guru. No
            experience is needed, period. If you don't like yoga, don't do it! The practices here are gentle and
            accessible, focused on getting you inner peace and emotional clarity, not on achieving a perfect pose.
            Build Your Own Transformation. Don't settle for a generic theme. Choose an expert path like Burnout
            Recovery or Creative Self-Discovery, or work directly with the team to build your retreat from scratch.
            This isn't a getaway; it's a fully immersive, introspective reset. You will return home with a lighter
            heart and clearer mind. Intimate and Intentional. It's a Boutique Setting—meaning you get personalized
            attention. Enjoy nourishing meals and let go completely in a peaceful environment with jungle views. The
            intimate group size ensures you feel truly cared for and can actually just be. In short: Stop booking
            vacations and start investing in a reset that actually sticks.
          </p>
        </div>
      </div>

      {/* Mentors Section */}
      <div className="max-w-6xl mx-auto mt-12 md:mt-16 px-4">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">MENTORS</h1>
          <p>
            Our mentors are skilled and experienced practitioners who lead our classes with a deep understanding of
            yoga philosophy and techniques, life coaching, counselling, nutrients, fitness and wealth management.
          </p>
        </div>

        {/* Horizontal Scroll Trainers Section */}
        <div className="relative">
          {/* Left Arrow */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-gray-600 hover:text-primary transition-all duration-300 scroll-left-mentor">
            <i className="fas fa-chevron-left text-base md:text-lg"></i>
          </button>

          {/* Scrollable Cards */}
          <div className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory mentor-scroll">
            {/* Trainer Cards */}
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex-shrink-0 w-72 md:w-80 rounded-[25px] md:rounded-[30px] bg-black border border-gray-300 overflow-hidden shadow-lg snap-center">
                <img src="/assets/m1.png" className="w-full h-64 md:h-80 object-cover rounded-t-[25px] md:rounded-t-[30px]" alt="Samantha Kim" />
                <div className="bg-green-200 p-4 md:p-5 rounded-b-[25px] md:rounded-b-[30px]">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">Samantha Kim</h3>
                  <p className="text-gray-600 mb-3 md:mb-5 text-sm md:text-base">
                    Certified trainer in Hatha Yoga with over 8 years of experience
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <button className="text-black bg-green-200 border border-black font-normal py-1 px-3 md:py-2 md:px-4 rounded-lg hover:bg-green-600 hover:text-white transition-colors text-xs md:text-sm">
                      Yoga For Beginner
                    </button>
                    <button className="text-black bg-green-200 border border-black font-normal py-1 px-3 md:py-2 md:px-4 rounded-lg hover:bg-green-600 hover:text-white transition-colors text-xs md:text-sm">
                      Meditation
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-gray-600 hover:text-primary transition-all duration-300 scroll-right-mentor">
            <i className="fas fa-chevron-right text-base md:text-lg"></i>
          </button>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="p-6 md:p-8 bg-gray-100 mt-12 md:mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="p-6 md:p-8 lg:p-12 rounded-2xl shadow-lg relative">
            <button className="absolute top-1 md:top-1 right-4 md:right-6 lg:top-1 lg:right-8 font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg hover:bg-gray-800 hover:text-white transition-colors text-sm md:text-base">
              -------- JOIN US
            </button>
            <h1 className="text-green-400 font-jost text-2xl md:text-4xl lg:text-5xl xl:text-6xl pr-20 md:pr-32 lg:pr-40">
              THE SIMPLE PRACTICE FOR <br />
              <span className="text-black">BETTER TOMORROW</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Free Trial Section */}
      <div className="max-w-6xl mx-auto mt-12 md:mt-16 px-4 text-center">
        <h1 className="text-green-600 text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 md:mb-8">
          SIGN UP FOR A FREE TRIAL <br /> LESSON NOW!
        </h1>
      </div>

      {/* iPhone Preview Section */}
      <section className="min-h-screen flex items-center justify-center p-4 md:p-5 mt-8">
        <div className="flex flex-col lg:flex-row justify-center gap-6 md:gap-8 lg:gap-20">
          {/* iPhone Frames */}
          {[...Array(2)].map((_, index) => (
            <div key={index} className="relative flex h-[600px] w-[300px] md:h-[700px] md:w-[350px] lg:h-[800px] lg:w-[400px] xl:h-[930px] xl:w-[430px] flex-col overflow-hidden rounded-[40px] md:rounded-[45px] lg:rounded-[50px] bg-black shadow-2xl">
              {/* Dynamic Island */}
              <div className="absolute top-3 md:top-4 left-1/2 z-10 h-6 md:h-7 lg:h-8 xl:h-9 w-[80px] md:w-[100px] lg:w-[110px] xl:w-[120px] -translate-x-1/2 transform rounded-[15px] md:rounded-[18px] lg:rounded-[20px] bg-black"></div>

              {/* Top Speaker */}
              <div className="absolute top-4 md:top-5 left-1/2 h-1 w-12 md:w-16 lg:w-18 xl:w-20 -translate-x-1/2 transform rounded bg-gray-700"></div>

              {/* Front Camera */}
              <div className="absolute top-3 md:top-4 right-4 md:right-5 lg:right-6 xl:right-7 h-2 w-2 md:h-2.5 md:w-2.5 lg:h-3 lg:w-3 rounded-full bg-gray-700"></div>

              {/* Screen */}
              <div className="m-2 md:m-2.5 lg:m-3 flex flex-1 flex-col overflow-hidden rounded-[30px] md:rounded-[35px] lg:rounded-[38px] bg-white">
                {/* Status Bar */}
                <div className="flex items-center justify-between border-b border-gray-200 bg-white px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3">
                  <div className="text-sm md:text-base lg:text-lg font-semibold text-gray-900">9:41</div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <i className="fas fa-signal text-gray-700 text-xs md:text-sm"></i>
                    <i className="fas fa-wifi text-gray-700 text-xs md:text-sm"></i>
                    <i className="fas fa-battery-three-quarters text-gray-700 text-xs md:text-sm"></i>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-1 flex-col items-center justify-center p-6 md:p-8 lg:p-10 text-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-2xl flex items-center justify-center mb-6 md:mb-8">
                    <img src="/assets/logo1.png" alt="App Logo" className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="mx-auto mb-3 md:mb-4 lg:mb-5 h-1 w-[100px] md:w-[120px] lg:w-[134px] rounded bg-black"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Elements */}
      <div className="fixed top-1/4 left-4 md:left-10 w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full opacity-20 animate-pulse"></div>
      <div className="fixed top-1/3 right-8 md:right-20 w-4 h-4 md:w-6 md:h-6 bg-secondary rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="fixed bottom-1/4 left-1/6 md:left-1/4 w-2 h-2 md:w-3 md:h-3 bg-accent rounded-full opacity-25 animate-pulse" style={{animationDelay: '2s'}}></div>
    </div>
  );
};

export default Home;
