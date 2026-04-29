"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/shortlets/Navbar";
import Footer from "@/components/shortlets/Footer";
import Link from "next/link";

const allProperties = [
  {
    id: 1,
    name: "The Grand Penthouse",
    location: "Victoria Island, Lagos",
    price: 85000,
    rating: 4.9,
    reviews: 142,
    beds: 3,
    baths: 2,
    sqft: 180,
    emoji: "🏙️",
    tag: "Bestseller",
    type: "Penthouse",
    amenities: ["WiFi", "Pool", "Gym", "Parking", "Balcony"],
  },
  {
    id: 2,
    name: "Garden View Studio",
    location: "Lekki Phase 1, Lagos",
    price: 45000,
    rating: 4.8,
    reviews: 98,
    beds: 1,
    baths: 1,
    sqft: 60,
    emoji: "🌿",
    tag: "New",
    type: "Studio",
    amenities: ["WiFi", "Parking", "Garden"],
  },
  {
    id: 3,
    name: "Luxury Executive Suite",
    location: "Ikoyi, Lagos",
    price: 120000,
    rating: 5.0,
    reviews: 67,
    beds: 4,
    baths: 3,
    sqft: 250,
    emoji: "✨",
    tag: "Premium",
    type: "Suite",
    amenities: ["WiFi", "Pool", "Gym", "Cinema", "Staff"],
  },
  {
    id: 4,
    name: "Cozy City Apartment",
    location: "Ikeja GRA, Lagos",
    price: 35000,
    rating: 4.7,
    reviews: 203,
    beds: 2,
    baths: 1,
    sqft: 90,
    emoji: "🏡",
    tag: null,
    type: "Apartment",
    amenities: ["WiFi", "Parking", "Workspace"],
  },
  {
    id: 5,
    name: "Beachfront Retreat",
    location: "Elegushi, Lagos",
    price: 95000,
    rating: 4.9,
    reviews: 55,
    beds: 3,
    baths: 2,
    sqft: 160,
    emoji: "🌊",
    tag: "Trending",
    type: "Villa",
    amenities: ["WiFi", "Beach Access", "BBQ", "Deck"],
  },
  {
    id: 6,
    name: "Corporate Residence",
    location: "Eko Atlantic, Lagos",
    price: 150000,
    rating: 4.8,
    reviews: 34,
    beds: 5,
    baths: 4,
    sqft: 320,
    emoji: "🏢",
    tag: "Premium",
    type: "Penthouse",
    amenities: ["WiFi", "Pool", "Gym", "Boardroom", "Concierge"],
  },
];

