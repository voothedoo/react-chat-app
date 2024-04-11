import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className=" pt-2 pb-8">
      <div className="flex flex-row justify-between">
        <Link to="/">
          <h1 className="main-color text-4xl font-mono">ChatApp</h1>
        </Link>
        <ul className="flex flex-row gap-5">
          <li>
            <NavLink
              className="main-color hover:bg-teal-900 px-2 py-1 rounded-md"
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              className="main-color hover:bg-teal-900 px-2 py-1 rounded-md"
              to="/register"
            >
              Register
            </NavLink>
          </li>
        </ul>
      </div>
      <p className="text-s my-auto text-neutral-500 italic">
        Logged in as <span className="text-neutral-400">Alex</span>
      </p>
    </nav>
  );
};

export default Nav;
