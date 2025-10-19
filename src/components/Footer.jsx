import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-gray-200 pt-10 pb-4 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-2">Helen Healing Resort</h3>
            <p className="text-sm text-gray-300">
              Relax. Recharge. Reconnect with nature and yourself.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Our Services</h4>
            <ul className="space-y-1 text-sm">
              <li className="hover:text-white cursor-pointer">Spa & Massage</li>
              <li className="hover:text-white cursor-pointer">Meditation</li>
              <li className="hover:text-white cursor-pointer">Yoga Retreat</li>
              <li className="hover:text-white cursor-pointer">Detox Therapy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">About Us</h4>
            <ul className="space-y-1 text-sm">
              <li className="hover:text-white cursor-pointer">Our Story</li>
              <li className="hover:text-white cursor-pointer">Team</li>
              <li className="hover:text-white cursor-pointer">Gallery</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4 text-xl">
              <a href="/" className="hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="/" className="hover:text-blue-500">
                <FaFacebook />
              </a>
              <a href="/" className="hover:text-pink-500">
                <FaInstagram />
              </a>
              <a href="/" className="hover:text-red-500">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-500 mt-8 mb-4"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Flow. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
