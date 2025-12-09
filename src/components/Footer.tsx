import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-cs-powder border-t border-cs-powder">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-cs-blue-dark">Dearly Home</h2>
          <p className="text-cs-blue-dark mt-3 text-sm leading-relaxed">
            A peaceful getaway offering authentic Sri Lankan hospitality,
            home-cooked meals, and unforgettable Yala safari adventures.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-cs-blue-dark mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-cs-blue-dark hover:text-cs-blue-medium transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/guest-house" className="text-cs-blue-dark hover:text-cs-blue-medium transition">
                Guest House
              </Link>
            </li>
            <li>
              <Link href="/cooking-class" className="text-cs-blue-dark hover:text-cs-blue-medium transition">
                Cooking Class
              </Link>
            </li>
            <li>
              <Link href="/safari" className="text-cs-blue-dark hover:text-cs-blue-medium transition">
                Yala Safari
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-cs-blue-dark hover:text-cs-blue-medium transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold text-cs-blue-dark mb-3">
            Follow Us
          </h3>
          <div className="flex justify-center md:justify-end space-x-5">
            <a
              href="#"
              className="text-cs-blue-dark hover:text-cs-blue-medium transition transform hover:scale-110"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="#"
              className="text-cs-blue-dark hover:text-cs-blue-medium transition transform hover:scale-110"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="#"
              className="text-cs-blue-dark hover:text-cs-blue-medium transition transform hover:scale-110"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cs-blue-light py-4 text-center text-sm text-cs-blue-dark bg-cs-powder">
        © {new Date().getFullYear()} Dearly Home. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
