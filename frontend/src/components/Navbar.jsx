import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../utils/userContext";

const Navbar = () => {
  const { userData } = useContext(UserContext);

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
      <div className="navbar bg-blue-600  text-white    h-20 flex justify-around items-center ">
        <div className=" flex justify-around items-center h-20 w-11/12 mx-auto ">
          <div>
            {" "}
            <a className=" hover:bg-transparent text-white border-none cursor-pointer text-2xl  font-semibold">
              Carer
            </a>
          </div>
          <div className=" gap-4">
            <ul className="menu w-[80vw]  flex justify-center text-lg menu-horizontal gap-10 font-semibold text-[15px] hover:ease-in px-1">
              <div className="btn btn-ghost flex gap-8 justify-center">
                <Link to={"/"} className="   ">
                  Home
                </Link>
              </div>

              <div className="btn btn-ghost flex gap-8 justify-center">
                <Link to={"/About"} className="  ">
                  About
                </Link>
              </div>

              <div className="btn btn-ghost flex gap-8 justify-center">
                <Link to={"/Contact"} className="   ">
                  Contact
                </Link>
              </div>
            </ul>
          </div>
<<<<<<< HEAD
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

          {
              userData.success ? (
                <Link to={"/profile"} className="flex items-center gap-4">
                  <img src="" alt="" className="h-10 w-10 rounded-full bg-black "/>
                  <p>{userData.data.username}</p>
                </Link>
              ):(
                <Link
                to={"/login"}
                className=" bg-blue-600 text-white px-4 py-2 rounded-lg hover:opacity-80"
              >
                Login
              </Link>
              )

          }
=======
          <div>
            <Link
              to={"/login"}
              className=" bg-white text-blue-700 font-bold px-4 py-2 rounded-lg hover:opacity-90 flex justify-center items-center"
            >
              Login
            </Link>
            {/* <Link to={"/profile"} className="flex items-center gap-4">
                  <img src="" alt="" className="h-10 w-10 rounded-full bg-black "/>
                  <p>Username</p>
                </Link> */}
          </div>
>>>>>>> 8da8e3823aa543e69f74adff5854208a50b225bd
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
