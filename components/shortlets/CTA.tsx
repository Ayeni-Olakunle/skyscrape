export default function CTA() {
  return (
    <section id="contact" className="py-24 px-6" style={{ background: '#fafaf8' }}>
      <div className="max-w-4xl mx-auto">
        <div
          className="rounded-3xl p-16 text-center relative overflow-hidden"
          style={{ background: '#3d5496' }}
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
            style={{ background: '#f9cb01', transform: 'translate(30%, -30%)' }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-5"
            style={{ background: '#f9cb01', transform: 'translate(-30%, 30%)' }} />

          <div className="relative">
            <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#f9cb01' }}>
              Limited Availability
            </div>
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Ready to Book Your Stay?
            </h2>
            <p className="text-white/65 mb-10 max-w-lg mx-auto leading-relaxed">
              Join thousands of satisfied guests who choose LuxStay for their short-term accommodation needs in Lagos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#properties"
                className="px-8 py-4 rounded-2xl font-bold text-sm hover:opacity-90 transition-opacity"
                style={{ background: '#f9cb01', color: '#3d5496' }}
              >
                Browse Properties
              </a>
              <a
                href="tel:+2348000000000"
                className="px-8 py-4 rounded-2xl font-semibold text-sm border text-white hover:bg-white/10 transition-all"
                style={{ borderColor: 'rgba(255,255,255,0.3)' }}
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}