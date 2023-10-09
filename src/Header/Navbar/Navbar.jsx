import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import "./Navbar.css";
import { CgProfile } from 'react-icons/cg';

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

  const navBtn = (
    <>
      <li>
        <NavLink to="/" activeClassName="bg-pink-500">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="bg-pink-500">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/faq" activeClassName="bg-pink-500">
          FAQ
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeClassName="bg-pink-500">
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
                className="h-5 w-5 text-pink-500"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {navBtn}
            </ul>
          </div>
          <div className="logoName">
            <a className="btn btn-ghost normal-case md:text-2xl">
              {" "}
              <span className="flex gap-2 items-center">
                <img
                  className="w-6 flex items-center"
                  src="/media/gamerlogo-removebg-preview.png"
                  alt=""
                />{" "}
                <span className="text-pink-500">Game</span>for{" "}
                <span className="text-pink-500">Pro's</span>
              </span>
            </a>
          </div>
        </div>
        <div className="navbar-center btnNav">
          <ul className="menu menu-horizontal px-1 text-xl font-bold">{navBtn}</ul>
        </div>

        <div className="navbar-end  ">
          {user ? (
            <button className="flex items-center gap-4">
              <Link className="" to="/profile">
                <span className="text-pink-500 md:text-2xl navlink font-bold">
                  {user? user.displayName : <CgProfile></CgProfile>}
                </span>
              </Link>
              <span>
                <Link to="/profile">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} alt={user.displayName} />
                    </div>
                  </label>
                </Link>
              </span>
              <a
                onClick={handleSignOut}
                className="btn bg-pink-500 text-white font-bold"
              >
                Sign Out
              </a>
            </button>
          ) : (
            <Link to="/login">
              {" "}
              <button>
                <a className="btn bg-pink-500 text-white font-bold">Log In</a>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
