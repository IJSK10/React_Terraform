import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const linkClasses = "px-3 py-2 rounded-md text-sm font-small text-gray-600 hover:bg-gray-100";
  
  const activeLinkStyle: React.CSSProperties = {
    backgroundColor: '#E5E7EB', 
    color: '#111827',  
  };

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-1 flex items-center justify-between">
        
        <div className="text-m font-bold text-black">
          Student Data
        </div>

        <div className="flex items-center space-x-2">
          <NavLink
            to="/create"
            className={linkClasses}
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            Create
          </NavLink>

          <NavLink
            to="/students"
            className={linkClasses}
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            Read All
          </NavLink>
          
          <NavLink
            to="/studentById"
            className={linkClasses}
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            Read by ID
          </NavLink>
          
          <NavLink
            to="/updateById"
            className={linkClasses}
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            Update
          </NavLink>
          
          <NavLink
            to="/deleteStudent"
            className={linkClasses}
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            Delete
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;