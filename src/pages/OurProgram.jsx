
import React, { useEffect, useState } from 'react';

const OurProgram = () => {
  const [activeService, setActiveService] = useState('serene');

  const showContent = (serviceId) => {
    setActiveService(serviceId);
  };

  useEffect(() => {
    // Service Item Hover Effects
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-2px)';
      });
      item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
      });
    });
  }, []);

  return (
    <div className="bg-white font-sans font-poppins">
      {/* 1. HERO PROGRAMS SECTION - */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/*  */}
        </div>
        <div className="w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-stretch">
            <div className="lg:w-2/5 flex flex-col justify-center px-8 lg:px-12 xl:px-20 py-12 lg:py-0">
              <h1 className="font-jost text-green-800 text-5xl lg:text-7xl leading-none mb-6">
                OUR PROGRAMS
              </h1>
              <div className="flex items-center space-x-4 mb-8">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-green-800 text-xl sm:text-2xl md:text-xl tracking-wide">
                  WE PROVIDED TO YOU
                </span>
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              </div>
            </div>
            <div className="lg:w-3/5 w-full min-h-[50vh] lg:min-h-screen">
              <img 
                className="w-full h-full object-cover rounded-bl-[40px] lg:rounded-bl-[60px] rounded-tr-[20px] lg:rounded-tr-none"
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                alt="Wellness Programs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. OFFERING PROGRAM SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-green-800 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-black rounded-full mr-4"></div>
            <p className="text-xl font-medium">YOU CAN CHOOSE</p>
            <div className="w-3 h-3 bg-black rounded-full ml-4"></div>
          </div>
          <h2 className="font-jost text-6xl mb-12">OFFERING PROGRAM</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Alignment Pilates", time: "08:30 AM - 10:30 AM", days: "Monday - Wednesday", img: "/assets/aboutus1.png" },
            { title: "Alignment Pilates", time: "08:30 AM - 10:30 AM", days: "Monday - Wednesday", img: "/assets/aboutus1.png" },
            { title: "Alignment Pilates", time: "08:30 AM - 10:30 AM", days: "Monday - Wednesday", img: "/assets/aboutus1.png" },
            { title: "Alignment Pilates", time: "08:30 AM - 10:30 AM", days: "Monday - Wednesday", img: "/assets/aboutus1.png" },
            { title: "Alignment Pilates", time: "08:30 AM - 10:30 AM", days: "Monday - Wednesday", img: "/assets/aboutus1.png" },
            { title: "Alignment Pilates", time: "08:30 AM - 10:30 AM", days: "Monday - Wednesday", img: "/assets/aboutus1.png" },
          ].map((program, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-green-900 to-gray-400 rounded-full p-2 mx-auto w-24 h-24 flex items-center justify-center mb-4">
                <img src={program.img} alt={program.title} className="w-full h-full rounded-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">{program.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{`This service goes beyond physical exercise by using the precise principles of Pilates to consciously align your body, mind, and energetic flow.`}</p>
              <div className="flex items-center mb-2">
                <i className="fa-solid fa-clock mr-2 text-green-500"></i>
                <span>{program.time}</span>
              </div>
              <div className="flex items-center mb-4">
                <i className="fa-solid fa-calendar-days mr-2 text-green-500"></i>
                <span>{program.days}</span>
              </div>
              <div className="text-right">
                <button className="text-green-500 font-semibold hover:text-green-700 transition-colors">
                  ______Join Classes
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUR SERVICES SECTION */}
      <section className="py-16 bg-white max-w-7xl mx-auto px-4">
        <div className="text-center text-green-800 mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-green-800 rounded-full mr-4"></div>
            <p className="text-xl font-medium">WHAT WE DO</p>
            <div className="w-3 h-3 bg-green-800 rounded-full ml-4"></div>
          </div>
          <h2 className="font-jost text-6xl mb-12">OUR SERVICE</h2>
        </div>

        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { id: 'serene', title: 'SERENE ENERGY HEALING', desc: 'This gentle, heart-centered healing service is for those deeply aligned with the peaceful and transformative energy...' },
              { id: 'detox', title: 'DETOX', desc: 'Enhancing blood circulation, releasing muscle tension, and awakening your chakra system...' },
              { id: 'wealth', title: 'UNLOCK WEALTH GEM MENTORING', desc: 'We help you unlock your inner "wealth gem" by aligning your energy with the frequency of abundance...' }
            ].map((service) => (
              <div
                key={service.id}
                className={`service-item rounded-lg border border-gray-200 p-6 bg-green-400 cursor-pointer transition-all ${
                  activeService === service.id ? 'bg-green-500 text-white' : 'hover:bg-green-500 hover:text-white'
                }`}
                onClick={() => showContent(service.id)}
              >
                <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                <p className="text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-2/5 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
              alt="Healing Services" 
              className="w-full max-w-md rounded-2xl shadow-lg"
            />
          </div>
          <div className="lg:w-3/5">
            {activeService === 'serene' && (
              <div className="content-section active rounded-2xl bg-green-50 p-6 sm:p-8">
                <h2 className="mb-6 text-3xl font-bold text-gray-800">SERENE ENERGY HEALING</h2>
                <div className="space-y-4 text-gray-700">
                  <p>This gentle, heart-centered healing service is for those deeply aligned with the peaceful and transformative energy of the Helen Healing Resort.</p>
                  <ul className="space-y-3">
                    {['Heart-centered healing approach', 'Peaceful and transformative energy work', 'Deep alignment with resort energy', 'Gentle, non-invasive techniques'].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <i className="fas fa-heart mt-1 mr-3 text-green-500"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {activeService === 'detox' && (
              <div className="content-section active rounded-2xl bg-green-50 p-6 sm:p-8">
                <h2 className="mb-6 text-3xl font-bold text-gray-800">DETOX</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Enhancing blood circulation, releasing muscle tension, and awakening your chakra system-to infuse your daily lifestyle with vibrant, life-force energy and resilient well-being.</p>
                  <ul className="space-y-3">
                    {['Enhanced blood circulation', 'Muscle tension release', 'Chakra system awakening', 'Life-force energy infusion'].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <i className="fas fa-tint mt-1 mr-3 text-green-500"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {activeService === 'wealth' && (
              <div className="content-section active rounded-2xl bg-green-50 p-6 sm:p-8">
                <h2 className="mb-6 text-3xl font-bold text-gray-800">UNLOCK WEALTH GEM MENTORING</h2>
                <div className="space-y-4 text-gray-700">
                  <p>We help you unlock your inner "wealth gem" by aligning your energy with the frequency of abundance, attracting opportunities and resources that reflect your most authentic self.</p>
                  <ul className="space-y-3">
                    {['Inner wealth gem activation', 'Energy alignment with abundance', 'Opportunity attraction techniques', 'Authentic self-expression'].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <i className="fas fa-gem mt-1 mr-3 text-green-500"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. MONTHLY ORACLE SECTION */}
      <section className="py-16 bg-gray-900 text-white max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">MONTHLY ORACLE GUIDANCE</h2>
          <div className="h-1 w-20 bg-green-500 mx-auto mb-6"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl leading-relaxed mb-8">
            Receive divine clarity and direction with our monthly Oracle and Tarot readings, released on our YouTube channel. 
            For those seeking a deeply personal and specific message, we offer private, one-on-one consultations to connect 
            directly with your energy. To embark on this tailored journey, please reach out to us via email or Telegram.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors">
              Watch on YouTube
            </button>
            <button className="border border-green-500 text-green-500 font-bold py-3 px-8 rounded-lg hover:bg-green-500 hover:text-white transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* 5. COMPARISON SECTION */}
      <section className="py-16 bg-gray-200 max-w-7xl mx-auto px-4">
        <div className="text-center text-green-800 mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-green-800 rounded-full mr-4"></div>
            <p className="text-xl font-medium">CHOOSE YOUR PLAN</p>
            <div className="w-3 h-3 bg-green-800 rounded-full ml-4"></div>
          </div>
          <h2 className="font-jost text-6xl mb-12">INVEST MY NEW BEST <br /> VERSION</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'STANDARD', price: 0, emoji: '🌱', features: ['Limited Training Hours', 'No Cancel Anytime', 'No Hidden Fees', 'No Ancillaries Access'] },
            { title: 'SLIVER 1 MONTH', price: 33, emoji: '🧘', features: ['Daily Yoga Sessions', 'Advanced Poses', 'Breathwork Training', 'Flexibility Coaching'] },
            { title: 'DIAMOND YEARLY', price: 888, emoji: '⚡', features: ['24 Hours Message', 'Cancel Anytime', 'No Hidden Fees', 'Weekly Follow Up'] },
            { 
              title: 'PREMIUM 6 MONTHS', price: 111, emoji: '⭐', features: ['Everything in Essential +', '1-on-1 Coaching Sessions', 'Personalized Meal Plans', 'Advanced Energy Healing', 'Priority Support'], 
              popular: true 
            }
          ].map((plan, index) => (
            <div key={index} className={`comparison-card rounded-3xl border-l-4 border-green-500 bg-gray-50 p-6 relative hover:shadow-xl transition-all ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
              {plan.popular && <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">MOST POPULAR</div>}
              <div className="mb-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl">
                  <span>{plan.emoji}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-green-700">{plan.title}</h3>
                <div className="mb-4 text-2xl font-bold text-green-600">
                  ${plan.price}<span className="text-lg text-green-500">/month</span>
                </div>
                <div className="mx-auto h-1 w-full bg-green-500"></div>
              </div>
              <div className="mb-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                      <span className="text-sm text-white">✓</span>
                    </div>
                    <span className="text-sm text-green-700">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="w-full rounded-3xl bg-green-500 py-3 text-sm font-bold text-white transition-colors hover:bg-green-600">
                GET STARTED
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurProgram;