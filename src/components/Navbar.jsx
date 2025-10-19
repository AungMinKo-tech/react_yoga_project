import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
      <div className="ml-4 md:ml-8 lg:ml-32 flex items-center space-x-2">
        <img
          src="assets/logo1.png"
          alt="Logo"
          className="h-16 w-16 md:h-20 md:w-20"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="mr-4 md:mr-8 lg:mr-16 hidden md:flex items-center space-x-8 bg-white shadow-sm rounded-full border border-gray-200 px-4 md:px-6 py-2 md:py-3">
        <ul className="hidden md:flex space-x-4 lg:space-x-8 text-gray-600 font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-green-600 transition-colors text-sm lg:text-base"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-green-600 transition-colors text-sm lg:text-base"
              onClick={closeMenu}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/programs"
              className="hover:text-green-600 transition-colors text-sm lg:text-base"
              onClick={closeMenu}
            >
              Programs ▾
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-green-600 transition-colors text-sm lg:text-base"
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="hover:text-green-600 transition-colors text-sm lg:text-base"
              onClick={closeMenu}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-green-600 transition-colors text-sm lg:text-base"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-2 lg:space-x-3">
          <Link
            to="/register"
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-md font-medium text-sm lg:text-base"
          >
            Register
          </Link>
          <Link
            to="/signin"
            className="border border-green-500 text-green-600 hover:bg-green-100 px-3 py-2 lg:px-4 lg:py-2 rounded-md font-medium text-sm lg:text-base"
          >
            Sign in
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center mr-4">
        <button onClick={toggleMenu} className="text-gray-600">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 rounded-b-2xl shadow-md md:hidden z-50">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-600 font-medium">
            <li>
              <Link to="/" onClick={closeMenu} className="hover:text-green-600 text-base">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={closeMenu}
                className="hover:text-green-600 text-base"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/programs"
                onClick={closeMenu}
                className="hover:text-green-600 text-base"
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={closeMenu}
                className="hover:text-green-600 text-base"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                onClick={closeMenu}
                className="hover:text-green-600 text-base"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="hover:text-green-600 text-base"
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