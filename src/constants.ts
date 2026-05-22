/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Project, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'wp-dev',
    title: 'WordPress Development',
    description: 'Custom WordPress websites built for performance, flexibility, and long-term scalability.',
    icon: 'Layout',
  },
  {
    id: 'shopify',
    title: 'Shopify Design',
    description: 'High-converting Shopify stores designed to maximize sales and improve user experience.',
    icon: 'ShoppingBag',
  },
  {
    id: 'perf-marketing',
    title: 'Performance Marketing',
    description: 'Strategic ad campaigns designed to drive targeted traffic and generate measurable ROI.',
    icon: 'BarChart3',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX & Converison',
    description: 'Conversion-focused structures combined with user-centered design approaches.',
    icon: 'MousePointer2',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'w1',
    slug: 'withcaress-website',
    title: 'Withcaress Website Design',
    category: 'Website / WordPress',
    mainCategory: 'WordPress',
    tags: ['WordPress', 'Website', 'Design'],
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop',
    description: 'Complete website design and development for Withcaress.',
    fileUrl: '/websites/Withcaress.pdf',
    fileType: 'pdf',
  },
  {
    id: 'w2',
    slug: 'accessorybooth-website',
    title: 'AccessoryBooth E-commerce',
    category: 'Website / Shopify',
    mainCategory: 'Shopify',
    tags: ['Shopify', 'E-commerce', 'Website'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
    description: 'E-commerce website design for AccessoryBooth.',
    fileUrl: '/websites/accessorybooth.pdf',
    fileType: 'pdf',
  },
  {
    id: 'w3',
    slug: 'codecubesdigital-website',
    title: 'CodeCubesDigital Agency Site',
    category: 'Corporate / WordPress',
    mainCategory: 'WordPress',
    tags: ['WordPress', 'Corporate', 'Agency'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    description: 'Corporate website development for CodeCubesDigital.',
    fileUrl: '/websites/codecubesdigital.pdf',
    fileType: 'pdf',
  },
  {
    id: 'w4',
    slug: 'decoranest-website',
    title: 'DecoraNest Interior Design',
    category: 'Website / WordPress',
    mainCategory: 'WordPress',
    tags: ['WordPress', 'Design', 'Portfolio'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    description: 'Website design and structure for DecoraNest.',
    fileUrl: '/websites/decoranest.pdf',
    fileType: 'pdf',
  },
  {
    id: 'ma1',
    slug: 'samra-ali-marketing-hub',
    title: 'Samra Ali Marketing Hub Ads',
    category: 'Meta Ads / Scaling',
    mainCategory: 'Performance Marketing',
    tags: ['Meta Ads', 'Performance', 'Reporting'],
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d9?q=80&w=1200&auto=format&fit=crop',
    description: 'Comprehensive Meta ads performance report and scaling strategy.',
    fileUrl: '/meta%20ads/Samra-Ali-Marketing-Hub.xlsx',
    fileType: 'excel',
  },
  {
    id: 'ma2',
    slug: 'fabtion-clothing-ads',
    title: 'Fabtion Clothing Brand Ads',
    category: 'Meta Ads / E-commerce',
    mainCategory: 'Performance Marketing',
    tags: ['Meta Ads', 'E-commerce', 'ROAS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    description: 'E-commerce Meta ads campaign report for Fabtion clothing brand.',
    fileUrl: '/meta%20ads/clothing%20brand%20fabtion%20(1).xlsx',
    fileType: 'excel',
  },
  {
    id: 'ma3',
    slug: 'decora-ads-report',
    title: 'Decora Ads Report',
    category: 'Meta Ads / Lead Gen',
    mainCategory: 'Performance Marketing',
    tags: ['Meta Ads', 'Lead Gen', 'Performance'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    description: 'Lead generation Meta ads performance report for Decora.',
    fileUrl: '/meta%20ads/decora%20report.xlsx',
    fileType: 'excel',
  },
  {
    id: 'ma4',
    slug: 'legacy-decora-ads',
    title: 'Legacy by Decora Ads',
    category: 'Meta Ads / Branding',
    mainCategory: 'Performance Marketing',
    tags: ['Meta Ads', 'Branding', 'Scaling'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    description: 'Performance marketing report for Legacy by Decora.',
    fileUrl: '/meta%20ads/legacy-by-decora-report.xlsx',
    fileType: 'excel',
  },
  {
    id: 'lm1',
    slug: 'modern-business-flyer',
    title: 'Modern Business Flyer',
    category: 'Design / Lead Magnet',
    mainCategory: 'Social Media',
    tags: ['Design', 'Lead Magnet', 'Print'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&auto=format&fit=crop',
    description: 'Professional business one-page flyer design.',
    fileUrl: '/Lead%20Magnets/Green%20Modern%20Profesional%20Business%20One%20Page%20Flyer%20(1).pdf',
    fileType: 'pdf',
  },
  {
    id: 'lm2',
    slug: 'lead-magnet-introduction',
    title: 'Lead Magnet Introduction',
    category: 'Design / Lead Magnet',
    mainCategory: 'Social Media',
    tags: ['Design', 'Lead Magnet', 'Document'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&auto=format&fit=crop',
    description: 'Comprehensive introduction document design for lead generation.',
    fileUrl: '/Lead%20Magnets/Introduction.pdf',
    fileType: 'pdf',
  },
  {
    id: 'lm3',
    slug: 'lead-magnet-design',
    title: 'Lead Magnet Design Concept',
    category: 'Design / Lead Magnet',
    mainCategory: 'Social Media',
    tags: ['Design', 'Lead Magnet', 'Concept'],
    image: '/Lead Magnets/Lead Magnet Design.jpg',
    description: 'Creative design concept for lead magnet materials.',
    fileUrl: '/Lead%20Magnets/Lead%20Magnet%20Design.jpg',
    fileType: 'image',
  },
  {
    id: 'lm4',
    slug: 'rewards-plan-design',
    title: 'Rewards Plan Document',
    category: 'Design / Lead Magnet',
    mainCategory: 'Social Media',
    tags: ['Design', 'Document', 'Strategy'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&auto=format&fit=crop',
    description: 'Detailed rewards plan document design for customer retention.',
    fileUrl: '/Lead%20Magnets/REWARDS%20PLAN%20(4)%20(1).pdf',
    fileType: 'pdf',
  },
  {
    id: 'p1',
    slug: 'modern-ecommerce-portal',
    title: 'Modern E-commerce Portal',
    category: 'E-commerce / Shopify',
    mainCategory: 'Shopify',
    tags: ['E-commerce', 'Shopify', 'Conversion', 'Mobile'],
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1200&auto=format&fit=crop',
    description: 'High-converting Shopify store with custom liquid sections and optimization.',
    fullDescription: 'A complete end-to-end e-commerce solution focused on maximizing average order value and streamlining the user journey.',
    challenge: 'The client had a legacy store with high bounce rates and a complex checkout process that frustrated mobile users.',
    solution: 'We rebuilt the store using a custom Shopify theme, implementing mobile-first navigation and a one-page checkout strategy.',
    client: 'Nexus Retail Group',
    year: '2024',
    results: [
      { label: 'Conversion Rate', value: '+45%' },
      { label: 'Average Order Value', value: '+22%' },
      { label: 'Mobile Performance', value: '98/100' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  {
    id: 'p2',
    slug: 'financial-services-hub',
    title: 'Financial Services Hub',
    category: 'Corporate / WordPress',
    mainCategory: 'WordPress',
    tags: ['WordPress', 'Corporate', 'Lead Gen', 'SEO'],
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1200&auto=format&fit=crop',
    description: 'Corporate platform designed for high-security and lead generation.',
    fullDescription: 'A robust WordPress multisite implementation for a global financial firm requiring strict security protocols and complex lead routing.',
    challenge: 'Managing multiple regional sites with consistent branding while maintaining independent lead generation flows.',
    solution: 'Designed a unified design system carried across a WordPress multisite network with integrated CRM syncing.',
    client: 'Global FinTech Corp',
    year: '2023',
    results: [
      { label: 'Lead Generation', value: '+130%' },
      { label: 'Page Load Speed', value: '0.8s' },
      { label: 'Security Score', value: 'A+' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  {
    id: 'p3',
    slug: 'growth-marketing-campaign',
    title: 'Growth Marketing Campaign',
    category: 'Meta Ads / Scaling',
    mainCategory: 'Performance Marketing',
    tags: ['Meta Ads', 'Performance', 'Lead Gen', 'Scaling'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    description: 'Strategic performance marketing campaign focusing on high-intent lead acquisition.',
    fullDescription: 'A cross-channel performance marketing strategy that optimized top-of-funnel awareness and bottom-of-funnel conversions.',
    challenge: 'High cost-per-acquisition (CPA) was eating into profit margins for a subscription-based fitness brand.',
    solution: 'Implemented aggressive A/B testing on ad creatives and landing pages while refining audience segmentation.',
    client: 'FitLife Subscriptions',
    year: '2023',
    results: [
      { label: 'CPA Reduction', value: '-35%' },
      { label: 'RoAS', value: '4.8x' },
      { label: 'New Subscribers', value: '5,000+' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  {
    id: 'p4',
    slug: 'saas-redesign',
    title: 'SaaS Platform Redesign',
    category: 'Product / WordPress',
    mainCategory: 'WordPress',
    tags: ['WordPress', 'SaaS', 'UI/UX', 'Conversion'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop',
    description: 'Complete visual and technical overhaul for a growing tech startup.',
    fullDescription: 'Redesigning the public-facing site for a cloud-based project management tool to better communicate value and improve signup rates.',
    challenge: 'The original site failed to differentiate the product from competitors and had a complicated pricing page.',
    solution: 'Simplified the messaging and created an interactive product tour directly on the homepage.',
    client: 'CloudFlow Systems',
    year: '2024',
    results: [
      { label: 'Signups', value: '+65%' },
      { label: 'Bounce Rate', value: '-22%' },
      { label: 'Demo Requests', value: '3x' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  {
    id: 'p5',
    slug: 'luxury-watch-boutique',
    title: 'Luxury Watch Boutique',
    category: 'Lifestyle / Shopify',
    mainCategory: 'Shopify',
    tags: ['Shopify', 'Luxury', 'E-commerce', 'Branding'],
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
    description: 'Minimalist Shopify experience for a luxury retail brand.',
    fullDescription: 'A high-end storefront where visual storytelling takes priority, reflecting the brand\'s heritage and product craftsmanship.',
    challenge: 'The challenge was to convey premium quality without sacrificing the speed and functionality of the Shopify platform.',
    solution: 'Used custom animations and a headless-inspired design approach to create a unique horizontal scrolling experience.',
    client: 'Chronograph Elite',
    year: '2023',
    results: [
      { label: 'Revenue Growth', value: '+85%' },
      { label: 'User Engagement', value: '+140%' },
      { label: 'Brand Sentiment', value: 'Excellent' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  {
    id: 'p6',
    slug: 'global-funnel-strategy',
    title: 'Global Funnel Strategy',
    category: 'Strategy / Ads',
    mainCategory: 'Performance Marketing',
    tags: ['Meta Ads', 'Funnel', 'Scaling', 'Lead Gen'],
    image: 'https://images.unsplash.com/photo-1553484771-047a44eee27b?q=80&w=1200&auto=format&fit=crop',
    description: 'Multi-region lead generation funnel for high-ticket professional services.',
    fullDescription: 'A systematic approach to scaling lead acquisition across multiple continents with localized creative strategies.',
    challenge: 'The client needed a scalable way to acquire leads in North America, Europe, and Asia with localized messaging.',
    solution: 'Engineered dynamic landing pages that adapted language and social proof based on visitor location.',
    client: 'Consulting Pro Global',
    year: '2024',
    results: [
      { label: 'Regional Leads', value: '+300%' },
      { label: 'Cost per Lead', value: '-42%' },
      { label: 'Expansion ROI', value: '620%' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1553484771-047a44eee27b?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  {
    id: 'p7',
    slug: 'social-media-brand-growth',
    title: 'Social Media Brand Growth',
    category: 'Social Media / Content',
    mainCategory: 'Social Media',
    tags: ['Social Media', 'Content', 'Branding', 'Engagement'],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop',
    description: 'Full social media overhaul delivering explosive organic growth across Instagram & LinkedIn.',
    fullDescription: 'A complete social media transformation for a lifestyle brand — from content strategy and visual identity to community management and paid amplification.',
    challenge: 'Stagnant follower counts, low engagement, and zero brand consistency across platforms despite posting daily.',
    solution: 'Rebuilt the brand voice, created a high-converting content calendar, and launched targeted Meta ad campaigns to amplify reach.',
    client: 'Elevate Lifestyle Co.',
    year: '2024',
    results: [
      { label: 'Engagement Rate', value: '+320%' },
      { label: 'Reach Growth', value: '4.1X' },
      { label: 'Cost Per Lead', value: '-38%' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1611162616305-c69b3037c7bb?q=80&w=1000&auto=format&fit=crop'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Alex Rivera',
    role: 'CEO',
    company: 'Nexus Tech',
    avatar: 'https://picsum.photos/seed/alex/100/100',
    content: "Zain doesn't just build websites; he builds growth engines. Our conversion rate doubled within three months.",
  },
];

export const STATS = [
  { label: 'WP Websites', value: '30+' },
  { label: 'Campaigns', value: '50+' },
  { label: 'Retention', value: '94%' },
  { label: 'Years Exp', value: '08+' },
];
