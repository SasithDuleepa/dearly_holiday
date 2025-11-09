const Footer = () => {
  return (
    <footer className="bg-beige py-6">
      <div className="container mx-auto px-6 text-center text-brown">
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-green">Instagram</a>
          <a href="#" className="hover:text-green">Facebook</a>
          <a href="#" className="hover:text-green">WhatsApp</a>
        </div>
        <p className="mt-4">&copy; 2024 Dearly Holiday. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
