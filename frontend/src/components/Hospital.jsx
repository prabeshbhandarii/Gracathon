import React from "react";
import { Link } from "react-router-dom";
import Hospitalblog from "../components/Hospitalblog";
import { motion } from "framer-motion";

const Hospital = [
  {
    image: "./src/assets/Butwalhos.jpg",
    name: "Butwal Hospital Pvt.Ltd",
    button: "View More",
  },
  {
    image: "./src/assets/Lumbini-Provincial-Hospital.jpg",
    name: "Butwal Provincial Hospital",
    button: "View More",
  },
  {
    image: "./src/assets/Tinau-International-Hospital-Pvt.Ltd_..jpg",
    name: "Tinau Hospital",
    button: "View More",
  },
  {
    image: "./src/assets/Eye.jpg",
    name: "Butwal Lions Eye Hospital",
    button: "View More",
  },
  {
    image: "./src/assets/Amda.jpg",
    name: "Butwal Amda Hospital",
    button: "View More",
  },
  {
    image: "./src/assets/Heart.jpeg",
    name: "GBC Heart Hospital",
    button: "View More",
  },
];
const Appointmentbox = () => {
  return (
    <>
      <div className="py-20 w-11/12 mx-auto grid grid-cols-3 gap-10">
        {Hospital.map((val, i) => {
          return (
            <Link to={`/Hospital/${i}`} state={val}>
              <div className="card  card-compact w-80  h-96 grid  bg-white shadow-xl cursor-pointer hover:scale-105   transition-all delay-100 duration-300 ease-in-out">
                <figure>
                  <img
                    src={val.image}
                    alt="hospital"
                    className="w-96 h-72 object-cover rounded-lg"
                  />
                </figure>
                <div className="w-11/12 mx-auto font-semibold">
                  <h2 className="  text-black">{val.name}</h2>

                  <div className="flex items-center justify-end">
                    <div className="bg-blue-700  p-2 rounded-lg text-white border-transparent">
                      {val.button}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Appointmentbox;
