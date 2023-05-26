import React, { useEffect, useRef, useState } from "react";
import { FaKey } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { navigation } from "../lib/data";

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
      } fixed w-full z-50 transition-all duration-300 ease-in-out`}>
      <div className="max-w-6xl px-5 mx-auto">
        <div className="flex items-center justify-between">
          {/* site logo */}
          <a href="/" className="flex items-center gap-x-1.5">
            <img
              className="w-14"
              src={require("../assets/img/logo.png")}
              alt="logo"
            />
            <span
              className={`${
                fixed ? "text-brand-black" : "text-white"
              } block text-xl capitalize whitespace-nowrap`}>
              Chart National L.P.
            </span>
          </a>
          {/* navigation */}
          <nav>
            <ul
              className={`${
                fixed ? "text-brand-black" : "text-white/50"
              } hidden lg:flex items-center font-semibold text-xs uppercase py-1.5 whitespace-nowrap`}>
              {navigation.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="px-2.5 xl:px-4 hover:text-brand-primary">
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://dynamo.dynamosoftware.com/tenant/d7.dynamosoftware.com/chart_national"
                  className="px-2.5 xl:px-4 hover:text-brand-primary flex items-center gap-x-px">
                  <FaKey />
                  <span>lp login</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* humburger button */}
          <button
            onClick={() => setIsActive(!isActive)}
            className={`${
              fixed ? "text-black bg-black/10" : "text-white bg-white/20"
            } lg:hidden py-2 px-2.5 rounded`}>
            <IoIosMenu className={` text-xl`} />
          </button>
        </div>

        {/* mobile menu */}
        <nav
          className="lg:hidden overflow-hidden transition-all ease-in-out duration-500"
          style={{ height: `${isActive ? `${height}px` : "0px"}` }}>
          <ul
            ref={ref}
            className={`${
              fixed ? "text-brand-black" : "text-white/50"
            } flex flex-col font-semibold text-xs uppercase pt-5 whitespace-nowrap`}>
            {navigation.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="inline-block px-4 py-2.5 hover:text-brand-primary"
                  onClick={() => setIsActive(!isActive)}>
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://dynamo.dynamosoftware.com/tenant/d7.dynamosoftware.com/chart_national"
                className="px-4 py-2.5 hover:text-brand-primary flex items-center gap-x-px"
                onClick={() => setIsActive(!isActive)}>
                <FaKey />
                <span>lp login</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
