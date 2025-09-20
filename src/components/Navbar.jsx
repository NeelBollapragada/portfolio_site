import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-100 border-b border-black">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            NavBar
          </div>
          <div className="md:ml-auto">
            <div className="flex space-x-14">
              <p>Home</p>
              <p>Projects</p>
              <p>CV</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
