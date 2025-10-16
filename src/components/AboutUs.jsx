// AboutUs.jsx
import React, { useState } from 'react';

const AboutUs = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqItems = [
    {
      question: "What Classes Do You Have?",
      answer: "We offer a variety of wellness classes including yoga, meditation, pilates, and specialized healing sessions tailored to your needs."
    },
    {
      question: "What Types Of Courses Do You Teach?",
      answer: "Our courses range from beginner to advanced levels in yoga, meditation, detox programs, and holistic wellness practices."
    },
    {
      question: "What Is Meditation?",
      answer: "Meditation is a practice where an individual uses a technique to train attention and awareness, achieving a mentally clear and emotionally calm state."
    },
    {
      question: "Do You Offer Detox Programs?",
      answer: "Yes, we offer comprehensive detox programs including juice cleansing, raw food diets, and specialized treatments to help reset your body."
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen font-poppins">
      {/* Custom Styles for Fonts */}
      <style jsx>{`
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        .font-beau-rivage {
          font-family: 'Beau Rivage', cursive;
        }
        .font-jost {
          font-family: 'Jost', sans-serif;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen bg-cover bg-center" style={{backgroundImage: "url('/assets/about.png')"}}>
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content Container */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-16">
          <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-6 md:p-10 text-white">
            {/* Header Section */}
            <div className="text-center mb-10">
              <h1 className="font-poppins text-4xl md:text-5xl font-bold">
                ONLINE ENERGY SESSIONS 
              </h1>
            </div>

            {/* Button */}
            <div className="text-center mt-10">
              <button className="border-2 border-white hover:bg-green-800 hover:border-green-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300">
                BOOK A SEARCH
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About our MISSION */}
      <div className="py-16 bg-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Image Section */}
            <div className="w-full lg:w-5/12 flex justify-center">
              <div className="relative">
                {/* Circle Image Container */}
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-yellow-400 to-green-500 rounded-full flex items-center justify-center p-2">
                  <div className="w-full h-full bg-gray-800 rounded-full overflow-hidden flex items-center justify-center">
                    <img 
                      src="/assets/home2.png" 
                      alt="About Us" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full"></div>
                <div className="absolute -bottom-2 -left-2 w-5 h-5 bg-green-500 rounded-full"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-7/12">
              {/* ABOUT OUR MISSION Section */}
              <div className="mb-8">
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <p className="text-black text-lg md:text-xl font-medium tracking-wide">ABOUT OUR MISSION</p>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="space-y-6 text-black">
                <h1 className="font-jost text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left leading-tight">
                  HI, WELCOME TO <br />
                  <span className="text-green-400">UNLOCK WEALTH RESORT</span>
                </h1>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 py-2">
                  {/* Energy */}
                  <div className="flex items-center space-x-3 p-4 bg-gray-200 rounded-lg">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <span className="text-xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-400">ENERGY</h3>
                      <p className="text-3xl font-bold">35</p>
                    </div>
                  </div>

                  {/* Classes */}
                  <div className="flex items-center space-x-3 p-4 bg-gray-200 rounded-lg">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <span className="text-xl">📚</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-400">CLASSES</h3>
                      <p className="text-3xl font-bold">12</p>
                    </div>
                  </div>

                  {/* Events */}
                  <div className="flex items-center space-x-3 p-4 bg-gray-200 rounded-lg">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <span className="text-xl">🎪</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-400">EVENTS</h3>
                      <p className="text-3xl font-bold">20</p>
                    </div>
                  </div>

                  {/* Coaches */}
                  <div className="flex items-center space-x-3 p-4 bg-gray-200 rounded-lg">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <span className="text-xl">👥</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-400">COACHES</h3>
                      <p className="text-3xl font-bold">38</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 text-center lg:text-left">
                  <button className="border border-gray-800 text-black font-medium py-3 px-8 rounded-lg hover:bg-green-100 transition-colors duration-300">
                    Discover Our Programs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Journey Section */}
      <div className="bg-gray-200 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-black rounded-full mr-10"></div>
            <p className="text-gray-700 text-xl font-medium">ABOUT US</p>
            <div className="w-3 h-3 bg-black rounded-full ml-10"></div>
          </div>

          <h1 className="font-jost text-5xl md:text-6xl font-bold text-center mb-12">
            OUR <span className="text-green-400">JOURNEY</span>
          </h1>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Helen Healing Resort: Your Simple, Sunny Getaway for Feeling Good
              Helen Healing Resort is a special place in Thailand, on a beautiful island called Koh Samui.
              Think of it as a friendly school and a sunny vacation all rolled into one, where the main goal
              is to help you feel your very best.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-black mr-3 mt-1 text-lg">•</span>
                <p className="text-gray-700 text-lg">
                  <strong>Yoga:</strong> You'll do yoga on an amazing deck that looks out over the ocean. 
                  It's for everyone—even if you've never touched a mat! It helps your body feel stretched and strong.
                </p>
              </div>

              <div className="flex items-start">
                <span className="text-black mr-3 mt-1 text-lg">•</span>
                <p className="text-gray-700 text-lg">
                  <strong>Feel Calm:</strong> We teach simple breathing and quiet time (meditation) to help your mind relax. 
                  This is your chance to really slow down and stop worrying about your busy life. We also have things like 
                  Sound Baths which are a simple way to feel peaceful and "reset" your energy.
                </p>
              </div>

              <div className="flex items-start">
                <span className="text-black mr-3 mt-1 text-lg">•</span>
                <p className="text-gray-700 text-lg">
                  <strong>Moving Your Body:</strong> Besides yoga, you can swim in the pool or walk on the beach. 
                  It's all about finding fun ways to move that make you feel alive, not tired.
                </p>
              </div>

              <div className="flex items-start">
                <span className="text-black mr-3 mt-1 text-lg">•</span>
                <p className="text-gray-700 text-lg">
                  <strong>Great Food:</strong> Our café has fresh, delicious, and healthy food. 
                  It's food that gives you energy and helps your body feel good from the inside out.
                </p>
              </div>

              <div className="flex items-start">
                <span className="text-black mr-3 mt-1 text-lg">•</span>
                <p className="text-gray-700 text-lg">
                  <strong>Cleanse:</strong> If you want a fresh start, we have a Detox program (like our 'Vitox' offering). 
                  It's a simple way to clean your body using healthy juices and raw food. It's not about starving; 
                  it's about feeling vibrant and light.
                </p>
              </div>

              <div className="flex items-start">
                <span className="text-black mr-3 mt-1 text-lg">•</span>
                <p className="text-gray-700 text-lg">
                  <strong>Good Habits:</strong> We help you learn simple, healthy habits for eating and feeling less stressed 
                  so you can take them home with you.
                </p>
              </div>

              <div className="flex items-start">
                <span className="text-black mr-3 mt-1 text-lg">•</span>
                <p className="text-gray-700 text-lg">
                  <strong>Simple Rooms:</strong> We have different rooms for different budgets. You can pick a cozy bungalow 
                  near the beach (like a Prana Cabana) or a nice room with a garden view (like a Lotus Pad). 
                  It's not a fancy, "one-size-fits-all" hotel; it's a relaxed, friendly space.
                </p>
              </div>

              <div className="flex items-start">
                <span className="text-black mr-3 mt-1 text-lg">•</span>
                <p className="text-gray-700 text-lg">
                  <strong>Friendly People:</strong> You will meet people from all over the world who are also here to feel better 
                  and be healthier. It's a very welcoming and supportive community. In short: Helen Healing Resort is the perfect 
                  spot to stop, breathe, eat well, and discover a simpler, happier you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-black rounded-full mr-4"></div>
            <p className="text-gray-700 text-xl font-medium">COMMON QUESTION</p>
            <div className="w-3 h-3 bg-black rounded-full ml-4"></div>
          </div>

          <h2 className="font-jost text-5xl md:text-6xl font-bold text-center text-gray-800 mb-12">
            MOST <span className="text-green-400">POPULAR TOPICS</span>
          </h2>

          {/* Accordion */}
          <div className="bg-gray-50 rounded-2xl shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    className="w-full flex justify-between items-center py-4 text-left group"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                      {item.question}
                    </span>
                    <div className={`text-gray-500 transition-transform duration-300 ${
                      activeAccordion === index ? 'transform rotate-180' : ''
                    }`}>
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </button>
                  {activeAccordion === index && (
                    <div className="pb-4">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;