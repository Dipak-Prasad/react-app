import React from 'react'

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
    {/* Header */}
    <header className="py-10 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-extrabold">Terms and Conditions</h1>
        <p className="text-lg mt-4">
          Please read these terms and conditions carefully before using our services.
        </p>
      </div>
    </header>

    {/* Terms and Conditions Content */}
    <main className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Introduction</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          These Terms and Conditions govern your use of our website and services. By accessing or
          using our website, you agree to comply with and be bound by these terms.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Eligibility</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          You must be at least 18 years old or have parental consent to use our services. By
          registering, you confirm that you meet these eligibility requirements.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">User Responsibilities</h2>
        <ul className="list-disc pl-5 text-gray-600 space-y-4">
          <li>You agree to provide accurate and complete information when registering.</li>
          <li>
            You are responsible for maintaining the confidentiality of your account and password.
          </li>
          <li>You agree not to engage in any illegal or unauthorized activities on our website.</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Payment and Refunds</h2>
        <p className="text-lg text-gray-600 mb-4">
          All payments must be made in advance unless otherwise agreed. Our refund policy is as
          follows:
        </p>
        <ul className="list-disc pl-5 text-gray-600 space-y-4">
          <li>Refunds are only available if requested within 7 days of payment.</li>
          <li>No refunds will be issued for missed classes or late cancellations.</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Intellectual Property</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          All content, including text, images, logos, and videos, provided on this website are the
          property of Professional Cake Making Classes. You may not reproduce, distribute, or
          modify any content without our prior written consent.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Limitation of Liability</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          We are not responsible for any indirect, incidental, or consequential damages resulting
          from your use of our services. Our liability is limited to the amount you paid for our
          services.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Termination</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          We reserve the right to suspend or terminate your access to our services at our
          discretion, without notice, if you violate these Terms and Conditions.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Changes to These Terms</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          We may update these Terms and Conditions from time to time. Changes will be effective
          immediately upon posting on this page. We encourage you to review these terms regularly.
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

export default TermsConditions