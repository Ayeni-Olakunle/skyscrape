import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1e2a4a] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">
              CASPIRA
            </h2>

            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit
              amet consec tetur adipiscing elit tellus luctus nec
              ullam.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Link
            </h3>

            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <Link href="#">Home</Link>
              <Link href="#">Team</Link>
              <Link href="#">About</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Services</Link>
              <Link href="#">Contact</Link>
              <Link href="#">Project's</Link>
              <Link href="#">404 Page</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact info
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-yellow-400" />
                (566) 456-7890
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-yellow-400" />
                help@email.com
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-yellow-400 mt-1" />
                66 Broklyn Gold Street. USA
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Newsletter
            </h3>

            <div className="flex items-center bg-white rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter Email address"
                className="flex-1 px-4 py-2 text-sm text-gray-700 outline-none"
              />

              <button className="bg-yellow-500 hover:bg-yellow-600 transition w-10 h-10 flex items-center justify-center rounded-full mr-1">
                <Send size={16} className="text-white" />
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              <div className="w-9 h-9 rounded-full bg-white text-[#1e2a4a] flex items-center justify-center cursor-pointer">
                <Facebook size={16} />
              </div>
              <div className="w-9 h-9 rounded-full bg-white text-[#1e2a4a] flex items-center justify-center cursor-pointer">
                <Twitter size={16} />
              </div>
              <div className="w-9 h-9 rounded-full bg-white text-[#1e2a4a] flex items-center justify-center cursor-pointer">
                <Instagram size={16} />
              </div>
              <div className="w-9 h-9 rounded-full bg-white text-[#1e2a4a] flex items-center justify-center cursor-pointer">
                <Linkedin size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>© Templateorbit.com</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
