import React, { useContext, useState } from "react";
import { FaHospitalUser } from "react-icons/fa6";
import { FaHospital } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "../HOC/axios";
import { UserContext } from "../utils/userContext";

const Login = () => {

  const { updateUser, updateHospital } = useContext(UserContext);


  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  console.log(user);

  const [hospital, setHospital] = useState({
    email: "",
    password: "",
  });

  console.log(hospital);

  const [loginAs, setLoginAs] = useState("user");

  const userOnchangeHandler = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const hospitalOnchangeHandler = (e) => {
    setHospital((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUserLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/user/login", user);

      console.log(res);

      const data = res.data;

      console.log(data);

      localStorage.setItem("token", data.token)
      if (!data.success) {
        throw new Error("Error while login");
      }

      updateUser(data);


      navigate("/");
    } catch (error) {
      console.log("Error while login User");
    }
  };

  const handleHospitalLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios
        .post("/api/v1/hospital/login", hospital)


      const data = res.data;

      console.log(data);


      localStorage.setItem("token", data.token)
      console.log("kuhgjgjhg")

      navigate("/cms")
    } catch (error) {
      console.log("Error while login Hospital");
    }
  };
  return (
    <div className="hero bg-[#F7F7F7] min-h-screen ">
      <div className="hero-content flex-col lg:flex-row  justify-center items-center ">
        <div className="text-center lg:m-[10rem] ">
          <h1 className="text-5xl font-bold text-[#41518B]">Login In</h1>

          <div className="py-6 flex justify-center items-center">
            <button
              onClick={() => setLoginAs("user")}
              className={`btn hover:text-white m-4 
              ${loginAs === "user" ? "bg-[#41518B] text-white" : "bg-[#ffffff]"}
               text-[#41518B]`}
            >
              <FaHospitalUser className="w-5 h-5" />
              Login as a User
            </button>
            <button
              onClick={() => setLoginAs("hospital")}
              className={`btn hover:text-white m-4 
              ${loginAs === "hospital"
                  ? "bg-[#41518B] text-white"
                  : " text-[#41518B] bg-[#ffffff]"
                }
              `}
            >
              <FaHospital className="w-5 h-5" />
              Login as a Hospital
            </button>
          </div>
          <hr className="bg-black" />
        </div>

        {loginAs === "user" && (
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white ">
            <form className="card-body">
              <h1>User Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#41518B] font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Enter you email"
                  className="input input-bordered bg-[#fffff9]"
                  required
                  name="email"
                  onChange={userOnchangeHandler}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#41518B] font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered  bg-[#fffff9]"
                  required
                  name="password"
                  onChange={userOnchangeHandler}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  onClick={handleUserLogin}
                  className="btn m-4 bg-[#f1f1f1] border-none hover:text-white text-[#41518B]"
                >
                  Login
                </button>
                <hr />
                <button
                  onClick={() => navigate("/Signup")}
                  className="btn mt-4 ml-4 mr-4 bg-[#f1f1f1] border-none hover:text-white text-[#41518B]"
                >
                  Create a New Account
                </button>
              </div>
            </form>
          </div>
        )}

        {loginAs === "hospital" && (
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white ">
            <form className="card-body">
              <h1>Hospital Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#41518B] font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Enter you email"
                  className="input input-bordered bg-[#fffff9]"
                  required
                  name="email"
                  onChange={hospitalOnchangeHandler}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#41518B] font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered  bg-[#fffff9]"
                  required
                  name="password"
                  onChange={hospitalOnchangeHandler}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  onClick={handleHospitalLogin}
                  className="btn m-4 bg-[#f1f1f1] border-none hover:text-white text-[#41518B]"
                >
                  Login
                </button>
                <hr />
                <button
                  onClick={() => navigate("/Signup")}
                  className="btn mt-4 ml-4 mr-4 bg-[#f1f1f1] border-none hover:text-white text-[#41518B]"
                >
                  Create a New Account
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
