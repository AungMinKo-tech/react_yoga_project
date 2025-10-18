import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for mobile menu icons

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 flex justify-between items-center h-20 transition-all ${isScrolled ? 'bg-white shadow-md border-b border-gray-200' : 'bg-transparent'}`}
    >
      {/* Left: Logo */}
      <div className="ml-32 flex items-center space-x-2">
        <img
          src="assets/logo1.png"
          alt="Logo"
          className="h-20 w-20"
        />
      </div>

      <div className="mr-16 hidden md:flex items-center space-x-8 bg-white shadow-sm rounded-full border border-gray-200 px-6 py-3">
        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-green-600 transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-green-600 transition-colors"
              onClick={closeMenu}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/programs"
              className="hover:text-green-600 transition-colors"
              onClick={closeMenu}
            >
              Programs ▾
            </Link>
          </li>
          <li>
            <Link
              to="/admin"
              className="hover:text-green-600 transition-colors"
              onClick={closeMenu}
            >
              Admin
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-green-600 transition-colors"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-3">
          <Link
            to="/register"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium"
          >
            Register
          </Link>
          <Link
            to="/signin"
            className="border border-green-500 text-green-600 hover:bg-green-100 px-4 py-2 rounded-md font-medium"
          >
            Sign in
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 rounded-b-2xl shadow-md md:hidden z-1">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-600 font-medium">
            <li>
              <Link to="/" onClick={closeMenu} className="hover:text-green-600">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={closeMenu}
                className="hover:text-green-600"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/programs"
                onClick={closeMenu}
                className="hover:text-green-600"
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                onClick={closeMenu}
                className="hover:text-green-600"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="hover:text-green-600"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="flex flex-col items-center space-y-2 pb-4">
            <Link
              to="/register"
              onClick={closeMenu}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium w-4/5 text-center"
            >
              Register
            </Link>
            <Link
              to="/signin"
              onClick={closeMenu}
              className="border border-green-500 text-green-600 hover:bg-green-100 px-6 py-2 rounded-md font-medium w-4/5 text-center"
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
