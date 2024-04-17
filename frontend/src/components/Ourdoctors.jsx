import React from "react";
import { motion } from "framer-motion";
const Ourdoctors = () => {
  return (
    <>
      <motion.div className="py-28 w-full h-fit bg-white">
        <div className="w-full  flex justify-center items-center py-5">
          <span className="text-[#6C46AB] text-5xl font-black underline ">
            Our Doctors
          </span>
        </div>
        <div className="grid grid-cols-2 w-9/12 mx-auto">
          <motion.div
            initial={{ display: "hidden", x: -150 }}
            whileInView={{ x: 0, display: "visible" }}
            transition={{ duration: 1 }}
            className=" flex justify-center items-center py-8"
          >
            <img
              src="./src/assets/5185016.jpg"
              alt=""
              className="w-96 h-66 rounded-xl "
            />
          </motion.div>
          <motion.div
            initial={{ display: "hidden", x: 150 }}
            whileInView={{ x: 0, display: "visible" }}
            transition={{ duration: 1 }}
            className=""
          >
            <p className=" p-10 text-md text-black">
              Carer is proud to offer access to more than 5000 trusted doctors
              in our network. These doctors cover a wide range of medical fields
              and specialties, ensuring that our users can find the right
              healthcare provider for their needs. Each doctor in our network is
              carefully selected for their expertise and commitment to providing
              excellent care. Whether you need a general check-up or specialized
              treatment, Swasthya Yatri is here to connect you with the perfect
              doctor to meet your healthcare needs.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Ourdoctors;
