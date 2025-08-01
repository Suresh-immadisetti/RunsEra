import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

function Blogs() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      id: 'digital-marketing-trends',
      title: "The Future of Digital Marketing in 2025",
      excerpt: "Discover the latest trends and strategies that will shape digital marketing in the coming year. Learn how AI and automation are revolutionizing customer engagement.",
      category: "Digital Marketing",
      date: "March 01, 2025",
      author: "Sarah Johnson",
      authorRole: "Marketing Director",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      featured: true
    },
    {
      id: 'responsive-websites',
      title: "Building Responsive Websites: 2025 Best Practices",
      excerpt: "Learn the essential techniques for creating websites that work perfectly on all devices. We cover modern CSS techniques and performance optimization.",
      category: "Web Development",
      date: "December 08, 2025",
      author: "Michael Chen",
      authorRole: "Lead Frontend Developer",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg",
      featured: true
    },
    {
      id: 'seo-strategies',
      title: "SEO Strategies That Actually Work in 2025",
      excerpt: "Proven SEO techniques to improve your website's visibility and search rankings. Includes the latest Google algorithm updates and content strategies.",
      category: "SEO",
      date: "May 25, 2025",
      author: "David Wilson",
      authorRole: "SEO Specialist",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg"
    },
    {
      id: 'mobile-app-development',
      title: "Mobile App Development: Native vs Cross-Platform in 2025",
      excerpt: "Compare different approaches to mobile app development and choose the right one for your project. Includes Flutter vs React Native benchmarks.",
      category: "Mobile Development",
      date: "April 02, 2025",
      author: "Emma Rodriguez",
      authorRole: "Mobile Team Lead",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg"
    },
    {
      id: 'social-media-marketing',
      title: "Social Media Marketing: 2025 Trends and Actionable Tips",
      excerpt: "Stay ahead of the curve with the latest social media marketing strategies. Covers TikTok, Instagram Reels, and LinkedIn content strategies.",
      category: "Social Media",
      date: "September 09, 2025",
      author: "James Peterson",
      authorRole: "Social Media Manager",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg"
    },
    {
      id: 'ecommerce-success',
      title: "E-commerce Success: From Setup to Scale in 2025",
      excerpt: "Complete guide to building and scaling a successful e-commerce business online. Includes conversion optimization and customer retention strategies.",
      category: "E-commerce",
      date: "August 02, 2025",
      author: "Lisa Thompson",
      authorRole: "E-commerce Consultant",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"
    },
    {
      id: 'content-strategy',
      title: "Content Strategy That Converts: 2025 Edition",
      excerpt: "Learn how to create content that drives engagement and conversions. Includes AI content tools and multimedia strategy.",
      category: "Content Marketing",
      date: "June 15, 2025",
      author: "Robert Kim",
      authorRole: "Content Strategist",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/2696299/pexels-photo-2696299.jpeg"
    },
    {
      id: 'web-performance',
      title: "Web Performance Optimization: Advanced Techniques",
      excerpt: "Take your website speed to the next level with these advanced optimization techniques. Real-world case studies included.",
      category: "Web Development",
      date: "July 22, 2025",
      author: "Natalie Wong",
      authorRole: "Performance Engineer",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
    }
  ];

  const categories = ["All", "Digital Marketing", "Web Development", "SEO", "Mobile Development", "Social Media", "E-commerce", "Content Marketing"];

  // Filter blog posts based on active category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#002E6E]/90 to-[#00AEEF]/90"></div>
        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-lg font-semibold mb-8 border border-white/30">
              Insights & Resources
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              RunSera <span className="text-[#00f2fe]">Knowledge Hub</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Expert articles, guides and industry insights to help you grow in the digital world
            </p>
          </div>
        </div>
        <div className="relative h-20 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none">
            <path d="M0,37 C240,74 480,74 720,37 C960,0 1200,0 1440,37 L1440,74 L0,74 Z" fill="#f0f9ff" />
          </svg>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#002E6E] mb-4">
                Featured <span className="text-[#00AEEF]">Articles</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our most popular and insightful content
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="relative group rounded-xl overflow-hidden shadow-lg h-96"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002E6E]/90 to-transparent"></div>
                  <div className="relative h-full flex flex-col justify-end p-8">
                    <div className="text-sm text-[#00f2fe] font-semibold mb-2">{post.category}</div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00f2fe] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-200 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-300">
                        <div>{post.date}</div>
                        <div>{post.readTime}</div>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="flex items-center text-white hover:text-[#00f2fe] font-semibold transition-colors group-hover:underline"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Categories */}
      <section className="py-12 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                    activeCategory === category
                      ? 'bg-[#00AEEF] text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-2xl font-semibold text-gray-700">No articles found</h3>
              <p className="mt-2 text-gray-500">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#00AEEF] hover:bg-[#0086c3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00AEEF]"
              >
                View All Articles
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 flex flex-col"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#00AEEF] text-white">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#00AEEF] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.authorRole}</p>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="flex items-center text-[#00AEEF] hover:text-[#002E6E] font-semibold transition-colors group-hover:underline"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Stay Updated With Our Latest Insights
            </h2>
            <p className="text-xl text-gray-200 mb-12">
              Join our newsletter to receive expert articles, industry trends, and exclusive content straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#00AEEF]"
              />
              <button className="px-8 py-3 bg-white text-[#002E6E] font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-300 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;