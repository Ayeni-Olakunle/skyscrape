const reviews = [
  { name: 'Adaeze Okonkwo', role: 'Business Executive', text: 'LuxStay made my month-long Lagos assignment feel like home. The apartment was spotless, modern, and the team was incredibly responsive.', rating: 5, avatar: '👩🏾‍💼' },
  { name: 'Emeka Nwosu', role: 'Visiting Consultant', text: 'Booking was seamless and the property exceeded every expectation. I will never stay in a hotel again when in Lagos.', rating: 5, avatar: '👨🏾‍💻' },
  { name: 'Fatima Al-Hassan', role: 'Relocating Professional', text: 'Perfect transition apartment while I was relocating. The furnished space saved me so much stress and the location was central.', rating: 5, avatar: '👩🏽‍🎨' },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6" style={{ background: '#fafaf8' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#f9cb01' }}>
            Guest Reviews
          </div>
          <h2 className="text-4xl font-bold" style={{ fontFamily: 'Georgia, serif', color: '#3d5496' }}>
            What Our Guests Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-7 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <span key={j} className="text-base" style={{ color: '#f9cb01' }}>★</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic mb-6">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                  style={{ background: 'rgba(61,84,150,0.08)' }}
                >
                  {r.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: '#1a1a2e' }}>{r.name}</div>
                  <div className="text-gray-400 text-xs">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}