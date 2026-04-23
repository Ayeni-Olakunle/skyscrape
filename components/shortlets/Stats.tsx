const stats = [
  { value: '500+', label: 'Properties Listed' },
  { value: '12K+', label: 'Happy Guests' },
  { value: '6',    label: 'Cities Covered' },
  { value: '4.9',  label: 'Average Rating' },
]

export default function Stats() {
  return (
    <section className="py-20 px-6" style={{ background: '#3d5496' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div
              className="text-5xl font-bold mb-2"
              style={{ fontFamily: 'Georgia, serif', color: '#f9cb01' }}
            >
              {s.value}
            </div>
            <div className="text-white/65 text-sm font-medium uppercase tracking-widest">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}