const propertyTypes = [
  "All",
  "Apartment",
  "Studio",
  "Penthouse",
  "Suite",
  "Villa",
  "House",
];
const amenityOptions = [
  "WiFi",
  "Pool",
  "Gym",
  "Parking",
  "Balcony",
  "Beach Access",
  "Workspace",
  "Garden",
];
const sortOptions = [
  { label: "Recommended", value: "recommended" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Highest Rated", value: "rating" },
  { label: "Most Reviewed", value: "reviews" },
];

export default function Properties() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState("recommended");
  const [activeType, setActiveType] = useState("All");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [minBeds, setMinBeds] = useState(0);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [page, setPage] = useState(1);
  const PER_PAGE = 9;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Filter
  const filtered = allProperties.filter((p) => {
    if (activeType !== "All" && p.type !== activeType) return false;
    if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
    if (p.beds < minBeds) return false;
    if (p.rating < minRating) return false;
    if (
      selectedAmenities.length > 0 &&
      !selectedAmenities.every((a) => p.amenities.includes(a))
    )
      return false;
    if (
      searchQuery &&
      !p.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !p.location.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  // Sort
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price_asc") return a.price - b.price;
    if (sortBy === "price_desc") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "reviews") return b.reviews - a.reviews;
    return 0;
  });

  const paginated = sorted.slice(0, page * PER_PAGE);
  const hasMore = paginated.length < sorted.length;

  const toggleWishlist = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((w) =>
      w.includes(id) ? w.filter((x) => x !== id) : [...w, id],
    );
  };

  const toggleAmenity = (a: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a],
    );
  };

  const clearFilters = () => {
    setActiveType("All");
    setPriceRange([0, 200000]);
    setMinBeds(0);
    setSelectedAmenities([]);
    setMinRating(0);
    setSearchQuery("");
    setPage(1);
  };

  const activeFilterCount = [
    activeType !== "All",
    priceRange[0] > 0 || priceRange[1] < 200000,
    minBeds > 0,
    selectedAmenities.length > 0,
    minRating > 0,
  ].filter(Boolean).length;

  return (
    <>
      <Navbar />
      <main style={{ background: "#fafaf8", minHeight: "100vh" }}>
        {/* Hero Banner */}
        {/* <div
          style={{
            background: "linear-gradient(135deg, #3d5496 0%, #1e2d5a 100%)",
            paddingTop: 80,
          }}
        > */}
        {/* <div className="max-w-7xl mx-auto px-6 py-14">
            <div className="max-w-2xl">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
                style={{
                  background: "rgba(249,203,1,0.15)",
                  color: "#f9cb01",
                  border: "1px solid rgba(249,203,1,0.25)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "#f9cb01" }}
                />
                {allProperties.length} Properties Available
              </div>
              <h1
                className="text-4xl font-bold text-white mb-3"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Find Your Perfect Stay
              </h1>
              <p className="text-white/60 mb-8 text-base">
                Browse our curated collection of premium shortlet apartments
                across Lagos.
              </p>

              Search Bar
              <div className="bg-white rounded-2xl p-2 flex gap-2 shadow-2xl max-w-xl">
                <div className="flex-1 flex items-center gap-2 px-3">
                  <span className="text-gray-400">🔍</span>
                  <input
                    type="text"
                    placeholder="Search by name or location..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setPage(1);
                    }}
                    className="flex-1 text-sm text-gray-700 focus:outline-none py-2"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-gray-300 hover:text-gray-500 text-lg leading-none"
                    >
                      ×
                    </button>
                  )}
                </div>
                <button
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
                  style={{ background: "#3d5496" }}
                >
                  Search
                </button>
              </div>
            </div>
          </div> */}

        {/* Type filter tabs */}
        {/* <div className="max-w-7xl mx-auto px-6 pb-0">
            <div className="flex gap-2 overflow-x-auto pb-0 scrollbar-hide">
              {propertyTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setActiveType(type);
                    setPage(1);
                  }}
                  className="whitespace-nowrap px-5 py-2.5 rounded-t-xl text-sm font-semibold transition-all shrink-0"
                  style={{
                    background:
                      activeType === type ? "#fafaf8" : "rgba(255,255,255,0.1)",
                    color:
                      activeType === type ? "#3d5496" : "rgba(255,255,255,0.7)",
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div> */}
        {/* </div> */}

        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            {/* <aside
              className={`lg:w-72 shrink-0 ${filtersOpen ? "block" : "hidden lg:block"}`}
            >
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2
                    className="font-bold text-base"
                    style={{ color: "#3d5496" }}
                  >
                    Filters
                  </h2>
                  {activeFilterCount > 0 && (
                    <button
                      onClick={clearFilters}
                      className="text-xs font-semibold hover:opacity-70 transition-opacity"
                      style={{ color: "#f9cb01" }}
                    >
                      Clear all ({activeFilterCount})
                    </button>
                  )}
                </div>
                Price Range
                <div className="mb-7">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                    Price per Night
                  </h3>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "#3d5496" }}
                    >
                      ₦{priceRange[0].toLocaleString()}
                    </span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "#3d5496" }}
                    >
                      ₦{priceRange[1].toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={200000}
                    step={5000}
                    value={priceRange[1]}
                    onChange={(e) => {
                      setPriceRange([priceRange[0], Number(e.target.value)]);
                      setPage(1);
                    }}
                    className="w-full accent-[#3d5496]"
                  />
                  <div className="flex gap-3 mt-3">
                    <div className="flex-1">
                      <label className="text-xs text-gray-400 block mb-1">
                        Min
                      </label>
                      <input
                        type="number"
                        value={priceRange[0]}
                        min={0}
                        max={priceRange[1]}
                        onChange={(e) => {
                          setPriceRange([
                            Number(e.target.value),
                            priceRange[1],
                          ]);
                          setPage(1);
                        }}
                        className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#3d5496]"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-xs text-gray-400 block mb-1">
                        Max
                      </label>
                      <input
                        type="number"
                        value={priceRange[1]}
                        min={priceRange[0]}
                        max={200000}
                        onChange={(e) => {
                          setPriceRange([
                            priceRange[0],
                            Number(e.target.value),
                          ]);
                          setPage(1);
                        }}
                        className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#3d5496]"
                      />
                    </div>
                  </div>
                </div>
                Bedrooms
                <div className="mb-7">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                    Bedrooms
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    {[0, 1, 2, 3, 4, 5].map((n) => (
                      <button
                        key={n}
                        onClick={() => {
                          setMinBeds(n);
                          setPage(1);
                        }}
                        className="w-10 h-10 rounded-xl text-sm font-semibold border transition-all"
                        style={{
                          background: minBeds === n ? "#3d5496" : "#fff",
                          color: minBeds === n ? "#fff" : "#666",
                          borderColor: minBeds === n ? "#3d5496" : "#e5e7eb",
                        }}
                      >
                        {n === 0 ? "Any" : `${n}+`}
                      </button>
                    ))}
                  </div>
                </div>
                Min Rating
                <div className="mb-7">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                    Minimum Rating
                  </h3>
                  <div className="flex gap-2">
                    {[0, 4, 4.5, 4.8].map((r) => (
                      <button
                        key={r}
                        onClick={() => {
                          setMinRating(r);
                          setPage(1);
                        }}
                        className="flex-1 py-2 rounded-xl text-xs font-semibold border transition-all"
                        style={{
                          background: minRating === r ? "#3d5496" : "#fff",
                          color: minRating === r ? "#fff" : "#666",
                          borderColor: minRating === r ? "#3d5496" : "#e5e7eb",
                        }}
                      >
                        {r === 0 ? "Any" : `${r}+`}
                      </button>
                    ))}
                  </div>
                </div>
                Amenities
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                    Amenities
                  </h3>
                  <div className="space-y-2.5">
                    {amenityOptions.map((a) => (
                      <label
                        key={a}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <div
                          onClick={() => {
                            toggleAmenity(a);
                            setPage(1);
                          }}
                          className="w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all"
                          style={{
                            background: selectedAmenities.includes(a)
                              ? "#3d5496"
                              : "#fff",
                            borderColor: selectedAmenities.includes(a)
                              ? "#3d5496"
                              : "#d1d5db",
                          }}
                        >
                          {selectedAmenities.includes(a) && (
                            <span className="text-white text-xs">✓</span>
                          )}
                        </div>
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          {a}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside> */}

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3d5496] text-gray-600 bg-white"
                  >
                    {sortOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>

                  {/* View toggle */}
                  <div className="flex border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setViewMode("grid")}
                      className="px-3 py-2.5 text-sm transition-all"
                      style={{
                        background: viewMode === "grid" ? "#3d5496" : "#fff",
                        color: viewMode === "grid" ? "#fff" : "#666",
                      }}
                    >
                      ⊞
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className="px-3 py-2.5 text-sm transition-all"
                      style={{
                        background: viewMode === "list" ? "#3d5496" : "#fff",
                        color: viewMode === "list" ? "#fff" : "#666",
                      }}
                    >
                      ☰
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href="/shortlets/properties"
                    className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    View Shortlets →
                  </Link>
                  {/* <button
                    onClick={() => setFiltersOpen((f) => !f)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-all"
                    style={{ borderColor: "#3d5496", color: "#3d5496" }}
                  >
                    ⚙ Filters{" "}
                    {activeFilterCount > 0 && `(${activeFilterCount})`}
                  </button>
                  <span className="text-sm text-gray-500">
                    <strong style={{ color: "#1a1a2e" }}>
                      {sorted.length}
                    </strong>{" "}
                    properties found
                  </span> */}
                </div>
              </div>

              {/* Active filter chips */}
              {activeFilterCount > 0 && (
                <div className="flex gap-2 flex-wrap mb-5">
                  {activeType !== "All" && (
                    <span
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{
                        background: "rgba(61,84,150,0.1)",
                        color: "#3d5496",
                      }}
                    >
                      {activeType}
                      <button
                        onClick={() => setActiveType("All")}
                        className="hover:opacity-70"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {(priceRange[0] > 0 || priceRange[1] < 200000) && (
                    <span
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{
                        background: "rgba(61,84,150,0.1)",
                        color: "#3d5496",
                      }}
                    >
                      ₦{priceRange[0].toLocaleString()} – ₦
                      {priceRange[1].toLocaleString()}
                      <button
                        onClick={() => setPriceRange([0, 200000])}
                        className="hover:opacity-70"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {minBeds > 0 && (
                    <span
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{
                        background: "rgba(61,84,150,0.1)",
                        color: "#3d5496",
                      }}
                    >
                      {minBeds}+ Beds
                      <button
                        onClick={() => setMinBeds(0)}
                        className="hover:opacity-70"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {minRating > 0 && (
                    <span
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{
                        background: "rgba(61,84,150,0.1)",
                        color: "#3d5496",
                      }}
                    >
                      ★ {minRating}+
                      <button
                        onClick={() => setMinRating(0)}
                        className="hover:opacity-70"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {selectedAmenities.map((a) => (
                    <span
                      key={a}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{
                        background: "rgba(61,84,150,0.1)",
                        color: "#3d5496",
                      }}
                    >
                      {a}
                      <button
                        onClick={() => toggleAmenity(a)}
                        className="hover:opacity-70"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}

              {/* No results */}
              {sorted.length === 0 && (
                <div className="text-center py-24">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "#3d5496" }}
                  >
                    No properties found
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Try adjusting your filters or search query.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="px-6 py-3 rounded-xl font-semibold text-white text-sm"
                    style={{ background: "#3d5496" }}
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* Grid View */}
              {viewMode === "grid" && sorted.length > 0 && (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {paginated.map((p, i) => (
                    <div
                      key={p.id}
                      onClick={() => router.push(`/properties/${p.id}`)}
                      className="bg-white rounded-3xl overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1"
                      style={{
                        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                        animationDelay: `${i * 50}ms`,
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.boxShadow =
                          "0 20px 50px rgba(61,84,150,0.14)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.boxShadow =
                          "0 2px 12px rgba(0,0,0,0.06)")
                      }
                    >
                      {/* Image */}
                      <div
                        className="relative h-48 flex items-center justify-center text-6xl"
                        style={{
                          background:
                            "linear-gradient(135deg, #3d5496, #1e2d5a)",
                        }}
                      >
                        {p.emoji}
                        {p.tag && (
                          <span
                            className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full"
                            style={{ background: "#f9cb01", color: "#3d5496" }}
                          >
                            {p.tag}
                          </span>
                        )}
                        <button
                          onClick={(e) => toggleWishlist(p.id, e)}
                          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all text-sm"
                          style={{
                            background: wishlist.includes(p.id)
                              ? "#f9cb01"
                              : "rgba(255,255,255,0.2)",
                            color: wishlist.includes(p.id) ? "#3d5496" : "#fff",
                          }}
                        >
                          {wishlist.includes(p.id) ? "♥" : "♡"}
                        </button>
                      </div>

                      <div className="p-5">
                        <div className="flex items-start justify-between mb-1">
                          <h3
                            className="font-semibold text-sm leading-snug"
                            style={{ color: "#1a1a2e" }}
                          >
                            {p.name}
                          </h3>
                          <div className="flex items-center gap-0.5 text-xs text-gray-400 shrink-0 ml-2">
                            <span style={{ color: "#f9cb01" }}>★</span>
                            <span
                              className="font-semibold"
                              style={{ color: "#1a1a2e" }}
                            >
                              {p.rating}
                            </span>
                            <span>({p.reviews})</span>
                          </div>
                        </div>
                        <p className="text-gray-400 text-xs mb-3">
                          📍 {p.location}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                          <span>🛏 {p.beds}</span>
                          <span>🚿 {p.baths}</span>
                          <span>📐 {p.sqft}m²</span>
                          <span
                            className="px-2 py-0.5 rounded-full text-xs"
                            style={{
                              background: "rgba(61,84,150,0.07)",
                              color: "#3d5496",
                            }}
                          >
                            {p.type}
                          </span>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div>
                            <span
                              className="font-bold text-base"
                              style={{ color: "#3d5496" }}
                            >
                              ₦{p.price.toLocaleString()}
                            </span>
                            <span className="text-gray-400 text-xs">
                              /night
                            </span>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              router.push(`/shortlets/properties/${p.id}`);
                            }}
                            className="text-xs font-bold px-4 py-2 rounded-xl text-white transition-opacity hover:opacity-80 cursor-pointer"
                            style={{ background: "#3d5496" }}
                          >
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* List View */}
              {viewMode === "list" && sorted.length > 0 && (
                <div className="space-y-5">
                  {paginated.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => router.push(`/properties/${p.id}`)}
                      className="bg-white rounded-3xl overflow-hidden cursor-pointer flex transition-all duration-300 hover:-translate-y-0.5"
                      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.boxShadow =
                          "0 16px 40px rgba(61,84,150,0.12)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.boxShadow =
                          "0 2px 12px rgba(0,0,0,0.06)")
                      }
                    >
                      {/* Image */}
                      <div
                        className="w-56 shrink-0 flex items-center justify-center text-6xl relative"
                        style={{
                          background:
                            "linear-gradient(135deg, #3d5496, #1e2d5a)",
                        }}
                      >
                        {p.emoji}
                        {p.tag && (
                          <span
                            className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full"
                            style={{ background: "#f9cb01", color: "#3d5496" }}
                          >
                            {p.tag}
                          </span>
                        )}
                      </div>

                      {/* Details */}
                      <div className="flex-1 p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between mb-1">
                            <h3
                              className="font-bold text-base"
                              style={{ color: "#1a1a2e" }}
                            >
                              {p.name}
                            </h3>
                            <div className="flex items-center gap-1 text-sm text-gray-400 shrink-0 ml-3">
                              <span style={{ color: "#f9cb01" }}>★</span>
                              <strong style={{ color: "#1a1a2e" }}>
                                {p.rating}
                              </strong>
                              <span className="text-xs">({p.reviews})</span>
                            </div>
                          </div>
                          <p className="text-gray-400 text-xs mb-3">
                            📍 {p.location}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                            <span>🛏 {p.beds} Beds</span>
                            <span>🚿 {p.baths} Baths</span>
                            <span>📐 {p.sqft} m²</span>
                            <span
                              className="px-2 py-0.5 rounded-full"
                              style={{
                                background: "rgba(61,84,150,0.07)",
                                color: "#3d5496",
                              }}
                            >
                              {p.type}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {p.amenities.slice(0, 4).map((a) => (
                              <span
                                key={a}
                                className="text-xs px-2.5 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100"
                              >
                                {a}
                              </span>
                            ))}
                            {p.amenities.length > 4 && (
                              <span className="text-xs px-2.5 py-1 rounded-full bg-gray-50 text-gray-400 border border-gray-100">
                                +{p.amenities.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
                          <div>
                            <span
                              className="font-bold text-xl"
                              style={{ color: "#3d5496" }}
                            >
                              ₦{p.price.toLocaleString()}
                            </span>
                            <span className="text-gray-400 text-sm">
                              /night
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => toggleWishlist(p.id, e)}
                              className="w-9 h-9 rounded-xl border flex items-center justify-center text-sm transition-all"
                              style={{
                                borderColor: wishlist.includes(p.id)
                                  ? "#f9cb01"
                                  : "#e5e7eb",
                                color: wishlist.includes(p.id)
                                  ? "#f9cb01"
                                  : "#aaa",
                              }}
                            >
                              {wishlist.includes(p.id) ? "♥" : "♡"}
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                router.push(`/properties/${p.id}`);
                              }}
                              className="px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
                              style={{ background: "#3d5496" }}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Load More */}
              {hasMore && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setPage((p) => p + 1)}
                    className="px-10 py-3.5 rounded-2xl font-semibold text-sm border-2 transition-all hover:opacity-80"
                    style={{ borderColor: "#3d5496", color: "#3d5496" }}
                  >
                    Load More Properties ({sorted.length - paginated.length}{" "}
                    remaining)
                  </button>
                </div>
              )}

              {/* End of results */}
              {/* {!hasMore && sorted.length > 0 && (
                <div className="text-center mt-12 text-gray-400 text-sm">
                  You've seen all {sorted.length} properties
                </div>
              )} */}
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
