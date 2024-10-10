import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
// import "../../styles/Header.css";

// Navigation items with their labels and corresponding paths
const navItems = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Rankings", to: "/colleges" },
  // { label: "Blogs", to: "/blogs" },
  { label: "Contact Us", to: "/contact" },
];

export default function Header() {
  // State to manage the mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="shadow sticky z-50 top-0 transition-all">
      <nav className="bg-white border-gray-200 px-4 md:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div>
            <Link to="/" className="flex items-center">
              <img
                src="Collegeshodh logo_page-0001.png"
                className="mr-3 h-15 w-20"
                alt="Logo"
              />
            </Link>
          </div>

          <div className="flex items-center md:order-2 flex-row">
            <Link
              to="https://entechonline.com/"
              className="hidden md:block text-white bg-orange-500 hover:bg-orange-700 font-medium rounded-lg text-sm px-4 md:px-5 py-2 md:py-2.5 mr-2 focus:outline-none"
            >
              Explore Your Passion
            </Link>
          </div>
          <div
            className={`md:flex md:w-auto m-auto ${menuOpen ? "block" : "hidden"
              }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row sm:space-x-8 md:mt-0">
              {/* Render navigation links */}
              {navItems.map((item, index) => (
                <li key={index}
                  className="ml-8"
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-orange-600 md:p-0`
                    }
                    onClick={closeMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              {/* Mobile-specific link */}
              <li className="block md:hidden">
                <Link
                  to="https://entechonline.com/"
                  className="text-white bg-orange-500 hover:bg-orange-700 font-medium rounded-lg text-sm px-4 md:px-5 py-2 md:py-2.5 mr-2 focus:outline-none"
                  onClick={closeMenu}
                   target="_blank"
                   rel="noopener noreferrer"
                >
                  Explore Your Passion
                </Link>
              </li>
            </ul>
          </div>
          <button className="block md:hidden m-4" onClick={toggleMenu}>
              {/* Hamburger icon */}
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
                />
              </svg>
            </button>
        </div>
      </nav>
    </header>
  );
}
