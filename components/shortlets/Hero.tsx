"use client";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#3d5496" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute top-0 right-0 w-1/2 h-full"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(249,203,1,0.12), transparent 70%)",
        }}
      />

      {/* Floating stat badges */}
      <div className="absolute top-1/4 right-16 hidden lg:block animate-float">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 w-48">
          <div className="text-white/60 text-xs mb-1">Avg. Rating</div>
          <div className="text-white font-bold text-2xl">4.9 ⭐</div>
          <div className="text-white/60 text-xs mt-1">2,400+ reviews</div>
        </div>
      </div>
      <div
        className="absolute bottom-1/3 right-36 hidden lg:block animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 w-44">
          <div className="text-white/60 text-xs mb-1">Available Now</div>
          <div className="font-bold text-lg" style={{ color: "#f9cb01" }}>
            48 Units
          </div>
          <div className="text-white/60 text-xs mt-1">Across 6 cities</div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left Content */}
        <div>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
            style={{
              background: "rgba(249,203,1,0.12)",
              color: "#f9cb01",
              border: "1px solid rgba(249,203,1,0.3)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#f9cb01" }}
            />
            Premium Shortlet Apartments
          </div>

          <h1
            className="text-5xl lg:text-6xl font-bold leading-tight text-white mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Your Perfect
            <span className="block" style={{ color: "#f9cb01" }}>
              Home Away
            </span>
            From Home
          </h1>

          <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-lg">
            Discover luxury furnished apartments for short and medium stays.
            Perfect for business travel, vacations, or relocation. All amenities
            included.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl p-2 flex flex-col sm:flex-row gap-2 mb-8 shadow-2xl">
            <input
              type="text"
              placeholder="Where are you going?"
              className="flex-1 px-4 py-3 rounded-xl text-gray-700 focus:outline-none text-sm"
            />
            <input
              type="date"
              className="px-4 py-3 rounded-xl text-gray-500 focus:outline-none text-sm border border-gray-100"
            />
            <button
              className="px-6 py-3 rounded-xl font-semibold text-sm text-white whitespace-nowrap hover:opacity-90 transition-opacity"
              style={{ background: "#3d5496" }}
            >
              Search
            </button>
          </div>

          <div className="flex items-center gap-6 text-white/55 text-sm">
            <span>✓ No hidden fees</span>
            <span>✓ Instant booking</span>
            <span>✓ 24/7 support</span>
          </div>
        </div>

        {/* Right — Stacked Cards */}
        <div className="hidden lg:block relative h-96">
          {[
            {
              top: 0,
              right: 8,
              rotate: 3,
              emoji: "🏙️",
              name: "The Grand Penthouse",
              loc: "Victoria Island, Lagos",
              price: "₦85,000",
              rating: 4.9,
            },
            {
              top: 88,
              left: 0,
              rotate: -2,
              emoji: "🌿",
              name: "Garden View Studio",
              loc: "Lekki Phase 1, Lagos",
              price: "₦45,000",
              rating: 4.8,
            },
          ].map((card, i) => (
            <div
              key={i}
              className="absolute w-60 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                top: card.top,
                right: card.right,
                left: card.left,
                transform: `rotate(${card.rotate}deg)`,
                background: "#2a3d6e",
              }}
            >
              <div
                className="h-36 flex items-center justify-center text-6xl"
                style={{
                  background: "linear-gradient(135deg, #3d5496, #1e2d5a)",
                }}
              >
                {card.emoji}
              </div>
              <div className="p-4">
                <div className="text-white font-semibold text-sm">
                  {card.name}
                </div>
                <div className="text-white/40 text-xs mt-0.5">{card.loc}</div>
                <div className="flex items-center justify-between mt-3">
                  <span className="font-bold" style={{ color: "#f9cb01" }}>
                    {card.price}
                    <span className="text-white/35 font-normal text-xs">
                      /night
                    </span>
                  </span>
                  <span className="text-white/50 text-xs">★ {card.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 70L1440 70L1440 25C1200 65 720 0 0 45L0 70Z"
            fill="#fafaf8"
          />
        </svg>
      </div>
    </section>
  );
}
