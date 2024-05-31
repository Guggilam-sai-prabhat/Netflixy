import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const NavBar = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState('');

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the form from causing a page reload
    navigate(`/search/${searchTerm}`); // Navigate to the search results page
  };

  return (
    <div className='absolute w-full p-4 flex items-center justify-between z-50'>
      <Link to="/">
        <h1 className='uppercase text-red-500 font-nsans-bold cursor-pointer text-4xl'>Netflixy</h1>
      </Link>
      {user?.email && ( // Check if user is logged in to show search
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-l text-black"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', color: '#000' }}
          />
          <button type="submit" className="bg-red-600 px-4 py-2 rounded-r cursor-pointer">Search</button>
        </form>
      )}
      {user?.email ? (
        <div>
          <Link to="/profile">
            <button className='capitalize pr-4 cursor-pointer'>Profile</button>
          </Link>
          <button onClick={handleLogout} className='capitalize bg-red-600 px-6 py-2 rounded cursor-pointer'>Logout</button>
        </div>
      ) : (
        location.pathname !== "/search" && (
          <div>
            <Link to="/login">
              <button className='capitalize pr-4'>Login</button>
            </Link>
            <Link to="/signup">
              <button className='capitalize bg-red-600 px-6 py-2 rounded cursor-pointer'>Signup</button>
            </Link>
          </div>
        )
      )}
    </div>
  );
};

export default NavBar;
