"use client";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <section className="bg-[var(--cs-powder)]/50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="font-qwitcher text-7xl xl:text-9xl text-foreground mb-4">
            G<span className="text-primary font-semibold">et </span>
            i<span className="text-primary font-semibold">n </span>
            T<span className="text-primary font-semibold">ouch</span>
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            We’d love to hear from you! Whether you’re planning your stay, 
            booking a cooking class, or have any questions — feel free to reach out.  
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-lg transition">
            <Phone className="mx-auto text-[var(--cs-blue-dark)] mb-4" size={36} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600">+94 71 234 5678</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-lg transition">
            <Mail className="mx-auto text-[var(--cs-blue-dark)] mb-4" size={36} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">info@diarlyguesthouse.com</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-lg transition">
            <MapPin className="mx-auto text-[var(--cs-blue-dark)] mb-4" size={36} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Us</h3>
            <p className="text-gray-600">
              No. 12, Lake Road,<br />
              Tissamaharama, Sri Lanka
            </p>
          </div>
        </div>

        {/* Contact Form + Map */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[var(--cs-blue-dark)] text-white px-6 py-3 rounded-md hover:bg-[var(--cs-blue-light)]/80 hover:text-[var(--cs-blue-dark)] transition w-full font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-md h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.596711401504!2d81.2864!3d6.2828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4d7d8f3c3cd7f%3A0x8a6d6cb6e2cb7cb3!2sTissamaharama!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
