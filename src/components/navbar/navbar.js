import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white navbar-border navbar-padding">
        <div className=" flex flex-wrap items-center justify-between  p-4  ">
          <NavLink to="/" className="flex items-center">
            <img src="last.jpeg" className="h-12 mr-5" alt="logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Udyan Sathi
            </span>
          </NavLink>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
              <li>
                <NavLink
                  to="/air-quality"
                  className="lock py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 nav-link "
                  aria-current="page"
                >
                  Air Quality
                </NavLink>
              </li>
              <li className="link-seperator"></li>
              <li>
                <NavLink
                  to="/water-quality"
                  className="lock py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 nav-link "
                >
                  Water Quality
                </NavLink>
              </li>
              <li className="link-seperator"></li>
              <li>
                <NavLink
                  to="/stats"
                  className="lock py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 nav-link"
                >
                  Stats
                </NavLink>
              </li>
              <li className="link-seperator"></li>
              <li>
                <NavLink
                  to="/analysis"
                  className="lock py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 nav-link"
                >
                  Analysis
                </NavLink>
              </li>
              <li className="link-seperator"></li>
              <li>
                <NavLink
                  to="/about"
                  className="lock py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 nav-link"
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
