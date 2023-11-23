import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <ul className="nav nav-pills  justify-content-end mt-3">
      <li className="nav-item">
        <NavLink
          className={({ isActive }) => {
            console.log('isActive', isActive);
            return isActive ? ' nav-link active' : 'nav-link';
          }}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? ' nav-link active' : 'nav-link'
          }
          to="/liked"
        >
          Liked
        </NavLink>
      </li>
    </ul>
  );
}
