import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-brown">
            <Link href="/">Dearly Holiday</Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-brown hover:text-green">Home</Link>
            <Link href="/about" className="text-brown hover:text-green">About</Link>
            <Link href="/guest-house" className="text-brown hover:text-green">Guest House</Link>
            <Link href="/cooking-class" className="text-brown hover:text-green">Cooking Class</Link>
            <Link href="/yala-safari" className="text-brown hover:text-green">Yala Safari</Link>
            <Link href="/gallery" className="text-brown hover:text-green">Gallery</Link>
            <Link href="/contact" className="text-brown hover:text-green">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
