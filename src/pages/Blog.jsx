
import React from 'react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "10 Yoga Poses for Beginners",
      excerpt: "Discover simple yoga poses that will transform your flexibility and reduce stress in just 15 minutes a day.",
      image: "https://images.unsplash.com/photo-1571115626860-647b0b2e0e0f?w=800&h=400&fit=crop",
      date: "Jan 15, 2025",
      readTime: "5 min",
      author: "Maya Wellness"
    },
    {
      id: 2,
      title: "Morning Meditation Guide",
      excerpt: "Start your day with clarity and peace using our 10-minute guided meditation routine for beginners.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      date: "Jan 12, 2025",
      readTime: "4 min",
      author: "Zen Master"
    },
    {
      id: 3,
      title: "Pilates vs Yoga: Which is Right?",
      excerpt: "Confused about Pilates vs Yoga? Learn the differences and choose the perfect practice for your goals.",
      image: "https://images.unsplash.com/photo-1616460602930-629a271b76fc?w=800&h=400&fit=crop",
      date: "Jan 10, 2025",
      readTime: "6 min",
      author: "Lila Yoga"
    },
    {
      id: 4,
      title: "Breathing Techniques for Stress",
      excerpt: "Master 5 powerful breathing exercises to instantly calm your mind and reduce anxiety anywhere, anytime.",
      image: "https://images.unsplash.com/photo-1544718045-1982b8a8fc9b?w=800&h=400&fit=crop",
      date: "Jan 8, 2025",
      readTime: "3 min",
      author: "Maya Wellness"
    },
    {
      id: 5,
      title: "Yoga for Better Sleep",
      excerpt: "Struggling with sleep? Try these 7 yoga poses before bed to fall asleep faster and wake up refreshed.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=400&fit=crop",
      date: "Jan 5, 2025",
      readTime: "5 min",
      author: "Zen Master"
    },
    {
      id: 6,
      title: "Beginner’s Guide to Mindfulness",
      excerpt: "Learn mindfulness basics and start your journey to inner peace with our step-by-step beginner guide.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop",
      date: "Jan 3, 2025",
      readTime: "7 min",
      author: "Lila Yoga"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* 📰 HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <img 
          src="/assets/blog.jpg"
          className="w-full h-full object-cover" 
          alt="Blog Background" 
        />
        <div className="absolute inset-0 bg-gradient-to-br"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Wellness Blog</h1>
        <p className="text-xl md:text-2xl opacity-90 drop-shadow-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </section>

    
    {/*POSTS GRID */}
    <section className="py-16 px-4">
      {/* ... custom grid line content or blog ... */}
     
    </section>

      {/* POSTS GRID */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="mr-4">{post.date}</span>
                    <span>•</span>
                    <span className="ml-4">{post.readTime} read</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-semibold">{post.author}</span>
                    <button className="text-green-600 hover:text-green-700 font-medium flex items-center space-x-1">
                      <i className="fas fa-arrow-right"></i>
                      <span>Read More</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Load More Posts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;