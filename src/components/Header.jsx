import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gray-800 text-white px-4 py-3 shadow-md">
      <Link to="/" className="flex items-center">
        <img className="w-10 h-10" src={Logo} alt="logo" /><span className="ml-1 text-lg font-medium hover:text-gray-700">WriteNode</span>
      </Link>
      <nav className="flex gap-6 text-lg font-medium">
        <Link to="/" className="hover:text-gray-700">Home</Link>
        <button className="hover:text-gray-700 focus:outline-none">Login</button>
        <Link to="create" className="hover:text-gray-700">Create</Link>
      </nav>
    </header>
  );
};

export default Header;
