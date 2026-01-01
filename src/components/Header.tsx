"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import LogoWhite from "../../public/icon/Group 9.png"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false); // background
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true); // translate
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // --- Show/hide header immediately based on scroll direction ---
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowHeader(false); // hide first
      } else {
        setShowHeader(true); // show on scroll up
      }

      lastScrollY.current = currentScrollY;

      // --- Change background AFTER a small delay (after header hides) ---
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsScrolled(currentScrollY > 0);
      }, 200); // 100ms delay
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
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
  className={`fixed top-0 left-0 w-[100vw] z-50 transition-transform duration-500 flex justify-center items-center ${
    showHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
  } ${
    isScrolled
      ? "backdrop-blur-md bg-[#007200] shadow-md border-none"
      : "bg-[var(--cs-powder)]/0  border-b-white/50 border-b-[1px]"
  }`}
>
      <div className="min-w-[100vw] flex items-center justify-between  px-5 lg:px-10">
        <div className="text-xl font-semibold text-[var(--cs-blue-dark)] lg:pr-5">
          <Link href="/" className="flex gap-4 items-center">
            < Image src={LogoWhite} alt="My Logo"  className="w-[60px] sm:w-[50px] md:w-[70px] lg:w-[80px] my-2"/>
            <div className="flex flex-col">
              <p className="text-white text-[18px] whitespace-normal font-[200] tracking-[1px]">
                Dearly Holiday
              </p>
              <p className="hidden md:block lg:block  text-[15px] text-white font-[100] tracking-[1px] leading-4 font-lora">
                dream venue for <br />you to rest
              </p>
            </div>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-[17px] font-medium transition-all duration-300 text-center  ${
                pathname === link.href
                  ? "text-[var(--cs-text-light)]"
                  : isScrolled
                  ? "text-[white] hover:text-[white]/50"
                  : "text-white hover:text-[white]/50"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] ${isScrolled ? "bg-white"  : "bg-[#007200]"}  transition-transform duration-300 origin-right ${
                  pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </Link>
          ))}

          <Link
            href="/booking"
            className={` ${isScrolled ? "bg-white text-[#007200]" : "bg-[#007200] text-white"} font-semibold py-2 px-5 rounded-full text-center
               hover:bg-[var(--cs-blue-dark)] transition duration-300 shadow-md`}
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

{/* Mobile Menu */}
<div
  className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 overflow-hidden z-60 ${
    isMenuOpen ? "h-auto py-6 opacity-100" : "h-0 py-0 opacity-0"
  }`}
>
  <nav className="flex flex-col items-center space-y-5">
    {navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        onClick={() => setIsMenuOpen(false)}
        className={`text-lg font-medium transition-all duration-300 ${
          pathname === link.href
            ? "text-[var(--cs-blue-medium)]"
            : "text-[var(--cs-blue-dark)] hover:text-[var(--cs-blue-medium)]"
        }`}
      >
        {link.label}
      </Link>
    ))}
    <Link
      href="/booking"
      onClick={() => setIsMenuOpen(false)}
      className={`font-semibold py-2 px-6 rounded-full shadow-md transition-colors duration-300 ${
        isScrolled ? "bg-white text-[#007200]" : "bg-[#007200] text-white"
      }`}
    >
      Book Now
    </Link>
  </nav>
</div>

    </header>
  );
};

export default Header;
