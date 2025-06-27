import React, { useState } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Blogs() {
  const [activeCategory, setActiveCategory] = useState("All");

  const blogPosts = [
    {
      id: 'digital-marketing-trends',
      title: "The Future of Digital Marketing in 2025",
      excerpt: "Discover the latest trends and strategies that will shape digital marketing in the coming year.",
      category: "Digital Marketing",
      date: "MARCH 01, 2025",
      author: "RunSera Team",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
    },
    {
      id: 'responsive-websites',
      title: "Building Responsive Websites: Best Practices",
      excerpt: "Learn the essential techniques for creating websites that work perfectly on all devices.",
      category: "Web Development",
      date: "DEC 08, 2025",
      author: "RunSera Team",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg"
    },
    {
      id: 'seo-strategies',
      title: "SEO Strategies That Actually Work in 2025",
      excerpt: "Proven SEO techniques to improve your website's visibility and search rankings.",
      category: "SEO",
      date: "MAY 25, 2025",
      author: "RunSera Team",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg"
    },
    {
      id: 'mobile-app-development',
      title: "Mobile App Development: Native vs Cross-Platform",
      excerpt: "Compare different approaches to mobile app development and choose the right one for your project.",
      category: "Mobile Development",
      date: "APRIL 02, 2024",
      author: "RunSera Team",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg"
    },
    {
      id: 'social-media-marketing',
      title: "Social Media Marketing: Trends and Tips",
      excerpt: "Stay ahead of the curve with the latest social media marketing strategies and trends.",
      category: "Social Media",
      date: "SEPT 09, 2024",
      author: "RunSera Team",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg"
    },
    {
      id: 'ecommerce-success',
      title: "E-commerce Success: From Setup to Scale",
      excerpt: "Complete guide to building and scaling a successful e-commerce business online.",
      category: "E-commerce",
      date: "AUG 02, 2024",
      author: "RunSera Team",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"
    }
  ];

  const categories = ["All", "Digital Marketing", "Web Development", "SEO", "Mobile Development", "Social Media", "E-commerce"];

  // Filter blog posts based on active category
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/close-up-image-business-hands-using-laptop_53876-20654.jpg?ga=GA1.1.1955968501.1745332100&semt=ais_hybrid&w=740')",
        }}
      >
        <div className="absolute inset-0 bg-[#002E6E]/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-28 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-[#00AEEF] text-white rounded-full text-lg font-semibold mb-8">
              Our Blog
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Latest <span className="text-[#00AEEF]">Insights</span>
            </h1>
            <p className="text-2xl text-gray-200 leading-relaxed">
              Stay updated with the latest trends and insights in digital marketing and technology
            </p>
          </div>
        </div>
        <div className="relative h-16 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none">
            <path d="M0,37 C240,74 480,74 720,37 C960,0 1200,0 1440,37 L1440,74 L0,74 Z" fill="#f0f9ff" />
          </svg>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-[#00AEEF] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-[#00AEEF] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-gray-700">No posts found in this category</h3>
              <p className="text-gray-500 mt-2">Check back later for new content</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group h-full flex flex-col"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002E6E]/60 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="text-sm text-[#00AEEF] font-semibold mb-2">{post.category}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#00AEEF] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="flex items-center text-[#00AEEF] hover:text-[#002E6E] font-semibold transition-colors self-start group-hover:underline"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#002E6E] to-[#00AEEF] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Want More Insights?
          </h2>
          <p className="text-2xl text-gray-200 max-w-2xl mx-auto mb-12">
            Subscribe to our newsletter for regular updates and exclusive content.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#002E6E] hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-transform transform hover:scale-105"
          >
            Subscribe Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Blogs;