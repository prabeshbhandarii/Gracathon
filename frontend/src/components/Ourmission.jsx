import React from "react";
import { motion } from "framer-motion";
const Ourmission = () => {
  return (
    <>
      <div className="bg-blue-100 h-fit w-full  py-16">
        <div className="w-10/12 mx-auto grid  grid-cols-2">
          <div className="py-10">
            <div className="flex flex-col justify-center items-center gap-8 ">
              <motion.span
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl text-[#6C46AB] font-bold underline"
              >
                Our Missions
              </motion.span>
              <motion.p
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                align="left"
                className="w-10/12 text-black"
              >
                Our mission at Carer is to revolutionize healthcare
                accessibility by providing a user-friendly platform that
                seamlessly connects individuals with nearby doctors and
                facilitates hassle-free appointment scheduling. Through our
                innovative approach, we aim to bridge the gap between patients
                and healthcare providers, ensuring timely access to quality
                medical services. By leveraging technology, we strive to empower
                individuals to take control of their health journey, fostering a
                healthier and more informed community.
              </motion.p>
            </div>
          </div>
          <div className=" flex justify-center items-center relative  ">
            <div className=" ">
              <motion.img
                initial={{ opacity: 1, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                src="./src/assets/Doctorpatient.jpg"
                alt=""
                className="w-96 h-96 object-cover border-8 border-gray-200  rounded-lg absolute top-0 right-24"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourmission;
