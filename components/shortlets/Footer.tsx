export default function Footer() {
  return (
    <footer style={{ background: '#1a1a2e' }} className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#3d5496' }}>
                <span className="text-white font-bold">L</span>
              </div>
              <span className="font-bold text-lg text-white">
                Lux<span style={{ color: '#f9cb01' }}>Stay</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Premium shortlet apartments for discerning travelers. Your comfort is our business.
            </p>
            <div className="flex gap-3">
              {['𝕏', 'in', 'f', '▶'].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:border-white/40 hover:text-white transition-all text-sm"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Press', 'Blog'].map(l => (
                <li key={l}>
                  <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Support</h4>
            <ul className="space-y-3">
              {['Help Center', 'Safety Info', 'Cancellation', 'Contact Us'].map(l => (
                <li key={l}>
                  <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">© 2025 LuxStay. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" className="text-white/20 text-xs hover:text-white/50 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}