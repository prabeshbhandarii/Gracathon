import React from "react";
import { FaHospitalUser } from "react-icons/fa6";
import { FaHospital } from "react-icons/fa";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

const login = () => {

  function routing(){
    <BrowserRouter>
          <Routes>

              <Route path="/Signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>

  }

  return (
    <div className="hero bg-[#F7F7F7] min-h-screen ">
      <div className="hero-content flex-col lg:flex-row  justify-center items-center ">
        <div className="text-center lg:m-[10rem] ">
          <h1 className="text-5xl font-bold text-[#41518B]">Login In</h1>

          <div className="py-6 flex justify-center items-center">
          
            <button className="btn hover:text-white m-4 bg-[#ffffff] text-[#41518B]">
            <FaHospitalUser className="w-5 h-5"/>
               Login as a User
            </button>
            <button className="btn m-4 bg-white hover:text-white text-[#41518B]">
            <FaHospital  className="w-5 h-5"/>
               Login as a Hospital
            </button>
            
          </div>
          <hr className="bg-black" />
        </div>

        

        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white ">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#41518B] font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter you email"
                className="input input-bordered bg-[#fffff9]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#41518B] font-semibold">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered  bg-[#fffff9]"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
            <button className="btn m-4 bg-[#f1f1f1] border-none hover:text-white text-[#41518B]">
            
               Login
            </button>
            <hr />
            <button className="btn mt-4 ml-4 mr-4 bg-[#f1f1f1] border-none hover:text-white text-[#41518B]" onClick={(routing)={

            }}>
            
               Create a New Account
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
