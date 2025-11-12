import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-amber-50 border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-800">Diarly Home</h2>
          <p className="text-gray-700 mt-2 text-sm">
            A peaceful getaway offering authentic Sri Lankan hospitality,
            home-cooked meals, and unforgettable Yala safari adventures.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-gray-700 hover:text-yellow-700 transition">Home</Link></li>
            <li><Link href="/guest-house" className="text-gray-700 hover:text-yellow-700 transition">Guest House</Link></li>
            <li><Link href="/cooking-class" className="text-gray-700 hover:text-yellow-700 transition">Cooking Class</Link></li>
            <li><Link href="/safari" className="text-gray-700 hover:text-yellow-700 transition">Yala Safari</Link></li>
            <li><Link href="/contact" className="text-gray-700 hover:text-yellow-700 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="text-gray-700 hover:text-yellow-700 transition transform hover:scale-110"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-yellow-700 transition transform hover:scale-110"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-yellow-700 transition transform hover:scale-110"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-200 py-4 text-center text-sm text-gray-600 bg-amber-100">
        © {new Date().getFullYear()} Diarly Home. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
