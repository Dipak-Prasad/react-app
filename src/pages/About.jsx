import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
    {/* Header */}
    <header className="py-10 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-extrabold">
          About Professional Cake Making Classes
        </h1>
        <p className="text-lg mt-4">
          Learn the art of professional cake making from the best in the industry.
        </p>
      </div>
    </header>

    {/* Mission Section */}
    <main className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Our Mission
        </h2>
        <p className="text-lg leading-relaxed text-gray-600 text-center">
          At Professional Cake Making Classes, our mission is to turn your passion for cakes into 
          a profession. We provide hands-on training, industry insights, and creative techniques 
          to help you bake your dreams into reality.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Expert Trainers',
              description: 'Learn from certified professionals with years of industry experience.',
              icon: '🎓',
            },
            {
              title: 'Hands-On Learning',
              description: 'Practice real techniques with guidance in our fully equipped studio.',
              icon: '🧑‍🍳',
            },
            {
              title: 'Creative Techniques',
              description: 'Master the latest trends in cake decoration and baking.',
              icon: '🎂',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 border rounded-lg bg-white shadow-sm hover:shadow-md"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Sarah Baker', role: 'Founder & Master Chef', img: 'https://via.placeholder.com/150' },
            { name: 'James Frost', role: 'Head Pastry Chef', img: 'https://via.placeholder.com/150' },
            { name: 'Emily Whisk', role: 'Cake Decorating Expert', img: 'https://via.placeholder.com/150' },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.img}
                alt={`${member.name}`}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-6">
          Our Core Values
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            'Creativity in Every Bite',
            'Quality Ingredients First',
            'Passion for Learning',
            'Community & Collaboration',
          ].map((value, index) => (
            <li
              key={index}
              className="p-6 border rounded-lg bg-white shadow-sm hover:shadow-md"
            >
              <h4 className="text-xl font-bold">{value}</h4>
              <p className="text-gray-600 mt-2">
                We stand by this value to ensure every student thrives in their cake-making journey.
              </p>
            </li>
          ))}
        </ul>
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

export default About