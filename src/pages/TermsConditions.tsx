import React from 'react';
import { motion } from 'motion/react';

export const TermsConditions = () => {
  return (
    <main className="pt-24 min-h-screen bg-white">
      <section className="section-spacing md:pt-32">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 mt-12 text-text-main">Terms & Conditions</h1>
            <p className="text-text-muted font-medium mb-12">Last Updated: [April 2026]</p>

            <div className="space-y-12 text-text-muted font-medium pb-24">
              <div className="space-y-4">
                <p>
                  These Terms & Conditions govern your use of this website operated by Muhammad Zain.
                </p>
                <p>
                  By accessing this website, you agree to comply with these terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-main mb-4">1. Use of Website</h2>
                <p className="mb-4">This website is intended for informational and service-related purposes only.</p>
                <p className="mb-4">You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the website for unlawful purposes</li>
                  <li>Attempt to gain unauthorized access</li>
                  <li>Disrupt or damage website functionality</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-main mb-4">2. Services</h2>
                <p className="mb-4">We provide services including:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>WordPress Web Development</li>
                  <li>Shopify Store Design</li>
                  <li>Performance Marketing (Meta Ads, Google Ads)</li>
                </ul>
                <p>All services are subject to individual agreements, timelines, and pricing discussed prior to project initiation.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-main mb-4">3. Intellectual Property</h2>
                <p className="mb-4">All content on this website, including:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Text</li>
                  <li>Design</li>
                  <li>Graphics</li>
                  <li>Branding</li>
                </ul>
                <p className="mb-4">is the property of Muhammad Zain unless otherwise stated.</p>
                <p>You may not copy, reproduce, or distribute any content without permission.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-main mb-4">4. Project Engagement</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All project details (scope, pricing, timelines) are agreed upon before starting</li>
                  <li>Payments, revisions, and deliverables are handled as per mutual agreement</li>
                  <li>We reserve the right to decline projects at our discretion</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-main mb-4">5. Limitation of Liability</h2>
                <p className="mb-4">We strive to deliver high-quality services, but we are not liable for:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Business losses</li>
                  <li>Indirect damages</li>
                  <li>Third-party service failures</li>
                </ul>
                <p>Use of our website and services is at your own risk.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-main mb-4">6. External Links</h2>
                <p>This website may contain links to external websites. We are not responsible for the content or practices of those sites.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-main mb-4">7. Termination</h2>
                <p>We reserve the right to restrict or terminate access to the website or services if these terms are violated.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-main mb-4">8. Changes to Terms</h2>
                <p>We may update these Terms & Conditions at any time. Continued use of the website implies acceptance of any changes.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-main mb-4">9. Contact Information</h2>
                <p className="mb-4">For any questions regarding these Terms:</p>
                <p>Email: <a href="mailto:zain.developer@gmail.com" className="text-brand hover:underline">zain.developer@gmail.com</a></p>
                <p>Phone: +923194931082</p>
              </div>

              <p className="pt-8 border-t border-border-interface">
                By using this website, you agree to these Terms & Conditions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
