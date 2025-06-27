import {
  BarChart2,
  Search,
  Share2,
  MessageSquare,
  FileText,
  Layout,
  Mail,
  PenTool,
  Users,
  Code,
  Smartphone,
  Monitor,
  Target,
  LucideIcon
} from 'lucide-react';

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  excerpt?: string;
  icon: LucideIcon;
  image: string;
  content: string;
  benefits: string[];
  process: ProcessStep[];
  categories?: string[];
}

export const servicesList: Service[] = [
  {
    id: 'digital-marketing',
    name: 'Digital Marketing Strategy',
    description: 'Data-driven marketing strategies to grow your business online.',
    excerpt: 'Maximize your online growth with data-driven marketing strategies',
    icon: BarChart2,
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    content: 'Our digital marketing strategies leverage data analytics to optimize your online presence and maximize ROI through targeted campaigns. We analyze market trends, customer behavior, and competitor strategies to develop customized plans that drive measurable results for your business.',
    benefits: [
      'Increased online visibility and brand awareness',
      'Higher conversion rates and ROI',
      'Data-backed decision making',
      'Multi-channel integration',
      'Continuous performance tracking and optimization'
    ],
    process: [
      { 
        title: 'Discovery', 
        description: 'Comprehensive analysis of your business goals, target audience, and current digital presence' 
      },
      { 
        title: 'Strategy', 
        description: 'Development of customized marketing plans tailored to your specific objectives' 
      },
      { 
        title: 'Implementation', 
        description: 'Execution of campaigns across multiple digital platforms with precision' 
      },
      { 
        title: 'Optimization', 
        description: 'Continuous refinement based on analytics and performance metrics' 
      }
    ],
    categories: ['marketing', 'strategy']
  },
  {
    id: 'seo',
    name: 'Search Engine Optimization',
    description: 'Improve your website visibility and organic traffic with our proven SEO strategies.',
    excerpt: 'Boost your search rankings and organic traffic',
    icon: Search,
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    content: 'Our comprehensive SEO services enhance your website ranking and drive qualified organic traffic to your business. We employ white-hat techniques that comply with search engine guidelines to deliver sustainable, long-term results.',
    benefits: [
      'Higher search engine rankings for target keywords',
      'Increased qualified organic traffic',
      'Improved user experience and site architecture',
      'Long-term sustainable results',
      'Competitive advantage in your industry'
    ],
    process: [
      { 
        title: 'Audit', 
        description: 'Complete technical and content analysis of your current website' 
      },
      { 
        title: 'On-Page SEO', 
        description: 'Optimization of content, metadata, and internal linking structure' 
      },
      { 
        title: 'Off-Page SEO', 
        description: 'Building high-quality backlinks and digital PR strategies' 
      },
      { 
        title: 'Monitoring', 
        description: 'Tracking performance metrics and adjusting strategy accordingly' 
      }
    ],
    categories: ['marketing', 'optimization']
  },
  {
    id: 'social-media',
    name: 'Social Media Marketing',
    description: 'Strategic social media campaigns to build your brand and engage your audience.',
    excerpt: 'Build your brand and engage customers through social media',
    icon: MessageSquare,
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    content: 'We create and manage social media campaigns that strengthen your brand identity across all major platforms. Our team develops platform-specific content strategies that resonate with your target audience and drive meaningful engagement.',
    benefits: [
      'Increased brand awareness and recognition',
      'Higher engagement rates with your audience',
      'Direct customer communication and feedback',
      'Improved brand loyalty and trust',
      'Valuable audience insights and analytics'
    ],
    process: [
      { 
        title: 'Strategy', 
        description: 'Developing platform-specific content plans and posting schedules' 
      },
      { 
        title: 'Content Creation', 
        description: 'Designing visually appealing posts and multimedia content' 
      },
      { 
        title: 'Community Building', 
        description: 'Growing and engaging your audience through interactions' 
      },
      { 
        title: 'Performance Analysis', 
        description: 'Measuring results and optimizing strategy based on data' 
      }
    ],
    categories: ['marketing', 'social-media']
  },
  {
    id: 'ppc',
    name: 'Pay-Per-Click Advertising',
    description: 'Targeted ad campaigns that deliver measurable results and maximize your ad spend.',
    excerpt: 'Drive qualified traffic with targeted PPC campaigns',
    icon: Share2,
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    content: 'We manage high-performing PPC campaigns across Google Ads, Bing Ads, and social platforms that drive qualified traffic to your website with maximum return on ad spend. Our data-driven approach ensures every dollar is optimized for conversions.',
    benefits: [
      'Immediate traffic generation to your website',
      'Highly targeted audience reach',
      'Full budget control and transparency',
      'Detailed performance tracking and reporting',
      'Scalable results based on performance'
    ],
    process: [
      { 
        title: 'Setup', 
        description: 'Account structure creation and audience targeting strategy' 
      },
      { 
        title: 'Launch', 
        description: 'Campaign creation and implementation across platforms' 
      },
      { 
        title: 'Optimization', 
        description: 'Continuous testing and improvement of ad performance' 
      },
      { 
        title: 'Reporting', 
        description: 'Transparent performance analysis and insights' 
      }
    ],
    categories: ['marketing', 'advertising']
  },
  {
    id: 'content-marketing',
    name: 'Content Marketing',
    description: 'Strategic content that attracts, engages, and converts your target audience.',
    excerpt: 'Attract and engage customers with valuable content',
    icon: FileText,
    image: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    content: 'We develop comprehensive content strategies that attract your ideal customers through valuable, relevant content across multiple channels. Our content is designed to educate, engage, and ultimately convert your audience while establishing your brand as an industry authority.',
    benefits: [
      'Increased organic traffic from search engines',
      'Higher engagement rates with your audience',
      'Improved brand authority and trust',
      'Better lead generation and nurturing',
      'Long-term marketing asset that continues to deliver value'
    ],
    process: [
      { 
        title: 'Strategy', 
        description: 'Content plan development and editorial calendar creation' 
      },
      { 
        title: 'Creation', 
        description: 'High-quality content production in various formats' 
      },
      { 
        title: 'Distribution', 
        description: 'Multi-channel publishing and promotion strategy' 
      },
      { 
        title: 'Analysis', 
        description: 'Performance measurement and content refinement' 
      }
    ],
    categories: ['marketing', 'content']
  },
  {
    id: 'web-development',
    name: 'Website Design & Development',
    description: 'Custom websites designed for performance, conversions, and user experience.',
    excerpt: 'Build high-performance websites that convert',
    icon: Layout,
    image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    content: 'We build high-performance websites with modern technologies that deliver exceptional user experiences and drive conversions. Our development process focuses on speed, security, and scalability while ensuring your site reflects your brand identity.',
    benefits: [
      'Improved online presence and credibility',
      'Higher conversion rates and lead generation',
      'Better user experience and navigation',
      'Technical reliability and security',
      'Future-proof architecture and scalability'
    ],
    process: [
      { 
        title: 'Planning', 
        description: 'Requirements gathering and wireframing' 
      },
      { 
        title: 'Design', 
        description: 'UI/UX mockups and prototyping' 
      },
      { 
        title: 'Development', 
        description: 'Coding and implementation of all features' 
      },
      { 
        title: 'Launch', 
        description: 'Testing, optimization, and deployment' 
      }
    ],
    categories: ['development', 'design']
  },
  {
    id: 'email-marketing',
    name: 'Email Marketing & Automation',
    description: 'Automated email campaigns that nurture leads and drive customer engagement.',
    excerpt: 'Nurture leads and engage customers through email',
    icon: Mail,
    image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    content: 'We create targeted email marketing campaigns and automation sequences that nurture leads, retain customers, and drive repeat business. Our personalized messaging strategies deliver the right content to the right audience at the optimal time.',
    benefits: [
      'Direct communication channel with customers',
      'High ROI marketing channel',
      'Automated lead nurturing sequences',
      'Personalized messaging based on behavior',
      'Measurable results and analytics'
    ],
    process: [
      { 
        title: 'Strategy', 
        description: 'Campaign planning and audience segmentation' 
      },
      { 
        title: 'Design', 
        description: 'Responsive template creation and branding' 
      },
      { 
        title: 'Execution', 
        description: 'Campaign deployment and automation setup' 
      },
      { 
        title: 'Analysis', 
        description: 'Performance review and optimization' 
      }
    ],
    categories: ['marketing', 'automation']
  },
  {
    id: 'branding',
    name: 'Brand Identity & Design',
    description: 'Cohesive visual identities that communicate your values and differentiate your business.',
    excerpt: 'Create a memorable brand identity that stands out',
    icon: PenTool,
    image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    content: 'We develop comprehensive brand identities that create memorable impressions and differentiate you from competitors. Our branding process establishes a cohesive visual language that communicates your values and resonates with your target audience.',
    benefits: [
      'Stronger brand recognition and recall',
      'Consistent visual identity across all touchpoints',
      'Professional market presence',
      'Clear differentiation from competitors',
      'Cohesive customer experience'
    ],
    process: [
      { 
        title: 'Discovery', 
        description: 'Brand workshop and research to understand your vision' 
      },
      { 
        title: 'Research', 
        description: 'Market and competitor analysis' 
      },
      { 
        title: 'Design', 
        description: 'Logo creation and visual system development' 
      },
      { 
        title: 'Delivery', 
        description: 'Brand guidelines and asset handoff' 
      }
    ],
    categories: ['design', 'branding']
  },
  {
    id: 'influencer-marketing',
    name: 'Influencer Marketing',
    description: 'Strategic partnerships with influencers to amplify your brand message.',
    excerpt: 'Leverage influencer partnerships to reach new audiences',
    icon: Users,
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    content: 'We connect your brand with relevant influencers to create authentic content that reaches your target audience effectively. Our influencer marketing strategies focus on building genuine partnerships that align with your brand values and marketing objectives.',
    benefits: [
      'Expanded audience reach through trusted voices',
      'Increased brand credibility and trust',
      'Authentic content creation',
      'Higher engagement rates than traditional ads',
      'Targeted demographic access'
    ],
    process: [
      { 
        title: 'Research', 
        description: 'Influencer identification and vetting for brand fit' 
      },
      { 
        title: 'Outreach', 
        description: 'Partnership negotiations and agreement' 
      },
      { 
        title: 'Execution', 
        description: 'Campaign management and content coordination' 
      },
      { 
        title: 'Analysis', 
        description: 'Performance reporting and ROI measurement' 
      }
    ],
    categories: ['marketing', 'social-media']
  },
  {
    id: 'software-development',
    name: 'Custom Software Development',
    description: 'Tailored software solutions that solve business challenges and drive efficiency.',
    excerpt: 'Build custom software for your unique business needs',
    icon: Code,
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    content: 'We build tailored software solutions that streamline operations, solve business challenges, and create competitive advantages. Our development process focuses on understanding your unique requirements and delivering scalable, maintainable solutions.',
    benefits: [
      'Customized solutions for your specific needs',
      'Improved operational efficiency',
      'Competitive advantage in your industry',
      'Scalable architecture for future growth',
      'Ongoing support and maintenance'
    ],
    process: [
      { 
        title: 'Analysis', 
        description: 'Requirements gathering and planning' 
      },
      { 
        title: 'Design', 
        description: 'System architecture and UX planning' 
      },
      { 
        title: 'Development', 
        description: 'Coding and implementation' 
      },
      { 
        title: 'Deployment', 
        description: 'Testing, launch, and training' 
      }
    ],
    categories: ['development', 'software']
  },
  {
    id: 'mobile-apps',
    name: 'Mobile App Development',
    description: 'Engaging mobile experiences for iOS and Android that drive business growth.',
    excerpt: 'Create powerful mobile experiences for your customers',
    icon: Smartphone,
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    content: 'We create high-performance mobile applications that deliver seamless user experiences and drive business growth. Our mobile development expertise covers both iOS and Android platforms, with a focus on intuitive design and robust functionality.',
    benefits: [
      'Enhanced customer engagement through mobile',
      'Direct marketing channel to your audience',
      'Improved accessibility and convenience',
      'Competitive differentiation',
      'New revenue opportunities'
    ],
    process: [
      { 
        title: 'Planning', 
        description: 'Feature specification and technical requirements' 
      },
      { 
        title: 'Design', 
        description: 'UI/UX development and prototyping' 
      },
      { 
        title: 'Development', 
        description: 'App coding and feature implementation' 
      },
      { 
        title: 'Launch', 
        description: 'App store deployment and marketing' 
      }
    ],
    categories: ['development', 'mobile']
  },
  {
    id: 'ui-ux',
    name: 'UI/UX Design',
    description: 'Intuitive interfaces and user experiences that delight your customers.',
    excerpt: 'Design experiences that users love',
    icon: Monitor,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    content: 'We craft user-centered digital experiences that improve satisfaction, increase conversions, and reduce development costs. Our design process combines aesthetic appeal with functional usability to create interfaces that users love.',
    benefits: [
      'Improved user satisfaction and retention',
      'Higher conversion rates',
      'Reduced development costs through proper planning',
      'Faster task completion for users',
      'Competitive differentiation through design'
    ],
    process: [
      { 
        title: 'Research', 
        description: 'User needs analysis and journey mapping' 
      },
      { 
        title: 'Wireframing', 
        description: 'Structural layout and information architecture' 
      },
      { 
        title: 'Design', 
        description: 'Visual interface and interaction design' 
      },
      { 
        title: 'Testing', 
        description: 'User validation and feedback implementation' 
      }
    ],
    categories: ['design', 'ux']
  },
  {
    id: 'conversion-optimization',
    name: 'Conversion Rate Optimization',
    description: 'Data-driven improvements to boost conversions and maximize your existing traffic.',
    excerpt: 'Turn more visitors into customers',
    icon: Target,
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    content: 'We use data and testing to systematically improve your conversion rates and maximize the value of your existing traffic. Our CRO process identifies barriers to conversion and implements solutions that drive measurable improvements in your key metrics.',
    benefits: [
      'Increased conversion rates',
      'Higher revenue per visitor',
      'Better user experience',
      'Data-backed decisions',
      'Continuous improvement through testing'
    ],
    process: [
      { 
        title: 'Audit', 
        description: 'Identifying conversion barriers and opportunities' 
      },
      { 
        title: 'Testing', 
        description: 'Implementing A/B and multivariate tests' 
      },
      { 
        title: 'Analysis', 
        description: 'Evaluating test results and user behavior' 
      },
      { 
        title: 'Implementation', 
        description: 'Applying winning variations site-wide' 
      }
    ],
    categories: ['marketing', 'optimization']
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return servicesList.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): Service[] => {
  return servicesList.filter(service => 
    service.categories?.includes(category)
  );
};

export const getFeaturedServices = (): Service[] => {
  return servicesList.filter(service => 
    service.categories?.includes('featured')
  );
};

export const searchServices = (query: string): Service[] => {
  const lowerQuery = query.toLowerCase();
  return servicesList.filter(service => 
    service.name.toLowerCase().includes(lowerQuery) ||
    service.description.toLowerCase().includes(lowerQuery) ||
    service.content.toLowerCase().includes(lowerQuery)
  );
};