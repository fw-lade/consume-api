import React from 'react'
import { NavLink } from 'react-router-dom'
import AddProduct from './AddProduct';

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <NavLink to="/">Card</NavLink>
        <NavLink to="/blog">Blogs</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/products">Products</NavLink>
        <div className="add">
          <AddProduct/>
        </div>
      </div>
    </div>
  );
}

export default Navbar