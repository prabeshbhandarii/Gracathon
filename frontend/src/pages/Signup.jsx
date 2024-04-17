import React, { useState } from "react";
import { FaHospitalUser } from "react-icons/fa6";
import { FaHospital } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "../HOC/axios";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  console.log(user);

  const [hospital, setHospital] = useState({
    hospitalName: "",
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
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/signup",
        user
      );

      console.log(res);

      const data = res.data;

      console.log(data);

      if (!data.success) {
        throw new Error("Error while Singing up");
      }

      navigate("/login");
    } catch (error) {
      console.log("Error while signing User");
    }
  };

  const handleHospitalLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/hospital/signup",
        hospital
      );

      const data = res.data;

      console.log(data);

      if (!data.success) {
        throw new Error("Error while Singing up");
      }

      setLoginAs("hospital");



      navigate("/login");
    } catch (error) {
      console.log("Error while signing Hospital");
    }
  };
  return (
    <div className="hero bg-[#F7F7F7] min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center ">
        <div className="text-center lg:m-[10rem] ">
          <h1 className="text-5xl font-bold text-[#41518B]">Sign up</h1>

          <div className="py-6 flex justify-center items-center">
            <button
              onClick={() => setLoginAs("user")}
              className="btn hover:text-white m-4 bg-[#ffffff] text-[#41518B]"
            >
              <FaHospitalUser className="w-5 h-5" />
              Sign up as a User
            </button>
            <button
              onClick={() => setLoginAs("hospital")}
              className="btn m-4 bg-white hover:text-white text-[#41518B]"
            >
              <FaHospital className="w-5 h-5" />
              Register Hospital
            </button>
          </div>
          <hr className="bg-black" />
        </div>

        {loginAs === "user" && (
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white ">
            <form className="card-body">
              <h1>User Signup</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#41518B] font-semibold">
                    Username
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Username"
                  className="input input-bordered bg-[#fffff9]"
                  required
                  name="username"
                  onChange={userOnchangeHandler}
                />
              </div>
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
                  Sign up
                </button>
                <hr />
                <button onClick={()=> navigate("/login")} className="btn mt-4 ml-4 mr-4 bg-[#f1f1f1] border-none hover:text-white text-[#41518B]">
                  Already have an account?
                </button>
              </div>
            </form>
          </div>
        )}

        {loginAs === "hospital" && (
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white ">
            <form className="card-body">
              <h1>Register Hospital</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#41518B] font-semibold">
                    Hospital Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter you hospital name"
                  className="input input-bordered bg-[#fffff9]"
                  required
                  name="hospitalName"
                  onChange={hospitalOnchangeHandler}
                />
              </div>
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
                  Sign up
                </button>
                <hr />
                <button
                  onClick={()=> navigate("/login")}
                  className="btn mt-4 ml-4 mr-4 bg-[#f1f1f1] border-none hover:text-white text-[#41518B]"
                >
                  Already have an account?
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
