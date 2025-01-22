import React from "react";
import { Link } from "react-router-dom";
import UseTitle from "../hooks/UseTitle.jsx";
const PageNotFound = () => {
  UseTitle("404! Page Not found")
  return (
    <div>
      <h1>404! Page Not Found </h1>
      <p className="mb-10">cannot found the requested url it may be not defined or deleted</p>
      <Link to="/" className="hover:text-blue-800 text-black bg-green-300 mt-10 px-2 py-2 rounded-lg">
       back to home
      </Link>
    </div>
  );
};

export default PageNotFound;
