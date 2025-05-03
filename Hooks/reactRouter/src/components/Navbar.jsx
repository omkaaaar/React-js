import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "list-active" : "list")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "list-active" : "list")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "list-active" : "list")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/counter"
            className={({ isActive }) => (isActive ? "list-active" : "list")}
          >
            Counter
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
