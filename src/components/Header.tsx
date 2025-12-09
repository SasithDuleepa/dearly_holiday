"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/guest-house", label: "Guest House" },
    { href: "/cooking-class", label: "Cooking Class" },
    { href: "/safari", label: "Yala Safari" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-md bg-cs-bg-light/70 shadow-md"
          : "glass"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold text-cs-blue-dark">
          <Link href="/">Diarly Home</Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-[17px] font-medium transition-all duration-300 ${
                pathname === link.href
                  ? "text-cs-blue-medium"
                  : isScrolled
                  ? "text-cs-blue-dark hover:text-cs-blue-medium"
                  : "text-cs-text-light hover:text-cs-powder"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-cs-blue-medium transition-transform duration-300 origin-right ${
                  pathname === link.href
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </Link>
          ))}

          <Link
            href="/booking"
            className="bg-cs-blue-medium text-cs-text-light font-semibold py-2 px-5 rounded-full hover:bg-cs-blue-dark transition duration-300 shadow-md"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cs-blue-medium focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      
      
      
      
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-cs-bg-light/95 backdrop-blur-md transition-all duration-500 overflow-hidden ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center space-y-5 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg font-medium transition-all duration-300 ${
                pathname === link.href
                  ? "text-cs-blue-medium"
                  : "text-cs-blue-dark hover:text-cs-blue-medium"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setIsMenuOpen(false)}
            className="bg-cs-blue-medium text-cs-text-light font-semibold py-2 px-6 rounded-full hover:bg-cs-blue-dark transition duration-300 shadow-md"
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
