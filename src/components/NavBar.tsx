import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link className='nav-link active"' to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/liked">
          Liked
        </Link>
      </li>
    </ul>
  );
}
