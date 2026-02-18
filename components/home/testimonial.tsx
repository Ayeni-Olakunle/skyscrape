// app/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Phone, Mail, MapPin, Send, CheckCircle, Building2, Clock, Shield, Users } from 'lucide-react'

export default function Testimonial() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  })
  
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  return (
    <main className="min-h-screen bg-white">
        

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Features & Contact */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Call Us Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#1e2938] rounded-full blur-lg opacity-50"></div>
                  <div className="relative bg-gradient-to-br from-[#1e2938] to-[#3c4e68] p-4 rounded-full">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Call us now</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-[#1e2938] to-[#3c4e68] bg-clip-text text-transparent">
                    +234 901 991 0747
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Available 24/7 for emergencies</p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Smart Security</h3>
                <p className="text-sm text-gray-600">24/7 monitoring with AI-powered systems</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
                <p className="text-sm text-gray-600">Average response time under 30 minutes</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-[#d4d4d4] to-[#e7e7e7] rounded-2xl p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "Skyscape transformed our building management. Their proactive approach and quick response times have made a huge difference."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-gray-500">Property Manager</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative animate-slide-in-right">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10"></div>
            
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-[#1e2938] mb-2">Send us a Message</h2>
              <p className="text-gray-600 mb-8">We'll get back to you within 24 hours</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="relative">
                  <label 
                    htmlFor="fullName" 
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focusedField === 'fullName' || formData.fullName
                        ? '-top-2 text-xs bg-white px-2 text-[#1e2938]'
                        : 'top-3 text-gray-400'
                    }`}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('fullName')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1e2938] focus:ring-4 focus:ring-[#1e2938]/10 outline-none transition bg-transparent"
                    // placeholder={focusedField === 'fullName' ? '' : 'Your Name'}
                  />
                </div>

                {/* Email Address */}
                <div className="relative">
                  <label 
                    htmlFor="email" 
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focusedField === 'email' || formData.email
                        ? '-top-2 text-xs bg-white px-2 text-[#1e2938]'
                        : 'top-3 text-gray-400'
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1e2938] focus:ring-4 focus:ring-[#1e2938]/10 outline-none transition bg-transparent"
                    // placeholder={focusedField === 'email' ? '' : 'Your Email Address'}
                  />
                </div>

                {/* Phone Number */}
                <div className="relative">
                  <label 
                    htmlFor="phone" 
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focusedField === 'phone' || formData.phone
                        ? '-top-2 text-xs bg-white px-2 text-[#1e2938]'
                        : 'top-3 text-gray-400'
                    }`}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1e2938] focus:ring-4 focus:ring-[#1e2938]/10 outline-none transition bg-transparent"
                    // placeholder={focusedField === 'phone' ? '' : 'Your Phone Number'}
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <label 
                    htmlFor="message" 
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focusedField === 'message' || formData.message
                        ? '-top-2 text-xs bg-white px-2 text-[#1e2938]'
                        : 'top-3 text-gray-400'
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1e2938] focus:ring-4 focus:ring-[#1e2938]/10 outline-none transition resize-none bg-transparent"
                    // placeholder={focusedField === 'message' ? '' : 'Your Message'}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1e2938] to-[#202e50] text-white py-4 px-6 rounded-xl font-semibold hover:from-[#1e2938] hover:to-[#202e50] transition-all duration-200 transform hover:scale-[1.02] hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 animate-bounce" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group">
                    <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>info@skyscape.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group">
                    <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>4A Omon Ebhomeye Street.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}