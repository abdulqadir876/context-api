import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-indigo-700 text-white px-0 py-4">
      <div className="w-[70%] mx-auto flex justify-between">
          <Link to="/" className="text-2xl font-bold">E-Commerce</Link>
        <nav>
          <Link to='/cart'><FaCartPlus size={30} /></Link>
          
        </nav>
      </div>
    </div>
  );
};

export default Header;
