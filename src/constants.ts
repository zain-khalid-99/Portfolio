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
    id: 'p1',
    slug: 'modern-ecommerce-portal',
    title: 'Modern E-commerce Portal',
    category: 'E-commerce / Shopify',
    mainCategory: 'Shopify',
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
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
    description: 'Minimalist Shopify experience for a luxury retail brand.',
    fullDescription: 'A high-end storefront where visual storytelling takes priority, reflecting the brand’s heritage and product craftsmanship.',
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
