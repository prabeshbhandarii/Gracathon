import React from "react";
import { motion } from "framer-motion";
const Whoarey = () => {
  return (
    <>
      <motion.div className="w-full h-fit bg-gray-200 py-28">
        <div className="text-black bg-gray-200 w-full text-7xl font-bold h-40 flex justify-center items-center">
          <motion.span
            initial={{ opacity: 0.25, x: -200 }}
            whileInView={{ opacity: 1, scale: 1.2, x: 0 }}
            transition={{ duration: 1 }}
          >
            Who we are?
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full flex justify-center items-center  "
        >
          <p align="center" className=" w-7/12 text-lg text-black">
            <b className="">"Carer"</b> is your trusted companion on the journey
            towards better health. Our app seamlessly connects users with nearby
            doctors, making it easy to schedule appointments and access quality
            healthcare services.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Whoarey;
