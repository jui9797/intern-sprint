import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#7C5A4C] text-white px-6 py-4 border-b-2 border-gray-300">
      <div className="flex items-center justify-between w-full lg:max-w-7xl mx-auto">
        <h2 className="text-xl font-bold">Inertia App</h2>
        {/* menubar for small device */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* nav menu for large device */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="hover:text-black">
            Home
          </a>
          <a href="/about" className="hover:text-black">
            About
          </a>
          <a href="/contact" className="hover:text-black">
            Contact
          </a>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-2">
          <a
            href="/"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="/about"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="/contact"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
