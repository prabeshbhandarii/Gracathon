import React from "react";
import Hosp from "../assets/Butwalhos.jpg";
import { useNavigate } from "react-router-dom";
const Hospitalblog = () => {
  const navigation = useNavigate();
  return (
    <>
      <div>
        <div className=" w-full relative">
          <img src={Hosp} alt="" className="w-full h-72 mx-auto object-cover" />
          <div className="bg-black w-full h-72 opacity-60 mx-auto absolute top-0"></div>
          <div className="w-full h-72 text-white mx-auto font-black absolute top-0 flex justify-center items-center text-5xl ">
            Butwal Hospital Pvt.Ltd
          </div>
        </div>
        <div className="grid grid-cols-2 bg-white py-10">
          <div className="flex flex-col gap-10   w-8/12 mx-auto  h-fit">
            <div className="flex justify-center">
              <span className="text-5xl font-black text-black text-left">
                Butwal <span className="text-blue-600">Hospital</span> Pvt.Ltd
              </span>
            </div>
            <div className="w-full mx-auto ">
              <p className="text-black">
                Hospital provide medical care, treatment, and services to
                patients who are suffering from illnesses, injuries, or other
                health-related conditions. Hospitals typically offer a wide
                range of medical services, from emergency care and surgery to
                diagnostic testing and rehabilitation. They play a crucial role
                in the healthcare system by providing comprehensive and
                coordinated care to patients of all ages and backgrounds.
              </p>
            </div>
            <div className="w-full flex justify-start items-center">
              <button
                onClick={() => navigation("/Profiledoctor")}
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-36 h-12  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Views Doctors
              </button>
            </div>
          </div>
          <div>
            <iframe
              className="w-full h-[500px] "
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1766.323891983374!2d83.46465888856642!3d27.697278944047106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbutwal%20hospital%20pvt%20ltd!5e0!3m2!1sen!2snp!4v1713349645047!5m2!1sen!2snp"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hospitalblog;
