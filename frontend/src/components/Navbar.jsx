import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const navData = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/About",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Login",
      path: "/login",
    },
  ];

  return (
    <>
      <div className="navbar  bg-[#FDE2FF] text-[#41518B] h-20 flex justify-around items-center">
        {/* <div className="navbar-start w-fit">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-15 z-[1] p-4 shadow bg-white rounded-box w-52  font-semibold "
            >
              {navData.map((val, i) => {
                return (
                  <div className="">
                    <Link
                      key={i}
                      to={val.path}
                      className=" hover:text-red-500 text-[#41518B] m-4"
                    >
                      {val.title}
                    </Link>
                  </div>
                );
              })}
            </ul>
          </div>
        </div> */}
        <div>
          {" "}
          <a className=" hover:bg-transparent border-none cursor-pointer text-lg ml-20 font-semibold">
            Carer
          </a>
        </div>
        <div className=" gap-4">
          <ul className="menu w-[80vw]  flex justify-center menu-horizontal gap-10 font-semibold text-[15px] hover:ease-in px-1">
            <div className="btn btn-ghost flex gap-8 justify-center">
              <Link to={"/"} className="  text-[#41518B] ">
                Home
              </Link>
            </div>

            <div className="btn btn-ghost flex gap-8 justify-center">
              <Link to={"/About"} className="  text-[#41518B] ">
                About
              </Link>
            </div>

            <div className="btn btn-ghost flex gap-8 justify-center">
              <Link to={"/Contact"} className="  text-[#41518B] ">
                Contact
              </Link>
            </div>
          </ul>
        </div>
        <div>
          <Link
            to={"/login"}
            className=" bg-blue-600 text-white px-4 py-2 rounded-lg hover:opacity-80"
          >
            Login
          </Link>
          {/* <Link to={"/profile"} className="flex items-center gap-4">
                  <img src="" alt="" className="h-10 w-10 rounded-full bg-black "/>
                  <p>Username</p>
                </Link> */}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
