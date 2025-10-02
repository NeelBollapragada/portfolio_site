import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import cv from "../assets/CV___UoE - Neel Bollapragada.pdf";
import logo from "../assets/icons/generated-logo-no-bg.png";
import ThemeBtn from "./themeBtn";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-black my-auto font-bold underline underline-offset-4 dark:text-white"
      : "text-black my-auto link-underline dark:text-white";

  return (
    <nav className="bg-slate-100 border-b border-slate-100 dark:bg-slate-950 dark:border-slate-950">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img src={logo} alt="logo" className="h-10 w-auto mt-3 mb-2" />
            </NavLink>
            <div className="my-auto md:ml-auto">
              <div className="flex space-x-14">
                <ThemeBtn className="my-auto" />
                <NavLink className={linkClass} to="/">
                  Home
                </NavLink>
                <NavLink className={linkClass} to="/projects">
                  Projects
                </NavLink>
                <a
                  className="text-black my-auto link-underline dark:text-white"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={cv}
                >
                  CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
