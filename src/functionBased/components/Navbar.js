import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ];
  return (
    <nav>
      <ul className="nav-menu">
        {
                    links.map((link) => (
                      <li key={link.id}>
                        <NavLink to={link.path} className="nav-item">{link.text}</NavLink>
                      </li>
                    ))
                }
      </ul>
    </nav>
  );
};

export default Navbar;
