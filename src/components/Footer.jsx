import React from "react";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Logo and Description */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-bold">writeNode</h1>
          <p className="text-gray-400 mt-2">
            Creating dynamic Posts .
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-400">123 Street, Lahore, Pakistan</p>
          <p className="text-gray-400">Email: contact@mywebsite.com</p>
          <p className="text-gray-400">Phone: +92 123 456 7890</p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-400 text-sm">
          © 2025 writeNode. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
