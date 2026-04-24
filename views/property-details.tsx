'use client'
import { useParams, useRouter } from 'next/navigation'
import Navbar from "@/components/shortlets/Navbar";
import Footer from "@/components/shortlets/Footer";
import { useState, useEffect } from 'react'

const properties = [
  { id: 1, name: 'The Grand Penthouse', location: 'Victoria Island, Lagos', price: 85000, rating: 4.9, reviews: 142, beds: 3, baths: 2, sqft: 180, emoji: '🏙️', tag: 'Bestseller',
    description: 'Experience the pinnacle of luxury living at The Grand Penthouse. Perched high above Victoria Island with sweeping panoramic views of the Lagos skyline and Atlantic Ocean, this exceptional residence combines contemporary design with world-class amenities. Floor-to-ceiling windows flood every room with natural light, while the open-plan living space flows seamlessly onto a wraparound terrace — perfect for entertaining or unwinding after a busy day.',
    amenities: ['WiFi', 'Air Conditioning', 'Smart TV', 'Kitchen', 'Washer/Dryer', 'Parking', 'Gym Access', 'Pool', 'Elevator', 'Security', '24/7 Concierge', 'Balcony'],
    images: ['🏙️', '🛋️', '🛏️', '🍳', '🛁'],
    host: { name: 'Chidi Okafor', rating: 4.98, stays: 312, avatar: '👨🏾‍💼', joined: '2019' },
    rules: ['No smoking', 'No parties', 'Pets allowed', 'Check-in: 2PM', 'Check-out: 11AM'],
  },
  { id: 2, name: 'Garden View Studio', location: 'Lekki Phase 1, Lagos', price: 45000, rating: 4.8, reviews: 98, beds: 1, baths: 1, sqft: 60, emoji: '🌿', tag: 'New',
    description: 'A serene garden-facing studio that perfectly balances minimalist design with lush natural surroundings. Tucked within a gated estate in the heart of Lekki Phase 1, this thoughtfully designed space offers everything you need for a comfortable short stay — from a fully equipped kitchenette to high-speed fibre internet. Wake up to birdsong and the gentle rustling of tropical plants just outside your window.',
    amenities: ['WiFi', 'Air Conditioning', 'Smart TV', 'Kitchenette', 'Security', 'Garden Access', 'Parking', 'Workspace'],
    images: ['🌿', '🛋️', '🛏️', '🍳', '🪴'],
    host: { name: 'Ngozi Eze', rating: 4.95, stays: 187, avatar: '👩🏾‍💼', joined: '2021' },
    rules: ['No smoking', 'No pets', 'No parties', 'Check-in: 3PM', 'Check-out: 12PM'],
  },
  { id: 3, name: 'Luxury Executive Suite', location: 'Ikoyi, Lagos', price: 120000, rating: 5.0, reviews: 67, beds: 4, baths: 3, sqft: 250, emoji: '✨', tag: 'Premium',
    description: 'The Luxury Executive Suite in prestigious Ikoyi is the ultimate address for the discerning corporate traveller or family. With four generously sized bedrooms, three marble bathrooms, a private cinema room, and a fully staffed kitchen, this property redefines what it means to stay in Lagos. Designed by award-winning interior architects, every surface tells a story of refined taste and careful craftsmanship.',
    amenities: ['WiFi', 'Air Conditioning', 'Smart TV', 'Full Kitchen', 'Washer/Dryer', 'Private Cinema', 'Staff Included', 'Pool', 'Gym', 'Security', 'Driver Available', 'Balcony'],
    images: ['✨', '🛋️', '🛏️', '🍽️', '🛁'],
    host: { name: 'Tunde Adeyemi', rating: 5.0, stays: 89, avatar: '👨🏾‍🎩', joined: '2020' },
    rules: ['No smoking indoors', 'Pets on request', 'Events allowed (fee applies)', 'Check-in: 2PM', 'Check-out: 12PM'],
  },
  { id: 4, name: 'Cozy City Apartment', location: 'Ikeja GRA, Lagos', price: 35000, rating: 4.7, reviews: 203, beds: 2, baths: 1, sqft: 90, emoji: '🏡', tag: null,
    description: 'A welcoming two-bedroom apartment nestled in the quiet, tree-lined streets of Ikeja GRA. Ideal for professionals on extended assignments or couples exploring Lagos, this home-away-from-home offers a warm atmosphere, reliable power supply, and easy access to the airport and major business districts. The fully equipped kitchen and comfortable living room make it easy to settle in from day one.',
    amenities: ['WiFi', 'Air Conditioning', 'Cable TV', 'Full Kitchen', 'Security', 'Parking', 'Generator Backup', 'Workspace'],
    images: ['🏡', '🛋️', '🛏️', '🍳', '🚿'],
    host: { name: 'Amaka Obi', rating: 4.93, stays: 256, avatar: '👩🏾‍🦱', joined: '2018' },
    rules: ['No smoking', 'No pets', 'No loud music after 10PM', 'Check-in: 2PM', 'Check-out: 11AM'],
  },
  { id: 5, name: 'Beachfront Retreat', location: 'Elegushi, Lagos', price: 95000, rating: 4.9, reviews: 55, beds: 3, baths: 2, sqft: 160, emoji: '🌊', tag: 'Trending',
    description: 'Step directly onto the sands of Elegushi Beach from this stunning beachfront retreat. With uninterrupted Atlantic views, a private deck, outdoor shower, and the sound of the ocean as your constant companion, this property is Lagos at its most indulgent. Designed for relaxation, the open-plan interior features rattan furniture, tropical accents, and every modern comfort you could need.',
    amenities: ['WiFi', 'Air Conditioning', 'Smart TV', 'Full Kitchen', 'Private Deck', 'Beach Access', 'Outdoor Shower', 'BBQ Grill', 'Parking', 'Security'],
    images: ['🌊', '🏖️', '🛏️', '🍳', '🌅'],
    host: { name: 'Seun Balogun', rating: 4.97, stays: 74, avatar: '👨🏾‍🌾', joined: '2022' },
    rules: ['No smoking indoors', 'Pets allowed', 'No loud music after 11PM', 'Check-in: 3PM', 'Check-out: 12PM'],
  },
  { id: 6, name: 'Corporate Residence', location: 'Eko Atlantic, Lagos', price: 150000, rating: 4.8, reviews: 34, beds: 5, baths: 4, sqft: 320, emoji: '🏢', tag: 'Premium',
    description: 'Set within the iconic Eko Atlantic City — Lagos\'s newest and most ambitious urban development — this sprawling corporate residence is built for those who demand nothing but the best. Five en-suite bedrooms, a chef\'s kitchen, dedicated boardroom, and stunning sea views across the reclaimed Atlantic make this the most prestigious shortlet address in all of West Africa.',
    amenities: ['WiFi', 'Air Conditioning', 'Smart TVs', 'Chef\'s Kitchen', 'Boardroom', 'Washer/Dryer', 'Pool', 'Gym', 'Concierge', 'Driver Available', 'Security', 'Sea Views'],
    images: ['🏢', '🛋️', '🛏️', '🍽️', '🌊'],
    host: { name: 'Folake Martins', rating: 4.99, stays: 41, avatar: '👩🏾‍💼', joined: '2023' },
    rules: ['No smoking', 'Pets on request', 'Corporate events allowed', 'Check-in: 2PM', 'Check-out: 1PM'],
  },
]

