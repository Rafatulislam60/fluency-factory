import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo1.png";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li className="font-semibold text-xl">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold text-xl">
        <Link to="/instructor">Instructors</Link>
      </li>
      <li className="font-semibold text-xl">
        <Link to="/class">Classes</Link>
      </li>

      {user ? (
        <>
          <li className="font-semibold text-xl">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <button onClick={handleLogOut} className="btn btn-ghost font-semibold text-lg">
            LogOut
          </button>
        </>
      ) : (
        <>
          <li className="font-semibold text-xl">
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-[#202C45] text-white max-w-screen-2xl pb-8 lg:pb-5">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {navItems}
            </ul>
          </div>
          <div>
            <Link to="/" className="btn btn-ghost normal-case ">
              <div className="flex flex-col lg:flex-row justify-center items-center">
                <img src={logo} alt="" />
                <span className="text-md lg:text-2xl lg:font-bold font-serif">
                  FLUENCY FACTORY
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
          {user?.email ? (
            <div className="avatar">
              <div className="w-8 rounded-full ring ring-primary  ring-offset-2">
                <img src={user && user.photoURL} />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="navbar-end pr-5">
          <a className="btn">Enroll Now</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
