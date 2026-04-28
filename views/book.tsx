'use client'
import { useParams, useSearchParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Navbar from "@/components/shortlets/Navbar";
import Footer from "@/components/shortlets/Footer";
import Link from "next/link";

const properties = [
  { id: 1, name: 'The Grand Penthouse', location: 'Victoria Island, Lagos', price: 85000, emoji: '🏙️', beds: 3, baths: 2 },
  { id: 2, name: 'Garden View Studio', location: 'Lekki Phase 1, Lagos', price: 45000, emoji: '🌿', beds: 1, baths: 1 },
  { id: 3, name: 'Luxury Executive Suite', location: 'Ikoyi, Lagos', price: 120000, emoji: '✨', beds: 4, baths: 3 },
  { id: 4, name: 'Cozy City Apartment', location: 'Ikeja GRA, Lagos', price: 35000, emoji: '🏡', beds: 2, baths: 1 },
  { id: 5, name: 'Beachfront Retreat', location: 'Elegushi, Lagos', price: 95000, emoji: '🌊', beds: 3, baths: 2 },
  { id: 6, name: 'Corporate Residence', location: 'Eko Atlantic, Lagos', price: 150000, emoji: '🏢', beds: 5, baths: 4 },
]

type Step = 'details' | 'payment' | 'confirm'

export default function BookNow() {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()

  const property = properties.find(p => p.id === Number(params.id)) || properties[0]
  const checkIn = searchParams.get('checkIn') || ''
  const checkOut = searchParams.get('checkOut') || ''
  const guests = Number(searchParams.get('guests') || 1)

  const [step, setStep] = useState<Step>('details')
  const [scrolled, setScrolled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [booked, setBooked] = useState(false)

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    cardNumber: '', expiry: '', cvv: '', cardName: '',
    specialRequests: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nights = checkIn && checkOut
    ? Math.max(0, (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24))
    : 1

  const subtotal = property.price * nights
  const serviceFee = Math.round(subtotal * 0.08)
  const total = subtotal + serviceFee

  const formatDate = (d: string) => d ? new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '—'

  const formatCard = (val: string) => val.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim()
  const formatExpiry = (val: string) => {
    const v = val.replace(/\D/g, '').slice(0, 4)
    return v.length >= 3 ? `${v.slice(0, 2)}/${v.slice(2)}` : v
  }

  const update = (field: string, value: string) => {
    setForm(f => ({ ...f, [field]: value }))
    setErrors(e => ({ ...e, [field]: '' }))
  }

  const validateDetails = () => {
    const e: Record<string, string> = {}
    if (!form.firstName) e.firstName = 'Required'
    if (!form.lastName) e.lastName = 'Required'
    if (!form.email.includes('@')) e.email = 'Valid email required'
    if (form.phone.length < 10) e.phone = 'Valid phone required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const validatePayment = () => {
    const e: Record<string, string> = {}
    if (form.cardNumber.replace(/\s/g, '').length < 16) e.cardNumber = 'Enter 16-digit card number'
    if (form.expiry.length < 5) e.expiry = 'Enter expiry date'
    if (form.cvv.length < 3) e.cvv = 'Enter CVV'
    if (!form.cardName) e.cardName = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleNext = () => {
    if (step === 'details' && validateDetails()) setStep('payment')
    else if (step === 'payment' && validatePayment()) setStep('confirm')
  }

  const handleConfirm = async () => {
    setLoading(true)
    await new Promise(r => setTimeout(r, 2000))
    setLoading(false)
    setBooked(true)
  }

  const steps: { key: Step; label: string }[] = [
    { key: 'details', label: 'Your Details' },
    { key: 'payment', label: 'Payment' },
    { key: 'confirm', label: 'Confirm' },
  ]
  const stepIndex = steps.findIndex(s => s.key === step)

  if (booked) {
    return (
      <>
        <Navbar />
        <main style={{ background: '#fafaf8', minHeight: '100vh', paddingTop: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="text-center px-6 max-w-lg mx-auto py-24">
            <div className="w-24 h-24 rounded-full flex items-center justify-center text-5xl mx-auto mb-8 shadow-xl"
              style={{ background: 'linear-gradient(135deg, #3d5496, #2a3d6e)' }}>
              ✅
            </div>
            <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: 'Georgia, serif', color: '#3d5496' }}>
              Booking Confirmed!
            </h1>
            <p className="text-gray-500 mb-2 leading-relaxed">
              Your reservation for <strong style={{ color: '#1a1a2e' }}>{property.name}</strong> is confirmed.
              A confirmation has been sent to <strong style={{ color: '#1a1a2e' }}>{form.email}</strong>.
            </p>
            <div className="bg-white rounded-2xl p-6 my-8 border border-gray-100 text-left space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Booking Reference</span>
                <span className="font-mono font-bold" style={{ color: '#3d5496' }}>LUX-{Math.random().toString(36).slice(2, 8).toUpperCase()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Property</span>
                <span className="font-medium">{property.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Check-in</span>
                <span className="font-medium">{formatDate(checkIn)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Check-out</span>
                <span className="font-medium">{formatDate(checkOut)}</span>
              </div>
              <div className="flex justify-between text-sm pt-3 border-t border-gray-100 font-bold" style={{ color: '#3d5496' }}>
                <span>Total Paid</span>
                <span>₦{total.toLocaleString()}</span>
              </div>
            </div>
            <button
              onClick={() => router.push('/')}
              className="px-8 py-3 rounded-2xl font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: '#3d5496' }}
            >
              Back to Home
            </button>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main
        style={{ background: "#fafaf8", minHeight: "100vh", paddingTop: 80 }}
      >
        {/* Header */}
        <div style={{ background: "#3d5496" }} className="py-10 px-6">
          <div className="max-w-5xl mx-auto">
            <Link
              href={`/shortlets/properties/${property.id}`}
              className="text-white/60 text-sm hover:text-white mb-4 block transition-colors"
            >
              ← Back to property
            </Link>
            <h1
              className="text-2xl font-bold text-white mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Your Booking
            </h1>

            {/* Step Progress */}
            {/* <div className="flex items-center gap-0">
              {steps.map((s, i) => (
                <div key={s.key} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all"
                      style={{
                        background:
                          i <= stepIndex ? "#f9cb01" : "rgba(255,255,255,0.15)",
                        color:
                          i <= stepIndex ? "#3d5496" : "rgba(255,255,255,0.5)",
                      }}
                    >
                      {i < stepIndex ? "✓" : i + 1}
                    </div>
                    <span
                      className="text-xs mt-1 font-medium hidden sm:block"
                      style={{
                        color:
                          i <= stepIndex ? "#f9cb01" : "rgba(255,255,255,0.4)",
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="w-16 sm:w-24 h-0.5 mx-2 mb-4 transition-all"
                      style={{
                        background:
                          i < stepIndex ? "#f9cb01" : "rgba(255,255,255,0.2)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div> */}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-10">
          {/* Form Area */}
          <div className="lg:col-span-2">
            {/* STEP 1 — Guest Details */}
            {step === "details" && (
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h2
                  className="text-xl font-bold mb-6"
                  style={{ fontFamily: "Georgia, serif", color: "#3d5496" }}
                >
                  Guest Details
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    {
                      label: "First Name",
                      field: "firstName",
                      type: "text",
                      placeholder: "John",
                    },
                    {
                      label: "Last Name",
                      field: "lastName",
                      type: "text",
                      placeholder: "Doe",
                    },
                    {
                      label: "Email Address",
                      field: "email",
                      type: "email",
                      placeholder: "john@example.com",
                    },
                    {
                      label: "Phone Number",
                      field: "phone",
                      type: "tel",
                      placeholder: "+234 800 000 0000",
                    },
                  ].map(({ label, field, type, placeholder }) => (
                    <div key={field}>
                      <label className="block text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">
                        {label}
                      </label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={form[field as keyof typeof form]}
                        onChange={(e) => update(field, e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${errors[field] ? "border-red-300 bg-red-50" : "border-gray-200 focus:border-[#3d5496]"}`}
                      />
                      {errors[field] && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors[field]}
                        </p>
                      )}
                    </div>
                  ))}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">
                      Special Requests (optional)
                    </label>
                    <textarea
                      placeholder="e.g. Early check-in, extra towels, airport pickup..."
                      value={form.specialRequests}
                      onChange={(e) =>
                        update("specialRequests", e.target.value)
                      }
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#3d5496] transition-colors resize-none"
                    />
                  </div>
                </div>
                <button
                  onClick={handleNext}
                  className="mt-6 w-full py-4 rounded-2xl font-bold text-white transition-opacity hover:opacity-90"
                  style={{ background: "#3d5496" }}
                >
                  {/* Continue to Payment → */}
                  Submit Guest Details →
                </button>
              </div>
            )}

            {/* STEP 2 — Payment */}
            {step === "payment" && (
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h2
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: "Georgia, serif", color: "#3d5496" }}
                >
                  Payment Details
                </h2>
                <p className="text-gray-400 text-sm mb-6">
                  Your payment is secured with 256-bit SSL encryption
                </p>

                {/* Card visual */}
                <div
                  className="h-44 rounded-2xl p-6 mb-8 relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #3d5496, #1e2d5a)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 80% 20%, #f9cb01 0%, transparent 50%)",
                    }}
                  />
                  <div className="relative h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="text-white/60 text-xs uppercase tracking-widest">
                        LuxStay Card
                      </div>
                      <div className="text-2xl">💳</div>
                    </div>
                    <div>
                      <div className="text-white font-mono text-lg tracking-widest mb-3">
                        {form.cardNumber || "•••• •••• •••• ••••"}
                      </div>
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-white/40 text-xs uppercase">
                            Card Holder
                          </div>
                          <div className="text-white text-sm font-medium">
                            {form.cardName || "YOUR NAME"}
                          </div>
                        </div>
                        <div>
                          <div className="text-white/40 text-xs uppercase">
                            Expires
                          </div>
                          <div className="text-white text-sm font-medium">
                            {form.expiry || "MM/YY"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      value={form.cardNumber}
                      onChange={(e) =>
                        update("cardNumber", formatCard(e.target.value))
                      }
                      maxLength={19}
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-mono focus:outline-none transition-colors ${errors.cardNumber ? "border-red-300 bg-red-50" : "border-gray-200 focus:border-[#3d5496]"}`}
                    />
                    {errors.cardNumber && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.cardNumber}
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={form.cardName}
                      onChange={(e) => update("cardName", e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${errors.cardName ? "border-red-300 bg-red-50" : "border-gray-200 focus:border-[#3d5496]"}`}
                    />
                    {errors.cardName && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.cardName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={form.expiry}
                      onChange={(e) =>
                        update("expiry", formatExpiry(e.target.value))
                      }
                      maxLength={5}
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-mono focus:outline-none transition-colors ${errors.expiry ? "border-red-300 bg-red-50" : "border-gray-200 focus:border-[#3d5496]"}`}
                    />
                    {errors.expiry && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.expiry}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">
                      CVV
                    </label>
                    <input
                      type="password"
                      placeholder="•••"
                      value={form.cvv}
                      onChange={(e) =>
                        update(
                          "cvv",
                          e.target.value.replace(/\D/g, "").slice(0, 4),
                        )
                      }
                      maxLength={4}
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-mono focus:outline-none transition-colors ${errors.cvv ? "border-red-300 bg-red-50" : "border-gray-200 focus:border-[#3d5496]"}`}
                    />
                    {errors.cvv && (
                      <p className="text-red-400 text-xs mt-1">{errors.cvv}</p>
                    )}
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => setStep("details")}
                    className="px-6 py-4 rounded-2xl font-semibold text-sm border transition-colors hover:bg-gray-50"
                    style={{ borderColor: "#3d5496", color: "#3d5496" }}
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex-1 py-4 rounded-2xl font-bold text-white transition-opacity hover:opacity-90"
                    style={{ background: "#3d5496" }}
                  >
                    Review Booking →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 — Review & Confirm */}
            {step === "confirm" && (
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h2
                  className="text-xl font-bold mb-6"
                  style={{ fontFamily: "Georgia, serif", color: "#3d5496" }}
                >
                  Review Your Booking
                </h2>

                {/* Guest summary */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-4">
                    Guest Information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      {
                        label: "Name",
                        value: `${form.firstName} ${form.lastName}`,
                      },
                      { label: "Email", value: form.email },
                      { label: "Phone", value: form.phone },
                      {
                        label: "Guests",
                        value: `${guests} guest${guests > 1 ? "s" : ""}`,
                      },
                    ].map(({ label, value }) => (
                      <div
                        key={label}
                        className="bg-gray-50 rounded-xl px-4 py-3"
                      >
                        <div className="text-xs text-gray-400 mb-0.5">
                          {label}
                        </div>
                        <div className="text-sm font-medium text-gray-700">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                  {form.specialRequests && (
                    <div className="bg-gray-50 rounded-xl px-4 py-3 mt-3">
                      <div className="text-xs text-gray-400 mb-0.5">
                        Special Requests
                      </div>
                      <div className="text-sm text-gray-700">
                        {form.specialRequests}
                      </div>
                    </div>
                  )}
                </div>

                {/* Payment summary */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-4">
                    Payment Method
                  </h3>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                    <span className="text-2xl">💳</span>
                    <div>
                      <div className="text-sm font-medium text-gray-700">
                        •••• •••• ••••{" "}
                        {form.cardNumber.replace(/\s/g, "").slice(-4)}
                      </div>
                      <div className="text-xs text-gray-400">
                        {form.cardName}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cancellation policy */}
                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 mb-6">
                  <div className="flex gap-3">
                    <span className="text-lg">ℹ️</span>
                    <div>
                      <div className="text-sm font-semibold text-amber-800 mb-1">
                        Cancellation Policy
                      </div>
                      <p className="text-amber-700 text-xs leading-relaxed">
                        Free cancellation up to 48 hours before check-in. After
                        that, the first night is non-refundable.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep("payment")}
                    className="px-6 py-4 rounded-2xl font-semibold text-sm border transition-colors hover:bg-gray-50"
                    style={{ borderColor: "#3d5496", color: "#3d5496" }}
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleConfirm}
                    disabled={loading}
                    className="flex-1 py-4 rounded-2xl font-bold text-white transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
                    style={{ background: loading ? "#7a8fbb" : "#3d5496" }}
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      `Confirm & Pay ₦${total.toLocaleString()}`
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right — Booking Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Property image */}
              <div
                className="h-40 flex items-center justify-center text-6xl"
                style={{
                  background: "linear-gradient(135deg, #3d5496, #1e2d5a)",
                }}
              >
                {property.emoji}
              </div>
              <div className="p-6">
                <h3
                  className="font-bold text-base mb-1"
                  style={{ color: "#1a1a2e" }}
                >
                  {property.name}
                </h3>
                <p className="text-gray-400 text-xs mb-4">
                  📍 {property.location}
                </p>
                <div className="flex gap-4 text-xs text-gray-400 mb-5">
                  <span>🛏 {property.beds} Beds</span>
                  <span>🚿 {property.baths} Baths</span>
                </div>

                <div className="space-y-2 text-sm border-t border-gray-100 pt-5">
                  <div className="flex justify-between text-gray-500">
                    <span>Check-in</span>
                    <span className="font-medium text-gray-700">
                      {formatDate(checkIn)}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Check-out</span>
                    <span className="font-medium text-gray-700">
                      {formatDate(checkOut)}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Guests</span>
                    <span className="font-medium text-gray-700">{guests}</span>
                  </div>
                </div>

                <div className="space-y-2 text-sm border-t border-gray-100 pt-5 mt-4">
                  <div className="flex justify-between text-gray-500">
                    <span>
                      ₦{property.price.toLocaleString()} × {nights} night
                      {nights > 1 ? "s" : ""}
                    </span>
                    <span>₦{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Service fee</span>
                    <span>₦{serviceFee.toLocaleString()}</span>
                  </div>
                  <div
                    className="flex justify-between font-bold pt-3 border-t border-gray-100"
                    style={{ color: "#3d5496" }}
                  >
                    <span>Total</span>
                    <span>₦{total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 text-xs text-gray-400">
                  <span>🔒</span>
                  <span>Secured by SSL encryption</span>
                  {/* <span>Secured by SSL encryption</span> */}
                  {/* <span>Secured by SSL encryption</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}