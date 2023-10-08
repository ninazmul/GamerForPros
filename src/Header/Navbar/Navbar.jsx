import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {


  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

    const [isActive, setIsActive] = useState(false);


    const navBtn = (
      <>
        <li>
          <NavLink
            className={`NavLink ${isActive === true && "active"}`}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`NavLink ${isActive === true && "active"}`}
            to="/about"
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            className={`NavLink ${isActive === true && "active"}`}
            to="/faQ"
          >
            FAQ
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`NavLink ${isActive === true && "active"}`}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        
      </>
    );

    return (
      <div>
        <div className="navbar max-w-6xl mx-auto">
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
                id="dNav"
                className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 ${
                  isActive && "active"
                }`}
              >
                {navBtn}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">
              {" "}
              <img
                className="w-6 flex items-center"
                src="/media/gamerlogo-removebg-preview.png"
                alt=""
              />{" "}
              <span className="text-pink-500">Game</span>for{" "}
              <span className="text-pink-500">Pro's</span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navBtn}</ul>
          </div>

          <div className="navbar-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            {user ? (
              <button>
                <a
                  onClick={handleSignOut}
                  className="btn bg-pink-500 text-white font-bold"
                >
                  SignOut
                </a>
              </button>
            ) : (
              <Link to="/login">
                {" "}
                <button>
                  <a className="btn bg-blue-700 text-white font-bold">LogIn</a>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
};

export default Navbar;