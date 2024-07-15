import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="shadow sticky z-50 top-0 transition-all">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="Collegeshodh logo_page-0001.png"
              className="mr-3 h-15 w-20"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <button className="block lg:hidden m-4" onClick={toggleMenu}>
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
          <div
            className={`lg:flex lg:w-auto lg:order-1 m-auto ${
              menuOpen ? "block" : "hidden"
            }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row sm:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-600" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/blogs"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-600" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                  }
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/colleges"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-600" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                  }
                >
                  Ranking
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"https://entechonline.com/https://entechonline.com/"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-600" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                  }
                >
                  Explore Your Passion
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/programs"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-600" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                  }
                >
                  Courses
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-600" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                  }
                >
                  About us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
