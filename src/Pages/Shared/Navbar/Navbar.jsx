import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const option = (
    <>
      <li>
        <NavLink
          to="/"
          aria-label="Home"
          title="Home"
          className={({ isActive }) =>
            isActive ? "text-main" : "text-gray-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/colleges"
          aria-label="Colleges"
          title="Colleges"
          className={({ isActive }) =>
            isActive ? "text-main" : "text-gray-500"
          }
        >
          Colleges
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admission"
          aria-label="Admission"
          title="Admission"
          className={({ isActive }) =>
            isActive ? "text-main" : "text-gray-500"
          }
        >
          Admission
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-college"
          aria-label="My College"
          title="My College"
          className={({ isActive }) =>
            isActive ? "text-main" : "text-gray-500"
          }
        >
          My College
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 mx-auto container">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {option}
          </ul>
        </div>
        <Link to={"/"}>
          <img className="h-14" src="/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">{option}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <Link to={'/user'} className="font-semibold hover:text-gray-500 link-hover">
              {user?.displayName}
            </Link>
          </>
        ) : (
          <>
            <Link
              className="btn bg-main text-white normal-case font-semibold hover:text-gray-500 hover:border-main"
              to={"/login"}
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
