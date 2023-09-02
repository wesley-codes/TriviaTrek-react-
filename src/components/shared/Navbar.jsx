import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-white py-4 px-6 fixed top-0 w-full z-10 shadow-md">
      <div className="container mx-auto ">
        <Link to="/">
          <div className="flex justify-between items-center ">
            <h2 className="text-2xl font-semibold">TriviaTrek</h2>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
