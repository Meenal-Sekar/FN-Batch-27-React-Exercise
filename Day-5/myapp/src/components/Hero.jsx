import React from 'react'

const Hero = () => {
  return (
    <>
    {/* Home Section */}
       <section className="bg-gray-100 text-center py-16">
      <h2 className="text-4xl font-bold mb-4">Welcome to Tailwind CSS</h2>
      <p className="text-pink-600 mb-6">
        Simple React Application using Tailwind CSS
      </p>

      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-800">
        Get Started
      </button>
    </section>

    </>
  )
}

export default Hero