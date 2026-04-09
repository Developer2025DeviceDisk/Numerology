import React from "react";

export const metadata = {
  title: "Cookie Policy | Mahakaal",
  description: "Learn how Mahakaal uses cookies and tracking technologies.",
};

const CookiesPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">

      <h1 className="text-3xl font-bold mb-4">
        Cookie Policy for Mahakaal
      </h1>

      <p className="text-sm text-gray-500 mb-8">
        Last Updated: April 8, 2026
      </p>

      {/* What are cookies */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What Are Cookies</h2>
        <p>
          Cookies are small text files stored on your device when you visit a
          website. They help improve website functionality and user experience.
        </p>
      </section>

      {/* Types */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Types of Cookies We Use
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Essential Cookies</strong> — Required for basic website
            functionality.
          </li>
          <li>
            <strong>Preference Cookies</strong> — Remember your settings and
            preferences.
          </li>
          <li>
            <strong>Analytics Cookies</strong> — Help us understand usage and
            improve performance.
          </li>
          <li>
            <strong>Marketing Cookies</strong> — Used for personalized
            advertising.
          </li>
        </ul>
      </section>

      {/* Third Party */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Third-Party Cookies
        </h2>

        <ul className="list-disc pl-6 space-y-1">
          <li>Google Analytics</li>
          <li>Hotjar</li>
          <li>Intercom</li>
          <li>Facebook Pixel</li>
        </ul>
      </section>

      {/* Manage */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Managing Cookies
        </h2>
        <p className="mb-2">
          You can control cookies through your browser settings:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Delete stored cookies</li>
          <li>Block cookies</li>
          <li>Disable third-party cookies</li>
        </ul>
        <p className="mt-2">
          Note: Disabling cookies may affect website functionality.
        </p>
      </section>

      {/* GDPR */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Cookie Consent (GDPR)
        </h2>
        <p>
          If you are in the EEA, we will request consent before using
          non-essential cookies. You can withdraw consent anytime.
        </p>
      </section>

      {/* Changes */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Changes to This Policy
        </h2>
        <p>
          We may update this policy anytime. Changes will be posted on this
          page.
        </p>
      </section>

      {/* Contact */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <ul className="list-disc pl-6">
          <li>Email: avconnect156@gmail.com</li>
          <li>
            Website:{" "}
            <a
              href="https://numerology-golden.vercel.app/"
              className="text-blue-600 underline"
            >
              Visit Site
            </a>
          </li>
        </ul>
      </section>

      <hr className="my-6" />

      <p className="text-xs text-gray-500 italic">
        This document is for informational purposes only and does not constitute
        legal advice.
      </p>
    </div>
  );
};

export default CookiesPage;