// src/pages/PrivacyPolicy.jsx
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[var(--off-white)] text-[var(--dark-navy)]">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-6 text-gray-700">
          At Quality Electric & Construction, we respect your privacy and are
          committed to protecting your personal information. This Privacy Policy
          explains how we collect, use, and safeguard your data.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            1. Information We Collect
          </h2>
          <p className="text-gray-700">
            We may collect personal information such as your name, email
            address, phone number, and any other details you provide when
            contacting us or using our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-700">
            Your information is used to provide services, respond to inquiries,
            improve our offerings, and send important updates about your service
            requests.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            3. Sharing Your Information
          </h2>
          <p className="text-gray-700">
            We do not sell or rent your personal information. Your data may be
            shared only with trusted partners to provide the services you
            request.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">4. Security</h2>
          <p className="text-gray-700">
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, or disclosure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">5. Cookies</h2>
          <p className="text-gray-700">
            Our website may use cookies to enhance your experience. You can
            choose to disable cookies in your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            6. Changes to This Policy
          </h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a
              href="mailto:accounting@qualityec.com"
              className="text-[var(--yellow)] hover:underline"
            >
              accounting@qualityec.com
            </a>{" "}
            or call{" "}
            <a
              href="tel:+12345678900"
              className="text-[var(--yellow)] hover:underline"
            >
              +1 (234) 567-8900
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
