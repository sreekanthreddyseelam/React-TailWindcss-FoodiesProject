import React from 'react';
import {  NavLink } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-blue-300'
          : 'hidden'
      }
      onClick={toggle}
    >
      <NavLink exact to='/' className='p-4' activeClassName="text-red-500" >
        Home
      </NavLink>
      <NavLink to='/menu' className='p-4'  activeClassName="text-red-500">
        Menu
      </NavLink>
      <NavLink to='/about' className='p-4'  activeClassName="text-red-500">
        About
      </NavLink>
      
    </div>
  );
};

export default Dropdown;
