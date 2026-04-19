import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="top-ribbon flex gap-5 bg-primary text-tertiary">
        <span>
          <i class="ri-phone-line"></i>
          +91 9044788556
        </span>
        <span>
          <i class="ri-mail-line"></i>
          info.gigabytecomputers@gmail.com
        </span>
      </div>
      <nav className="flex px-5 py-2 text-lg items-center justify-between">
        <div className="logo flex items-center">
          <img src={logo} alt="logo" className="h-12 w-auto" />
          <span>igabyte-Computers</span>
        </div>
        <ul className="navlinks text-gray-600 flex gap-4">
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#products">products</a>
          </li>
          <li>
            <a
              className=" bg-primary text-secondary px-4 py-1 rounded-md"
              href="#service"
            >
              services
            </a>
          </li>
          <li>
            <a
              className=" ring-1 px-4 py-1 rounded-md text-primary"
              href="#contact"
            >
              contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
