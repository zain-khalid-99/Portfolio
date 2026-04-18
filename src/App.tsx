/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { CaseStudies } from './pages/CaseStudies';
import { Portfolio } from './pages/Portfolio';
import { ProjectDetail } from './pages/ProjectDetail';
import { Contact } from './pages/Contact';
import { FreeAudit } from './pages/FreeAudit';
import { WordPress } from './pages/services/WordPress';
import { Shopify } from './pages/services/Shopify';
import { PerformanceMarketing } from './pages/services/PerformanceMarketing';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import React, { useEffect } from 'react';

// Scroll to top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Placeholder components for the new roadmap
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="py-40 container-custom min-h-screen">
    <h1 className="text-6xl font-display font-black mb-8 uppercase tracking-[-2px]">{title}</h1>
    <p className="text-xl text-text-muted font-medium max-w-2xl leading-relaxed">
      This page is under construction. We are building something premium for you.
    </p>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="services">
            <Route index element={<Services />} />
            <Route path="wordpress" element={<WordPress />} />
            <Route path="shopify" element={<Shopify />} />
            <Route path="marketing" element={<PerformanceMarketing />} />
          </Route>

          <Route path="case-studies" element={<CaseStudies />} />

          <Route path="portfolio">
            <Route index element={<Portfolio />} />
            <Route path=":slug" element={<ProjectDetail />} />
          </Route>

          <Route path="contact" element={<Contact />} />
          <Route path="free-audit" element={<FreeAudit />} />

          <Route path="legal">
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsConditions />} />
          </Route>

          <Route path="*" element={<PlaceholderPage title="404 - Not Found" />} />
        </Route>
      </Routes>
    </Router>
  );
}

