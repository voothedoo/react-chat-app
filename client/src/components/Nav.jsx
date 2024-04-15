import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import { FaUser } from "react-icons/fa6";
import LOGO from "../assets/img/chat_app_logo.png";
import { IoIosLogOut } from "react-icons/io";

const Nav = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <nav className=" pt-4 pb-4">
      <div className="flex flex-row justify-between">
        <Link to="/">
          <h1 className="main-color text-4xl font-mono flex gap-2">
            <img className="h-10" src={LOGO}></img>Chat-o-Matic
          </h1>
        </Link>
        <div className="flex gap-4 items-center">
          {user ? (
            <p className="text-sm my-auto text-neutral-500 italic flex gap-2 items-center">
              <span className="text-neutral-400  text-lg flex items-center gap-1">
                <FaUser className="h-4 text-emerald-900" />
                {user.name}
              </span>
            </p>
          ) : (
            ""
          )}

          {!user ? (
            <ul className="flex flex-row gap-5">
              <li>
                <NavLink
                  className="navlink main-color hover:bg-teal-900 px-2 py-1 rounded-md "
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navlink main-color hover:bg-teal-900 px-2 py-1 rounded-md"
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
            </ul>
          ) : (
            <Link
              onClick={() => logoutUser()}
              to="/login"
              className="flex items-center h-fit gap-1 main-color hover:bg-teal-900 px-2 py-1 rounded-md"
            >
              <IoIosLogOut />
              <p>Logout</p>
            </Link>
          )}
        </div>
      </div>
      <hr className="border-emerald-500 mt-4 opacity-10" />
    </nav>
  );
};

export default Nav;
