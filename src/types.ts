/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  mainCategory: 'WordPress' | 'Shopify' | 'Performance Marketing';
  image: string;
  description: string;
  fullDescription?: string;
  challenge?: string;
  solution?: string;
  results?: {
    label: string;
    value: string;
  }[];
  gallery?: string[];
  client?: string;
  year?: string;
}

export interface CaseStudy extends Project {
  challenge: string;
  solution: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}