export default function PropertyDetails() {
  const params = useParams()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(1)
  const [nights, setNights] = useState(0)

  const property = properties.find(p => p.id === Number(params.id)) || properties[0]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (checkIn && checkOut) {
      const diff = (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)
      setNights(diff > 0 ? diff : 0)
    }
  }, [checkIn, checkOut])

  const total = property.price * nights
  const serviceFee = Math.round(total * 0.08)
  const grand = total + serviceFee

  return (
    <>
      <Navbar />
      <main
        style={{ background: "#fafaf8", minHeight: "100vh", paddingTop: 80 }}
      >
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <a
              href="/"
              style={{ color: "#3d5496" }}
              className="hover:underline"
            >
              Home
            </a>
            <span>/</span>
            <a
              href="/#properties"
              style={{ color: "#3d5496" }}
              className="hover:underline"
            >
              Properties
            </a>
            <span>/</span>
            <span className="text-gray-600">{property.name}</span>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <div className="grid grid-cols-4 grid-rows-2 gap-3 h-96 rounded-3xl overflow-hidden">
            <div
              className="col-span-2 row-span-2 flex items-center justify-center text-8xl cursor-pointer transition-transform hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #3d5496, #1e2d5a)",
              }}
              onClick={() => setActiveImage(0)}
            >
              {property.images[0]}
            </div>
            {property.images.slice(1).map((img, i) => (
              <div
                key={i}
                className="flex items-center justify-center text-5xl cursor-pointer transition-all hover:opacity-90"
                style={{
                  background:
                    i % 2 === 0
                      ? "linear-gradient(135deg, #2a3d6e, #1a2d55)"
                      : "linear-gradient(135deg, #1e2d5a, #3d5496)",
                }}
                onClick={() => setActiveImage(i + 1)}
              >
                {img}
              </div>
            ))}
          </div>
        </div>

        {/* Content + Booking Sidebar */}
        <div className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-3 gap-12">
          {/* Left — Details */}
          <div className="lg:col-span-2 space-y-10">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  {property.tag && (
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full mr-3"
                      style={{ background: "#f9cb01", color: "#3d5496" }}
                    >
                      {property.tag}
                    </span>
                  )}
                </div>
                <button className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-gray-200 hover:border-gray-400 transition-colors">
                  ♡ Save
                </button>
              </div>
              <h1
                className="text-3xl font-bold mb-2"
                style={{ fontFamily: "Georgia, serif", color: "#3d5496" }}
              >
                {property.name}
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-500 flex-wrap">
                <span>📍 {property.location}</span>
                <span className="flex items-center gap-1">
                  <span style={{ color: "#f9cb01" }}>★</span>
                  <strong style={{ color: "#1a1a2e" }}>
                    {property.rating}
                  </strong>
                  <span>({property.reviews} reviews)</span>
                </span>
                <span>🛏 {property.beds} Beds</span>
                <span>🚿 {property.baths} Baths</span>
                <span>📐 {property.sqft} m²</span>
              </div>
            </div>

            {/* Host */}
            {/* <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-3xl" style={{ background: 'rgba(61,84,150,0.08)' }}>
                {property.host.avatar}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-base" style={{ color: '#1a1a2e' }}>
                  Hosted by {property.host.name}
                </div>
                <div className="text-gray-400 text-sm mt-0.5">
                  ★ {property.host.rating} · {property.host.stays} stays · Member since {property.host.joined}
                </div>
              </div>
              <button className="text-sm font-semibold px-4 py-2 rounded-xl border transition-colors hover:bg-gray-50"
                style={{ borderColor: '#3d5496', color: '#3d5496' }}>
                Message
              </button>
            </div> */}

            {/* Description */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ fontFamily: "Georgia, serif", color: "#3d5496" }}
              >
                About this property
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <div>
              <h2
                className="text-xl font-bold mb-5"
                style={{ fontFamily: "Georgia, serif", color: "#3d5496" }}
              >
                Amenities
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {property.amenities.map((a, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100"
                  >
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                      style={{ background: "rgba(61,84,150,0.08)" }}
                    >
                      ✓
                    </span>
                    <span className="text-sm text-gray-600">{a}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* House Rules */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ fontFamily: "Georgia, serif", color: "#3d5496" }}
              >
                House Rules
              </h2>
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                {property.rules.map((rule, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 px-5 py-4 text-sm text-gray-600 ${i < property.rules.length - 1 ? "border-b border-gray-50" : ""}`}
                  >
                    <span style={{ color: "#f9cb01" }}>•</span>
                    {rule}
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <h2
                  className="text-xl font-bold"
                  style={{ fontFamily: "Georgia, serif", color: "#3d5496" }}
                >
                  Reviews
                </h2>
                <div
                  className="flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold"
                  style={{
                    background: "rgba(61,84,150,0.08)",
                    color: "#3d5496",
                  }}
                >
                  <span style={{ color: "#f9cb01" }}>★</span> {property.rating}{" "}
                  · {property.reviews} reviews
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  {
                    name: "Emeka N.",
                    avatar: "👨🏾",
                    text: "Absolutely stunning property. Everything was exactly as described and the host was super responsive. Will definitely return!",
                    date: "March 2025",
                  },
                  {
                    name: "Sarah K.",
                    avatar: "👩🏼",
                    text: "Perfect location and immaculate apartment. The amenities were top notch and check-in was seamless. Highly recommend.",
                    date: "February 2025",
                  },
                  {
                    name: "Bola A.",
                    avatar: "👩🏾",
                    text: "Incredible views and a genuinely luxurious experience. LuxStay has raised the bar for shortlet apartments in Lagos.",
                    date: "January 2025",
                  },
                  {
                    name: "James O.",
                    avatar: "👨🏻",
                    text: "Stayed for 2 weeks on a business trip. The workspace was ideal and the neighbourhood was quiet and safe. Loved it.",
                    date: "December 2024",
                  },
                ].map((r, i) => (
                  <div
                    key={i}
                    className="bg-white p-5 rounded-2xl border border-gray-100"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-xl"
                        style={{ background: "rgba(61,84,150,0.06)" }}
                      >
                        {r.avatar}
                      </div>
                      <div>
                        <div
                          className="font-semibold text-sm"
                          style={{ color: "#1a1a2e" }}
                        >
                          {r.name}
                        </div>
                        <div className="text-gray-400 text-xs">{r.date}</div>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      "{r.text}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-3xl shadow-xl border border-gray-100 p-7">
              <div className="flex items-baseline gap-1 mb-6">
                <span
                  className="text-3xl font-bold"
                  style={{ color: "#3d5496" }}
                >
                  ₦{property.price.toLocaleString()}
                </span>
                <span className="text-gray-400 text-sm">/night</span>
              </div>

              {/* Date pickers */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden mb-3">
                <div className="grid grid-cols-2 divide-x divide-gray-200">
                  <div className="p-3">
                    <div className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-1">
                      Check-in
                    </div>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="text-sm text-gray-700 w-full focus:outline-none"
                    />
                  </div>
                  <div className="p-3">
                    <div className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-1">
                      Check-out
                    </div>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="text-sm text-gray-700 w-full focus:outline-none"
                    />
                  </div>
                </div>
                <div className="border-t border-gray-200 p-3">
                  <div className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-1">
                    Guests
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      {guests} guest{guests > 1 ? "s" : ""}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setGuests((g) => Math.max(1, g - 1))}
                        className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-500 transition-colors text-lg leading-none"
                      >
                        −
                      </button>
                      <span className="w-5 text-center text-sm font-medium">
                        {guests}
                      </span>
                      <button
                        onClick={() =>
                          setGuests((g) => Math.min(property.beds * 2, g + 1))
                        }
                        className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-500 transition-colors text-lg leading-none"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() =>
                  router.push(
                    `/book/${property.id}?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`,
                  )
                }
                className="w-full py-4 rounded-2xl font-bold text-base transition-opacity hover:opacity-90 mb-4"
                style={{ background: "#3d5496", color: "#fff" }}
              >
                Reserve Now
              </button>

              {nights > 0 && (
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>
                      ₦{property.price.toLocaleString()} × {nights} night
                      {nights > 1 ? "s" : ""}
                    </span>
                    <span>₦{total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Service fee (8%)</span>
                    <span>₦{serviceFee.toLocaleString()}</span>
                  </div>
                  <div
                    className="flex justify-between font-bold text-base pt-3 border-t border-gray-100"
                    style={{ color: "#3d5496" }}
                  >
                    <span>Total</span>
                    <span>₦{grand.toLocaleString()}</span>
                  </div>
                </div>
              )}

              <p className="text-center text-gray-400 text-xs mt-4">
                You won't be charged yet
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}