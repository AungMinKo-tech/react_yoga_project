// src/components/OurProgram.jsx - 100% COMPLETE ONE FILE!
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const OurProgram = () => {
  const [activeService, setActiveService] = useState('serene');
  const [currentSlide, setCurrentSlide] = useState(0);

  const showContent = (serviceId) => {
    setActiveService(serviceId);
  };

  // Hover Effects
  useEffect(() => {
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

  // Testimonials Navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const testimonials = [
    {
      id: 1, name: "Sara", location: "MEN/GER", rating: 5,
      title: "UNLOCK WEALTH GEM", subtitle: "MENTORING",
      text: "Wonderful insights of soul, body, health, wealth, love abundance from Helen Healing Academy"
    },
    {
      id: 2, name: "John", location: "USA/NYC", rating: 5,
      title: "LIFE TRANSFORMATION", subtitle: "COACHING",
      text: "Amazing journey of self-discovery and personal growth with Helen's guidance"
    },
    {
      id: 3, name: "Maria", location: "SPAIN/MAD", rating: 5,
      title: "SOUL AWAKENING", subtitle: "HEALING",
      text: "Transformative experience that changed my perspective on life and abundance"
    }
  ];

  return (
    <div className="bg-white font-sans font-poppins">
      {/* 1️⃣ HERO PROGRAMS SECTION */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
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

      {/* 2️⃣ OFFERING PROGRAMS GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-green-800 text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-black rounded-full mr-4"></div>
            <p className="text-xl font-medium">YOU CAN CHOOSE</p>
            <div className="w-3 h-3 bg-black rounded-full ml-4"></div>
          </div>
          <h2 className="font-jost text-6xl mb-12">OFFERING PROGRAM</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Alignment Pilates", time: "08:30 AM - 10:30 AM", days: "Mon - Wed", img: "/assets/aboutus1.png" },
            { title: "Hatha Yoga Flow", time: "06:00 AM - 08:00 AM", days: "Tue - Thu", img: "/assets/aboutus1.png" },
            { title: "Yin Yoga", time: "07:00 PM - 08:30 PM", days: "Mon - Fri", img: "/assets/aboutus1.png" },
            { title: "Vinyasa Flow", time: "09:00 AM - 11:00 AM", days: "Wed - Sat", img: "/assets/aboutus1.png" },
            { title: "Restorative Yoga", time: "08:00 PM - 09:30 PM", days: "Everyday", img: "/assets/aboutus1.png" },
            { title: "Meditation Circle", time: "06:30 AM - 07:30 AM", days: "Sun - Sat", img: "/assets/aboutus1.png" },
          ].map((program, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-green-900 to-gray-400 rounded-full p-2 mx-auto w-24 h-24 flex items-center justify-center mb-4">
                <img src={program.img} alt={program.title} className="w-full h-full rounded-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">{program.title}</h3>
              <p className="text-gray-600 mb-4 text-center text-sm">Align body, mind, and energy through conscious movement.</p>
              <div className="flex items-center mb-2 text-sm">
                <i className="fa-solid fa-clock mr-2 text-green-500"></i>
                <span>{program.time}</span>
              </div>
              <div className="flex items-center mb-4 text-sm">
                <i className="fa-solid fa-calendar-days mr-2 text-green-500"></i>
                <span>{program.days}</span>
              </div>
              <button className="w-full text-green-500 font-semibold hover:text-green-700 transition-colors border-t pt-3">
                Join Classes →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3️⃣ OUR SERVICES INTERACTIVE */}
      <section className="py-20 bg-white max-w-7xl mx-auto px-4">
        <div className="text-center text-green-800 mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-green-800 rounded-full mr-4"></div>
            <p className="text-xl font-medium">WHAT WE DO</p>
            <div className="w-3 h-3 bg-green-800 rounded-full ml-4"></div>
          </div>
          <h2 className="font-jost text-6xl mb-12">OUR SERVICE</h2>
        </div>

        {/* Service Tabs */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { id: 'serene', title: 'SERENE ENERGY HEALING', desc: 'Heart-centered healing with peaceful energy' },
              { id: 'detox', title: 'DETOX', desc: 'Cleanse body & awaken chakras' },
              { id: 'wealth', title: 'UNLOCK WEALTH GEM', desc: 'Align energy with abundance' }
            ].map((service) => (
              <div
                key={service.id}
                className={`service-item rounded-lg border border-gray-200 p-6 cursor-pointer transition-all ${
                  activeService === service.id ? 'bg-green-500 text-white shadow-lg' : 'hover:bg-green-100'
                }`}
                onClick={() => showContent(service.id)}
              >
                <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                <p className="text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Content + Image */}
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
              <div className="rounded-2xl bg-green-50 p-8 border border-green-200">
                <h2 className="mb-6 text-3xl font-bold text-gray-800">SERENE ENERGY HEALING</h2>
                <ul className="space-y-3 text-gray-700">
                  {['Heart-centered healing approach', 'Peaceful energy work', 'Deep alignment', 'Gentle techniques'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <i className="fas fa-heart mt-1 mr-3 text-green-500"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeService === 'detox' && (
              <div className="rounded-2xl bg-green-50 p-8 border border-green-200">
                <h2 className="mb-6 text-3xl font-bold text-gray-800">DETOX</h2>
                <ul className="space-y-3 text-gray-700">
                  {['Enhanced blood circulation', 'Muscle tension release', 'Chakra awakening', 'Life-force energy'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <i className="fas fa-tint mt-1 mr-3 text-green-500"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeService === 'wealth' && (
              <div className="rounded-2xl bg-green-50 p-8 border border-green-200">
                <h2 className="mb-6 text-3xl font-bold text-gray-800">UNLOCK WEALTH GEM</h2>
                <ul className="space-y-3 text-gray-700">
                  {['Inner wealth activation', 'Abundance alignment', 'Opportunity attraction', 'Authentic expression'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <i className="fas fa-gem mt-1 mr-3 text-green-500"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4️⃣ MONTHLY ORACLE */}
      <section className="py-20 bg-gray-900 text-white max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">MONTHLY ORACLE GUIDANCE</h2>
          <div className="h-1 w-20 bg-green-500 mx-auto mb-6"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl leading-relaxed mb-8">
            Receive divine clarity with monthly Oracle & Tarot readings on YouTube. 
            Book private 1-on-1 consultations via email or Telegram.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600">
              Watch on YouTube
            </button>
            <button className="border border-green-500 text-green-500 font-bold py-3 px-8 rounded-lg hover:bg-green-500">
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* 5️⃣ PRICING PLANS */}
      <section className="py-20 bg-gray-200 max-w-7xl mx-auto px-4">
        <div className="text-center text-green-800 mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-green-800 rounded-full mr-4"></div>
            <p className="text-xl font-medium">CHOOSE YOUR PLAN</p>
            <div className="w-3 h-3 bg-green-800 rounded-full ml-4"></div>
          </div>
          <h2 className="font-jost text-6xl mb-12">INVEST IN YOUR BEST VERSION</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'STANDARD', price: 0, emoji: '🌱', features: ['Limited Hours', 'No Cancel', 'No Access'] },
            { title: 'SILVER 1M', price: 33, emoji: '🧘', features: ['Daily Yoga', 'Breathwork', 'Flexibility'] },
            { title: 'DIAMOND 1Y', price: 888, emoji: '⚡', features: ['24/7 Support', 'Cancel Anytime', 'Weekly Check-in'] },
            { title: 'PREMIUM 6M', price: 111, emoji: '⭐', features: ['1-on-1 Coaching', 'Meal Plans', 'Energy Healing'], popular: true }
          ].map((plan, index) => (
            <div key={index} className={`comparison-card rounded-3xl border-l-4  bg-white p-6 relative hover:shadow-xl transition-all ${plan.popular ? '' : ''}`}>
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
              <button className="w-full rounded-3xl bg-green-500 py-3 text-sm font-bold text-white hover:bg-green-600">
                GET STARTED
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 6️⃣ TESTIMONIALS SLIDER */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center text-green-800 mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-green-800 rounded-full mr-4"></div>
            <p className="text-xl font-medium">TESTIMONIALS</p>
            <div className="w-3 h-3 bg-green-800 rounded-full ml-4"></div>
          </div>
          <h2 className="font-jost text-6xl mb-12">OUR CUSTOMER SAY</h2>
        </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Arrows */}
            <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg z-10 border hover:border-gray-300">
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg z-10 border hover:border-gray-300">
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Slider */}
            <div className="flex overflow-hidden rounded-2xl bg-white shadow-xl border">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className={`flex-shrink-0 w-full transition-transform duration-500 ${index === currentSlide ? 'translate-x-0' : 'translate-x-full'}`} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  <div className="p-8 md:p-12">
                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-center mb-8">
                      <p className="text-xl text-gray-700 italic">"{testimonial.text}"</p>
                    </blockquote>

                    {/* Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-gray-200">
                      <div className="text-center md:text-left">
                        <h4 className="text-2xl font-bold text-gray-800">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm uppercase">{testimonial.location}</p>
                      </div>
                      <div className="text-center md:text-right">
                        <h5 className="text-xl font-semibold text-gray-800">{testimonial.title}</h5>
                        <p className="text-gray-600 text-sm uppercase">{testimonial.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-gray-800 w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProgram;