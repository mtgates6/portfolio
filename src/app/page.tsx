// src/app/page.tsx

import Link from 'next/link'
import styles from './page.module.css'
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I&apos;m Matthew Gates</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
          <div className="space-x-4">
            <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              View My Work
            </a>
            <a href="#contact" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                [Your introduction paragraph here. Talk about your background, interests, and what drives you in your career.]
              </p>
              <p className="text-gray-600">
                [Add more details about your experience, education, or what makes you unique.]
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform rotate-6"></div>
                <img 
                  src="images/profile.jpeg" 
                  alt="Matthew Gates" 
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will go here */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Project Title</h3>
              <p className="text-gray-600 mb-4">Project description goes here.</p>
              <div className="flex space-x-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Add your skills here */}
            <div className="text-center">
              <div className="text-4xl mb-2">💻</div>
              <h3 className="font-semibold">Frontend</h3>
              <p className="text-gray-600">React, Next.js, HTML, CSS</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⚙️</div>
              <h3 className="font-semibold">Backend</h3>
              <p className="text-gray-600">Node.js, Python, SQL</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🎨</div>
              <h3 className="font-semibold">Design</h3>
              <p className="text-gray-600">Figma, UI/UX</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🔧</div>
              <h3 className="font-semibold">Tools</h3>
              <p className="text-gray-600">Git, Docker, AWS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
