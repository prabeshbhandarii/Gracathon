import React, { useState } from "react";
import { CiGlass, CiSearch } from "react-icons/ci";
const Doctor = [
  {
    name: "Dr. Pratik Pandey",
    qualification: "Cardiology",
    appointment: "Take an Appointment",
    image: "./src/assets/Pp.jpg",
  },
  {
    name: "Dr. Sanchit Pandey",
    qualification: "Neurology",
    appointment: "Take an Appointment",
    image: "./src/assets/sp.jpg",
  },
  {
    name: "Dr. Anu Pandey",
    qualification: "Orthopedics: ",
    appointment: "Take an Appointment",
    image: "./src/assets/Ap.jpg",
  },
  {
    name: "Dr. Shikshya Acharya",
    qualification: "Gynologist",
    appointment: "Take an Appointment",
    image: "./src/assets/Sa.jpg",
  },
  {
    name: "Dr. Pratish Bhandari",
    qualification: "Dermatology",
    appointment: "Take an Appointment",
    image: "./src/assets/Ptishb.jpg",
  },
  {
    name: "Dr. Prabesh Bhandari",
    qualification: "Pulmonology: ",
    appointment: "Take an Appointment",
    image: "./src/assets/pb.jpg",
  },
];

const Profiledoctor = () => {
  const [Search, setSearch] = useState("");
  const Filter = (options) => {
    return options.filter(
      (x) => x["name"].toLowerCase().indexOf(Search.toLowerCase()) > -1
    );
  };
  return (
    <>
      <div className="w-full flex justify-center items-center py-10 font-black text-black bg-white">
        <div className="">
          <div className="flex">
            <span className="text-5xl uppercase ">
              Our <span className="text-blue-600"> Doctors</span>
            </span>{" "}
          </div>
        </div>
      </div>
      <div className="bg-white flex justify-end items-center pr-10">
        <input
          id="name"
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            setSearch(e.target.value);
          }}
          className="w-52 h-10 rounded-lg bg-gray-200 pl-2 "
          placeholder="Search"
        />
        <CiSearch for="name" className="w-8 h-6 text-black cursor-pointer" />
      </div>
      <div className="bg-white grid grid-cols-2 gap-10 py-10 ">
        {Filter(Doctor).map((val, i) => {
          return (
            <div className=" flex   shadow-xl h-52 cursor-pointer rounded-lg bg-gray-200  hover:scale-105 transition-all delay-75 duration-200 ease-in w-10/12 mx-auto">
              <figure className="">
                <img
                  src={val.image}
                  alt="Movie"
                  className="w-44 h-full rounded-lg object-cover"
                />
              </figure>
              <div className="card-body px-10">
                <h2 className="card-title text-black">{val.name}</h2>
                <p className="text-black">{val.qualification}</p>
                <div className="">
                  <button className="bg-blue-600 p-2 rounded-lg text-white">
                    {val.appointment}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Profiledoctor;
