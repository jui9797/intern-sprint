const Footer = () => {
  return (
    <footer className="bg-[#7C5A4C] text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-semibold">© 2025 Inertia App</h2>
            <p className="text-sm text-gray-400">All rights reserved.</p>
          </div>

          {/* Right Side - Links */}
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-blue-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
