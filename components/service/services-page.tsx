import { Building2, Wrench, Leaf } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm tracking-[0.4em] text-gray-300 mb-4">
            VALUE OFFERINGS
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Skyscape Facilities & Property Management Ltd
          </h1>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
            With over 5 years of experience in property and facility management,
            we understand that every organization is unique. We implement the
            best strategies to help achieve your goals while reducing operational
            costs and improving productivity in a safe and sustainable manner.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Property Management */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
              <Building2 size={28} />
            </div>

            <h2 className="text-2xl font-semibold mb-4">
              Property Management
            </h2>

            <p className="text-gray-600 mb-6">
              Professional management services designed to maximize property
              value, occupancy rates, and investment returns.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>• Leasing</li>
              <li>• Shortlets</li>
            </ul>
          </div>

          {/* Facility Management */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100 text-green-600 mb-6">
              <Wrench size={28} />
            </div>

            <h2 className="text-2xl font-semibold mb-4">
              Facility Management
            </h2>

            <p className="text-gray-600 mb-6">
              Comprehensive maintenance and operational support to ensure your
              facilities remain efficient, safe, and fully functional.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>• Electrical Systems</li>
              <li>• Maintenance Services</li>
              <li>• Planned Preventive Maintenance</li>
              <li>• Plumbing Systems</li>
              <li>• Refurbishments and Fit Outs</li>
              <li>• Life Safety Systems</li>
              <li>• HVAC Systems</li>
              <li>• Lighting Systems</li>
            </ul>
          </div>

          {/* Environmental Services */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 mb-6">
              <Leaf size={28} />
            </div>

            <h2 className="text-2xl font-semibold mb-4">
              Environmental Services
            </h2>

            <p className="text-gray-600 mb-6">
              Sustainable environmental solutions focused on safety, cleanliness,
              and long-term environmental responsibility.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>• Waste Management</li>
              <li>• Litter Control</li>
              <li>• Vegetation Control</li>
              <li>• Health, Safety and Environment Services</li>
              <li>• Sustainability</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CTA Section
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Improve Your Property & Facilities?
          </h2>

          <p className="text-gray-300 mb-6">
            Partner with Skyscape for reliable, cost-effective, and sustainable
            property and facility management solutions.
          </p>

          <button className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>
      </section> */}

      
    </main>
  );
}
