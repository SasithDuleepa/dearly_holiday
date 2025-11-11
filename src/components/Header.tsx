"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/guest-house', label: 'Guest House' },
    { href: '/cooking-class', label: 'Cooking Class' },
    { href: '/safari', label: 'Yala Safari' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-ivory-background shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold text-forest-green">
          <Link href="/">Diarly Home</Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`pb-1 border-b-2 ${
                pathname === link.href
                  ? 'border-terracotta-accent text-forest-green'
                  : 'border-transparent text-forest-green hover:border-terracotta-accent'
              } transition-colors duration-300`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/booking" className="hidden md:block bg-terracotta-accent text-white font-bold py-2 px-4 rounded-full hover:bg-opacity-80 transition-colors duration-300">
          Book Now
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <svg className="h-6 w-6 text-forest-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6 text-forest-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-ivory-background">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`pb-1 border-b-2 ${
                  pathname === link.href
                    ? 'border-terracotta-accent text-forest-green'
                    : 'border-transparent text-forest-green hover:border-terracotta-accent'
                } transition-colors duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/booking" className="bg-terracotta-accent text-white font-bold py-2 px-4 rounded-full hover:bg-opacity-80 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
