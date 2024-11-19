import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
    {/* Header */}
    <header className="py-10 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-extrabold">Privacy Policy</h1>
        <p className="text-lg mt-4">
          Your privacy is important to us. Learn how we collect, use, and protect your data.
        </p>
      </div>
    </header>

    {/* Privacy Policy Content */}
    <main className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Introduction</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          At Professional Cake Making Classes, we are committed to protecting your privacy. This
          Privacy Policy outlines the types of information we collect, how we use it, and the
          steps we take to ensure your information is secure.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Information We Collect</h2>
        <ul className="list-disc pl-5 text-gray-600 space-y-4">
          <li>
            **Personal Information**: When you sign up for classes, we may collect your name,
            email address, phone number, and payment information.
          </li>
          <li>
            **Usage Data**: Information about how you use our website, such as pages visited and
            time spent on the site.
          </li>
          <li>
            **Cookies**: We use cookies to improve your experience on our site. You can manage or
            disable cookies in your browser settings.
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How We Use Your Information</h2>
        <p className="text-lg text-gray-600 mb-4">
          We use your information for the following purposes:
        </p>
        <ul className="list-disc pl-5 text-gray-600 space-y-4">
          <li>To process class registrations and payments.</li>
          <li>To communicate with you regarding classes, updates, and promotions.</li>
          <li>To improve our website and services based on user feedback.</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How We Protect Your Data</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          We take data protection seriously and implement industry-standard security measures to
          protect your information from unauthorized access, alteration, disclosure, or
          destruction. However, no method of transmission over the Internet is completely secure,
          so we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Third-Party Sharing</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          We do not sell, trade, or rent your personal information to third parties. However, we
          may share your information with trusted partners who assist us in operating our website
          or providing services to you, provided they agree to keep your information
          confidential.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Your Rights</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          You have the right to access, update, or delete the personal information we hold about
          you. To exercise these rights, please contact us at:
          <a
            href="mailto:privacy@professionalcakemaking.com"
            className="text-blue-500 underline ml-1"
          >
            privacy@professionalcakemaking.com
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Changes to This Policy</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          We may update this Privacy Policy from time to time. Any changes will be posted on this
          page with an updated revision date. We encourage you to review our Privacy Policy
          regularly to stay informed about how we protect your information.
        </p>
      </section>
    </main>

    {/* Footer */}
    <footer className="py-10 bg-gray-100 text-center">
      <p className="text-gray-600">
        © {new Date().getFullYear()} Professional Cake Making Classes. All rights reserved.
      </p>
    </footer>
  </div>
  )
}

export default PrivacyPolicy