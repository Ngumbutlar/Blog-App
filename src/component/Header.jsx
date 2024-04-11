import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import {FaBars} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";

const Header = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className='nav-logo' >
        <img src={Logo} alt="Navbar Logo" />
        </Link>
        <ul className='nav-meny'>
          <li><Link to="/profile">Butlee</Link></li>
          <li><Link to="/create">Create Post</Link></li>
          <li><Link to="/authors">Authors</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
        <button className="nav-toogle-btn">
          <AiOutlineClose/>
        </button>
      </div>
    </nav>
  )
}

export default Header