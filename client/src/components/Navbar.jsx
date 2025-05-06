import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const NAVIGATION = [
  { heading: "WILDLIFE", link: "/wildlife"},
  { heading: "JOIN US", link: "/jointeam" },
  { heading: "CONTACT", link: "/contact-us" },
  { heading: "PROGRAMS", link: "/programs" },
  { heading: "BLOG", link: "/blog" },
];

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  // Toggle menu visibility
  const toggleNav = () => setNavOpen((prev) => !prev);

  return (
    <nav className="relative bg-green-950 text-white flex justify-between flex-col md:flex-row items-left shadow-lg py-6 px-4">
      
      {/* Hamburger Icon for Mobile View */}
      <div className="absolute md:hidden top-5 right-5">


        <button
          className="text-gray-600 w-10 h-10 relative focus:outline-none bg-white"
          onClick={toggleNav}
        >
          <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${navOpen ? "rotate-45" : "-translate-y-1.5"}`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${navOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${navOpen ? "-rotate-45" : "translate-y-1.5"}`}
            ></span>
          </div>
        </button>
      </div>

      {/* Brand Name */}
      <div className="flex flex-wrap text-lg lg:text-2xl gap-4 font-bold md:pr-4">
        <img src="../logo.jpeg" alt="" width="50px" height="50px" />
       <Link to="/dashboard"> Guardians of Wildlife</Link>
      </div>

      {/* Mobile Menu - Display when 'navOpen' is true */}
      <div className={`flex md:hidden flex-col items-center w-full gap-4 font-semibold justify-end py-2 px-4 text-lg ${navOpen ? "" : "hidden"}`}>
        
        {NAVIGATION.map((item) => (
          <NavLink
            to={item.link}
            key={item.link}
            className={`w-full hover:text-gray-600 ${activeTab === item.heading ? "text-gray-600 text-xl" : ""}`}
            onClick={() => {
              setActiveTab(item.heading);
              setNavOpen(false); // Close the menu on item click
            }}
          >
            {item.heading}
          </NavLink>
        ))}
      </div>

      {/* Desktop Menu - Always visible on larger screens */}
      <div className={`md:flex hidden items-center gap-4 lg:gap-8 font-semibold justify-end py-2 px-4 text-lg ${navOpen ? "invisible hidden" : ""}`}>
        
        {NAVIGATION.map((item) => (
          <NavLink
            key={item.link}
            to={item.link}
            className={`hover:text-gray-600 lg:text-xl ${activeTab === item.heading ? "text-gray-600" : ""}`}
            onClick={() => setActiveTab(item.heading)}
          >
            {item.heading}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
