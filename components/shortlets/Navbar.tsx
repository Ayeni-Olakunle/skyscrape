'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: '#3d5496' }}>
            <span className="text-white font-bold text-lg" style={{ fontFamily: 'Georgia, serif' }}>L</span>
          </div>
          <span className="font-bold text-xl" style={{ fontFamily: 'Georgia, serif', color: '#3d5496' }}>
            Lux<span style={{ color: '#f9cb01' }}>Stay</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Properties', 'Locations', 'About', 'Contact'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: scrolled ? '#3d5496' : '#fff' }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="text-sm font-medium px-5 py-2 rounded-full border transition-all"
            style={{ borderColor: scrolled ? '#3d5496' : '#fff', color: scrolled ? '#3d5496' : '#fff' }}
          >
            Sign In
          </a>
          <a
            href="#properties"
            className="text-sm font-semibold px-5 py-2 rounded-full transition-all hover:opacity-90"
            style={{ background: '#f9cb01', color: '#3d5496' }}
          >
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-[#3d5496]' : 'bg-white'}`} />
          <div className={`w-4 h-0.5 transition-all ${scrolled ? 'bg-[#3d5496]' : 'bg-white'}`} />
          <div className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-[#3d5496]' : 'bg-white'}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4">
          {['Properties', 'Locations', 'About', 'Contact'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium"
              style={{ color: '#3d5496' }}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#properties"
            className="text-sm font-semibold px-5 py-2 rounded-full text-center"
            style={{ background: '#f9cb01', color: '#3d5496' }}
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  )
}