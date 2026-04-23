const features = [
  { icon: '🛡️', title: 'Verified Properties', desc: 'Every listing is personally inspected and verified by our team before going live.' },
  { icon: '⚡', title: 'Instant Booking', desc: 'Book your apartment in minutes with real-time availability and instant confirmation.' },
  { icon: '🔑', title: 'Keyless Check-in', desc: 'Smart lock access means you can check in anytime, day or night, hassle-free.' },
  { icon: '🧹', title: 'Professional Cleaning', desc: 'All apartments are professionally cleaned and prepared before every stay.' },
  { icon: '📞', title: '24/7 Support', desc: 'Our dedicated support team is available around the clock to assist you.' },
  { icon: '💳', title: 'Flexible Payment', desc: 'Pay securely with cards, bank transfer, or crypto. Deposits held in escrow.' },
]

export default function Features() {
  return (
    <section className="py-24 px-6" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#f9cb01' }}>
            Why Choose Us
          </div>
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif', color: '#3d5496' }}>
            The LuxStay Difference
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            We go beyond just providing a place to stay. We craft memorable living experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-7 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                style={{ background: 'rgba(61,84,150,0.08)' }}
              >
                {f.icon}
              </div>
              <h3 className="font-semibold text-base mb-2" style={{ color: '#1a1a2e' }}>{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}