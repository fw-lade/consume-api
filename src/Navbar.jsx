import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <NavLink to="/">Card</NavLink>
        <NavLink to="/blog">Blogs</NavLink>
        <NavLink to="/users">Users</NavLink>
      </div>
    </div>
  );
}

export default Navbar