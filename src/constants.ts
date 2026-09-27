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
