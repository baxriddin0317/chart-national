import React, { useEffect, useRef, useState } from "react";
import { FaKey } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { navigation } from "../lib/data";
import { Link } from "react-scroll";

const Header = () => {
  const [fixed, setFixed] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      setHeight(isActive ? ref.current.clientHeight : 0);
    }
  }, [isActive]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setFixed(true);
      } else {
        setFixed(false);
      }

      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  return (
    <header
      className={`${
        fixed
          ? "bg-white py-1.5 shadow-fixed"
          : "bg-transparent py-4 shadow-header"
      } ${isActive && !fixed ? '!bg-black/70' : ''} fixed w-full z-50 transition-all duration-300 ease-in-out`}>
      <nav className="relative max-w-6xl px-5 mx-auto">
        <div className="flex items-center justify-between">
          {/* site logo */}
          <Link to="home" spy={true} smooth={true} offset={-300} duration={500} className="flex items-center gap-x-1.5 cursor-pointer">
            <img
              className={`${fixed ? "mix-blend-difference" : ""} w-14`}
              src={require("../assets/img/logo.png")}
              alt="logo"
            />
            <span
              className={`${
                fixed ? "text-brand-black" : "text-white"
              } block text-xl capitalize whitespace-nowrap`}>
              Chart National L.P.
            </span>
          </Link>
          {/* navigation */}
          <div
            className={`${
              fixed ? "text-brand-black" : "text-white"
            } hidden lg:flex items-center font-semibold text-xs uppercase whitespace-nowrap gap-x-5 xl:gap-x-8 py-1.5 nav-link`}>
            {navigation.map((link) => (
              <Link key={link.id} to={link.href} spy={true} smooth={true} offset={-300} duration={500} className="hover:text-brand-primary cursor-pointer">
                {link.name}
              </Link>
            ))}
            <a
              href="https://dynamo.dynamosoftware.com/tenant/d7.dynamosoftware.com/chart_national"
              className="flex items-center gap-x-px hover:text-brand-primary">
              <FaKey />
              <span>lp login</span>
            </a>
          </div>

          {/* humburger button */}
          <button
            onClick={() => setIsActive(!isActive)}
            className={`${
              fixed ? "text-black bg-black/10" : "text-white bg-white/20"
            } lg:hidden rounded py-2 px-2.5`}>
            <IoIosMenu className={` text-xl`} />
          </button>
        </div>

        {/* mobile menu */}
        <div
          className="relative z-50 lg:hidden overflow-hidden transition-all ease-in-out duration-500"
          style={{ height: `${isActive ? `${height}px` : "0px"}` }}>
          <div
            ref={ref}
            className={`${
              fixed ? "text-brand-black" : "text-white"
            } flex flex-col font-semibold text-xs uppercase whitespace-nowrap gap-y-5 px-4 pt-5 nav-link pb-3`}>
            {navigation.map((link) => (
              <Link key={link.id} to={link.href} spy={true} smooth={true} offset={-300} duration={500}
                href={link.href}
                onClick={() => setIsActive(!isActive)}
                className="inline-block hover:text-brand-primary cursor-pointer">
                {link.name}
              </Link>
            ))}
            <a
              href="https://dynamo.dynamosoftware.com/tenant/d7.dynamosoftware.com/chart_national"
              className="flex items-center gap-x-px hover:text-brand-primary cursor-pointer"
              onClick={() => setIsActive(!isActive)}>
              <FaKey />
              <span>lp login</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
