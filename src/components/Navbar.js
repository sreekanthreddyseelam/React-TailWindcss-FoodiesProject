import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-blue-200 text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        <h1 className="font-bold text-xl">Foodies</h1>
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block  hidden">
        <NavLink
          exact
          to="/"
          className="p-4 text-black"
          activeClassName="text-red-500"
        >
          Home
        </NavLink>
        <NavLink
          to="/menu"
          className="p-4 text-black"
          activeClassName="text-red-500"
        >
          Menu
        </NavLink>
        <NavLink
          to="/about"
          className="p-4 text-black"
          activeClassName="text-red-500"
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
