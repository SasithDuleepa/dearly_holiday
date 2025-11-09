import Link from "next/link";

export default function Home() {
  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594916124233-0255d7f1d24c?q=80&w=1920&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Experience the warmth of Sri Lankan hospitality in Tissamaharama — stay, cook, and explore Yala.
        </h1>
        <div className="flex justify-center space-x-4">
          <Link href="/guest-house" className="bg-brown hover:bg-green text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Book Your Stay
          </Link>
          <Link href="/cooking-class" className="bg-brown hover:bg-green text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Join a Cooking Class
          </Link>
          <Link href="/yala-safari" className="bg-brown hover:bg-green text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Explore Safari
          </Link>
        </div>
      </div>
    </section>
  );
}
