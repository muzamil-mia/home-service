import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="h-[60px] flex justify-center bg-gray-900">
      <div className="border border-black w-[98%] flex justify-between items-center">
        <div className="w-1/2">
          <h1 className="text-gray-300 text-3xl p-2 font-serif tracking-wider leading-4">
            <Link to="/">HomeServO</Link>
          </h1>
        </div>
        <div className="w-[38%] ">
          <ul className="flex justify-between">
            <li className="flex justify-center items-center py-2 px-4 uppercase text-sm font-serif font-thin bg-gray-50 rounded-md hover:bg-gray-400 hover:text-black transition-all cursor-pointer">
             <Link to="/signin"> Sign In</Link>
            </li>
            <li className="flex justify-center items-center py-2 px-4 uppercase text-sm font-serif font-thin bg-gray-50 rounded-md hover:bg-gray-400 hover:text-black transition-all cursor-pointer">
            <Link to="/signup">Regsiter</Link>
            </li>
            <li className="flex justify-center items-center py-2 px-4 uppercase text-sm font-serif font-thin bg-gray-50 rounded-md hover:bg-gray-400 hover:text-black transition-all cursor-pointer">
              House Owner
              <select name="cars" id="cars" className="ml-2 p-1">
                <option value="signin">SignIn</option>
                <option value="signup">SignUp</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
