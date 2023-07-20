import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="d-flex justify-content-center py-3 bg-dark">
      <ul className="nav nav-pills">
        <NavLink
          to="/curriculum/"
          className={({ isActive }) => {
            return (
              "nav-item nav-link link-light btn-outline-light " +
              (isActive ? "active" : "")
            );
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/curriculum/about"
          className={({ isActive }) => {
            return (
              "nav-item nav-link link-light btn-outline-light " +
              (isActive ? "active" : "")
            );
          }}
        >
          About me
        </NavLink>
        <NavLink
          to="/curriculum/projects"
          className={({ isActive }) => {
            return (
              "nav-item nav-link link-light btn-outline-light " +
              (isActive ? "active" : "")
            );
          }}
        >
          Projects
        </NavLink>
      </ul>
    </nav>
  );
}
