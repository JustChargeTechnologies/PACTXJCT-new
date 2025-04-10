import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import logo from "../assets/image_1-removebg-preview.png"; // Import image properly
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMakeDiffrrenceArrow, setIsMakeDiffrrenceArrow] = useState(false);
  const [isAboutArrow, setIsAboutArrow] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const MakeDropdown = () => setIsMakeDiffrrenceArrow(!isMakeDiffrrenceArrow);
  const AboutDropDown = () => setIsAboutArrow(!isAboutArrow);
  const [active, setActive] = useState("Home");
  const handleActive = (input) => {
    setActive(input);
  };

  return (
    <div>
      <nav className="fixed h-auto top-0 left-0 w-full bg-white shadow-md z-5  flex justify-between items-center px-6 md:px-29 py-4 ">
        {/* Left Section: Mobile Menu Toggle & Logo */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <div onClick={toggleNav} className="md:hidden cursor-pointer">
            {isNavOpen ? (
              <RxCross2 className="w-[28px] h-[28px]" />
            ) : (
              <HiOutlineBars3 className="w-[28px] h-[28px]" />
            )}
          </div>
          {/* Logo */}
          <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="block static  md:w-[148.61px] md:h-[72px] w-[82.56px] h-[40px]"
          />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            onClick={() => handleActive("Home")}
            to="/"
            className={` ${
              active !== "Home" && "text-gray-600"
            } px-4 py-2 font-['Nunito_Sans']`}
          >
            Home
          </Link>
          <div className="relative group">
            <Link
              to="/about"
              onClick={() => handleActive("About")}
              className={`${
                active !== "About" && "text-gray-600"
              } px-4 py-2 font-['Nunito_Sans'] cursor-pointer flex items-center`}
            >
              About Us <IoMdArrowDropdown className="ml-1" />
            </Link>
            <div className="absolute left-0 mt-0 w-32 bg-[#2282B4] text-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity">
              <HashLink
                className="block px-4 py-2 hover:bg-white hover:text-[#2282B4]"
                to="/about#whypact"
                scroll={(el) => {
                  const yOffset = -100; // Adjust this based on your navbar height
                  const y =
                    el.getBoundingClientRect().top + window.scrollY + yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Why PACT
              </HashLink>
              <HashLink
                className="block px-4 py-2 hover:bg-white hover:text-[#2282B4]"
                to="/about#projects"
                scroll={(el) => {
                  const yOffset = -100; // Adjust this based on your navbar height
                  const y =
                    el.getBoundingClientRect().top + window.scrollY + yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Projects
              </HashLink>
              <HashLink
                className="block px-4 py-2 hover:bg-white hover:text-[#2282B4]"
                to="/about#founder"
                scroll={(el) => {
                  const yOffset = -100; // Adjust this based on your navbar height
                  const y =
                    el.getBoundingClientRect().top + window.scrollY + yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Founder
              </HashLink>
            </div>
          </div>
          {/* Make a Difference Dropdown */}
          <div className="relative group">
            <Link
              to="/supportus"
              onClick={() => handleActive("Support")}
              className={`${
                active !== "Support" && "text-gray-600"
              } px-4 py-2 font-['Nunito_Sans'] cursor-pointer flex items-center`}
            >
              Make a Difference <IoMdArrowDropdown className="ml-1" />
            </Link>
            <div className="absolute left-0 mt-0 w-44 bg-[#2282B4] text-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity">
              <a
                href="/supportus"
                className="block px-4 py-2 hover:bg-white hover:text-[#2282B4]"
              >
                Support Us
              </a>
              <Link
                to="/corporate"
                className="block px-4 py-2 hover:bg-white hover:text-[#2282B4]"
              >
                Corporate Partner
              </Link>
              <Link
                to="/volunteer"
                className="block px-4 py-2 hover:bg-white hover:text-[#2282B4]"
              >
                Volunteer
              </Link>
            </div>
          </div>

          <Link
            to="/newsroom"
            onClick={() => handleActive("News")}
            className={`${
              active !== "News" && "text-gray-600"
            } px-4 py-2 font-['Nunito_Sans']`}
          >
            Newsroom
          </Link>
          <Link
            to="/contact"
            onClick={() => handleActive("Contact")}
            className={`${
              active !== "Contact" && "text-gray-600"
            } px-4 py-2 font-['Nunito_Sans'] `}
          >
            Contact Us
          </Link>
        </div>

        {/* Right Section: Buttons */}
        <div>
          <Link to="/supportus" className="md:px-6 md:py-2 py-1 px-1 bg-[#2282B4] text-white rounded-md mr-3">
            Donate Now
          </Link>
          <Link
            to="/help"
            className="md:px-6 md:py-2 py-1 px-1 border border-[#2282B4] text-[#2282B4] rounded-md"
          >
            Get Help
          </Link>
        </div>

        {/* Mobile Sidebar */}
        <div className="">
          <div
            className={`fixed w-[100vw] h-[100vh] bg-black/20 backdrop-blur-[1px] inset-0 top-0 left-0 transition-transform duration-500 ${
              isNavOpen ? "translate-x-0" : "-translate-x-full"
            } md:hidden`}
          >
            {/* Sidebar Header */}
            <div className="  w-[80%] h-full bg-white">
              <div className=" w-[100%] flex justify-end pt-4 pr-[8px]">
                <RxCross2
                  onClick={toggleNav}
                  className="w-[20px] h-[20px] cursor-pointer"
                />
              </div>

              {/* Sidebar Menu Items */}
              <nav className="pl-[35px] space-y-4">
                <Link
                  to="/"
                  className="block text-[14px]  font-['Nunito_Sans']"
                >
                  Home
                </Link>
                <div>
                  <Link
                    to="/about"
                    onClick={AboutDropDown}
                    className="flex w-full text-[14px] font-['Nunito_Sans']"
                  >
                    About Us <IoMdArrowDropdown className="ml-4 mt-1" />
                  </Link>

                  {isAboutArrow && (
                    <div className="ml-4 mb-6 mt-4 space-y-5">
                      <HashLink
                        to="/about#whypact"
                        scroll={(el) => {
                          const yOffset = -100; // Adjust this based on your navbar height
                          const y =
                            el.getBoundingClientRect().top +
                            window.scrollY +
                            yOffset;
                          window.scrollTo({ top: y, behavior: "smooth" });
                        }}
                        className="block text-[13px] text-[#6E6E6E]"
                      >
                        Why PACT
                      </HashLink>
                      <HashLink
                        to="/about#projects"
                        scroll={(el) => {
                          const yOffset = -100; // Adjust this based on your navbar height
                          const y =
                            el.getBoundingClientRect().top +
                            window.scrollY +
                            yOffset;
                          window.scrollTo({ top: y, behavior: "smooth" });
                        }}
                        className="block text-[13px] text-[#6E6E6E]"
                      >
                        Projects
                      </HashLink>
                      <HashLink
                        to="/about#founder"
                        scroll={(el) => {
                          const yOffset = -100; // Adjust this based on your navbar height
                          const y =
                            el.getBoundingClientRect().top +
                            window.scrollY +
                            yOffset;
                          window.scrollTo({ top: y, behavior: "smooth" });
                        }}
                        className="block text-[13px] text-[#6E6E6E]"
                      >
                        Founder
                      </HashLink>
                    </div>
                  )}
                </div>

                {/* Mobile "Make a Difference" Dropdown */}
                <div>
                  <button
                    onClick={MakeDropdown}
                    className="flex w-full text-[14px] font-['Nunito_Sans']"
                  >
                    Make a Difference{" "}
                    <IoMdArrowDropdown className="ml-4 mt-1" />
                  </button>

                  {isMakeDiffrrenceArrow && (
                    <div className="ml-4 mb-6 mt-4 space-y-5">
                      <Link to="/supportus" className="block text-[13px] text-[#6E6E6E]">
                        Support Us
                      </Link>
                      <Link to="/corporate" className="block text-[13px] text-[#6E6E6E]">
                        Corporate Partner
                      </Link>
                      <Link to="/volunteer" className="block text-[13px] text-[#6E6E6E]">
                        Volunteer
                      </Link>
                    </div>
                  )}
                </div>

                <Link to="/newsroom" className="block text-[14px] font-['Nunito_Sans']">
                  Newsroom
                </Link>
                <Link to="/contact" className="block text-[14px] font-['Nunito_Sans']">
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
