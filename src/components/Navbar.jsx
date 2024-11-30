import { Link, NavLink } from "react-router-dom";
import navTea from "../assets/images/more/logo1.png";
const Navbar = () => {
  const link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addCoffee">Add Coffee</NavLink>
      </li>

      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn text-white btn-ghost lg:hidden"
              >
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow text-white"
              >
                {link}
              </ul>
            </div>
            <div className="navbar-center flex items-center gap-4 py-3 ">
              <div className="h-[90px] w-[75px]">
                <img className="w-full object-cover" src={navTea} alt="" />
              </div>
              <h3 className="font-rancho text-6xl text-white">
                Espresso Emporium
              </h3>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white">{link}</ul>
          </div>
          <Link to="/login" className="navbar-end">
            <button className="bg-bannerBtn py-3 px-8  text-2xl text-black font-rancho">
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
