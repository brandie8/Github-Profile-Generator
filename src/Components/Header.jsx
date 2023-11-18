import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  // Get the current location using useLocation
  const location = useLocation();

  //! Mobile Menu Functions
  const mobileMenu = () => {
    document.querySelector("#mobile-menu").classList.toggle("hidden");
  };
  const mobileMenuClose = () => {
    document.querySelector("#mobile-menu").classList.add("hidden");
  };

  return (
    <header className="flex justify-between bg-gray-500 items-center p-2 px-4 md:px-40">
      {/* Logo */}
      <div className="logo text-2xl flex items-center">
        <Link to={"/"}>
          <BsGithub className="text-2xl md:text-3xl" />
        </Link>
        <h1 className="mx-3 text-sm md:text-2xl">
          <Link to={"/"}>Github Profile Generator</Link>
        </h1>
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex md:items-center">
        <ul className="flex text-sm md:text-xl">
          <li className="mx-3 border-b-2 border-white/[0] hover:border-white/[100]">
            {/* Use the "isActive" prop provided by NavLink */}
            <NavLink
              to="/"
              isActive={() => ["/", "/myprofile"].includes(location.pathname)}
              className={(navData) =>
                navData.isActive ? "text-orange-500" : ""
              }
            >
              Search
            </NavLink>
          </li>
          <li className="mx-3 border-b-2 border-white/[0] hover:border-white/[100]">
            {/* Use the "isActive" prop provided by NavLink */}
            <NavLink
              to="/myprofile"
              isActive={() => location.pathname === "/myprofile"}
              className={(navData) =>
                navData.isActive ? "text-orange-500" : ""
              }
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Mobile Right Bar */}
      <div className="md:hidden flex mr-2">
        {/* Mobile Hamburger Btn */}
        <button onClick={mobileMenu} className=" md:hidden">
          <AiOutlineMenu className="text-3xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        id="mobile-menu"
        className="hidden md:hidden absolute z-10 top-16 left-0 bg-black w-full flex flex-col items-center"
      >
        <li onClick={mobileMenuClose} className="p-3">
          {/* Use the "isActive" prop provided by NavLink */}
          <NavLink
            to="/"
            isActive={() => ["/", "/myprofile"].includes(location.pathname)}
            className={(navData) =>
              navData.isActive ? "text-orange-400" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li onClick={mobileMenuClose} className="p-3">
          {/* Use the "isActive" prop provided by NavLink */}
          <NavLink
            to="/myprofile"
            isActive={() => location.pathname === "/myprofile"}
            className={(navData) =>
              navData.isActive ? "text-orange-400" : ""
            }
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
