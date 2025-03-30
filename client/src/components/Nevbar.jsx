import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [user, setUser] = useState(null); // ignore

  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-28 sm:w-32 lg:w-40" />
      </Link>

      <div>
        {user ? (
          <div></div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <button className=" bg-4  ">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
