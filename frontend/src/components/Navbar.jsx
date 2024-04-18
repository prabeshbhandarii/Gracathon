import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../utils/userContext";
import profilePic from "../assets/profile-icon.jpg";

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
      <div className="navbar bg-gradient-to-r from-cyan-500 to-blue-500  text-white    h-20 flex justify-around items-center ">
        <div className=" flex justify-around items-center h-20 w-11/12 mx-auto ">
          <div className="flex justify-center items-center gap-3">
            {" "}
            <img src="./src/assets/Logo.png" alt="" className="w-14 h-14" />
            <a className=" hover:bg-transparent text-white border-none cursor-pointer text-2xl  font-semibold">
              Carer
            </a>
          </div>
          <div className=" gap-4">
            <ul className="menu w-[80vw]  flex justify-center  menu-horizontal gap-10 font-semibold text-[15px] hover:ease-in px-1">
              <div className="btn btn-ghost flex gap-8 justify-center">
                <Link to={"/"} className=" text-lg font-semibold  ">
                  Home
                </Link>
              </div>

              <div className="btn btn-ghost flex gap-8 justify-center">
                <Link to={"/About"} className=" text-lg font-semibold ">
                  About
                </Link>
              </div>

              <div className="btn btn-ghost flex gap-8 justify-center">
                <Link to={"/Contact"} className=" text-lg font-semibold  ">
                  Contact
                </Link>
              </div>
            </ul>
          </div>
          <div>
            {userData?.success ? (
              <Link to={"/Profile"} className="flex items-center gap-4">
                <img
                  src={profilePic}
                  alt=""
                  className="h-10 w-10 rounded-full bg-black "
                />
                <p>{userData?.data.username}</p>
              </Link>
            ) : (
              <Link
                to={"/login"}
                className=" bg-white text-blue-700 font-bold px-4 py-2 rounded-lg hover:opacity-90 flex justify-center items-center"
              >
                Login
              </Link>
            )}

            {/* <Link to={"/profile"} className="flex items-center gap-4">
                  <img src="" alt="" className="h-10 w-10 rounded-full bg-black "/>
                  <p>Username</p>
                </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
