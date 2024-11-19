import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
    {/* Header */}
    <header className="py-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-extrabold">Contact Us</h1>
        <p className="text-lg mt-4">
          We’d love to hear from you! Reach out with any questions, feedback, or inquiries.
        </p>
      </div>
    </header>

    {/* Contact Form Section */}
    <main className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="p-8 bg-white shadow-md rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            Feel free to drop us a message or visit us at our location.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <span className="text-2xl">📍</span>
              <p>123 Cake Street, Bakersville, CA 90210</p>
            </li>
            <li className="flex items-center space-x-4">
              <span className="text-2xl">📞</span>
              <p>(123) 456-7890</p>
            </li>
            <li className="flex items-center space-x-4">
              <span className="text-2xl">✉️</span>
              <p>info@professionalcakemaking.com</p>
            </li>
          </ul>
        </div>

        {/* Form */}
        <div className="p-8 bg-white shadow-md rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
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

export default Contact