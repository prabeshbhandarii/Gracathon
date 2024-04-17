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
    {
      title: "Sign Up",
      path: "/Blog",
    },
  ];

  return (
    <>
      <div className="navbar bg-[#FDE2FF] text-[#41518B]">
        <div className="navbar-start">
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
          <a className=" hover:bg-transparent border-none cursor-pointer text-lg ml-5 font-semibold">
            Carer
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu w-[85vw]  flex justify-evenly menu-horizontal font-semibold text-[15px] hover:ease-in px-1">
            {navData.map((val, i) => {
              return (
                <div className="btn btn-ghost ">
                  <Link key={i} to={val.path} className="  text-[#41518B] ">
                    {val.title}
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
