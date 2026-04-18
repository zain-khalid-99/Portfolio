import React from 'react';
import { motion } from 'motion/react';

export const PrivacyPolicy = () => {
  return (
    <main className="pt-24 min-h-screen bg-white">
      <section className="section-spacing md:pt-32">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 mt-12 text-text-main">Privacy Policy</h1>
            <p className="text-text-muted font-medium mb-12">Last Updated: [April, 2026]</p>

            <div className="space-y-12 text-text-muted font-medium pb-24">
              <div className="space-y-4">
                <p>
                  Muhammad Zain (“we”, “our”, or “us”) respects your privacy and is committed to protecting any personal information you provide through this website.
                </p>
                <p>
                  This Privacy Policy explains how we collect, use, and safeguard your information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-main mb-4">1. Information We Collect</h2>
                <p className="mb-4">We may collect the following information when you interact with our website:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Website URL (for audit requests)</li>
                  <li>Business-related details</li>
                  <li>Any information you voluntarily submit via forms</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-main mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We use the collected information to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Respond to inquiries and project requests</li>
                  <li>Provide website and marketing audits</li>
                  <li>Communicate regarding services</li>
                  <li>Improve our website and user experience</li>
                </ul>
                <p>We do <strong>not sell, rent, or share your personal information</strong> with third parties for marketing purposes.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-main mb-4">3. Cookies & Tracking</h2>
                <p className="mb-4">Our website may use cookies or similar technologies to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Enhance user experience</li>
                  <li>Analyze website performance</li>
                </ul>
                <p>You can choose to disable cookies through your browser settings.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-main mb-4">4. Data Protection</h2>
                <p className="mb-4">We take appropriate measures to protect your information from unauthorized access, misuse, or disclosure.</p>
                <p>However, no online transmission is 100% secure, and we cannot guarantee absolute security.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-main mb-4">5. Third-Party Services</h2>
                <p className="mb-4">We may use trusted third-party tools (such as hosting platforms or analytics services) to operate our website.</p>
                <p>These services may collect limited data as required for functionality.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-main mb-4">6. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Request access to your data</li>
                  <li>Request correction or deletion of your data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p>To do so, contact us directly.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-main mb-4">7. Contact Information</h2>
                <p className="mb-4">If you have any questions regarding this Privacy Policy, you may contact us:</p>
                <p>Email: <a href="mailto:zain.developer@gmail.com" className="text-brand hover:underline">zain.developer@gmail.com</a></p>
                <p>Phone: +923194931082</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-main mb-4">8. Updates to This Policy</h2>
                <p className="mb-4">We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date.</p>
              </div>

              <p className="pt-8 border-t border-border-interface">
                By using this website, you agree to the terms outlined in this Privacy Policy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
