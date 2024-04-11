import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <ul className='footer-categories'>
        <li><Link to="posts/categories/Desert">Desert</Link></li>
        <li><Link to="posts/categories/Cake">Cake</Link></li>
        <li><Link to="posts/categories/Breakfast">Breakfast</Link></li>
        <li><Link to="posts/categories/Wine">Wine</Link></li>
        <li><Link to="posts/categories/Fruits">Fruits</Link></li>
        <li><Link to="posts/categories/Chocolate">Chocolate</Link></li>
      </ul>
      <div className="footer-copyright">
        <small>All Rights Reserved &copy; Copyright, React Tutorials</small>
      </div>
    </footer>
  )
}

export default Footer