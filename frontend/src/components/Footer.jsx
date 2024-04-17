import React from "react";
import Logo from "../assets/OIP.jpeg";
import { MdLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const footerData = [
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
      title: "Sign Up",
      path: "/signup",
    },
  ];

  return (
    <>
      <div>
        <footer className="  p-10 text-[#EAEBED] bg-[#6737c1]">
          <aside>
            <div className="flex ">
              <img
                src={Logo}
                alt=""
                className="w-20 border-r-2 rounded-sm pr-4 border-white"
              />

              <p className="pl-4 text-2xl flex items-center font-semibold">
                Swasthya Yatri
              </p>
            </div>
            <p className=" sm:w-[22rem] mt-4">
              Swasthya Yatri is your trusted companion on the journey towards
              better health. Our app seamlessly connects users with nearby
              doctors, making it easy to schedule appointments and access
              quality healthcare services.
            </p>
          </aside>

          <div className="flex w-[14rem] flex-col justify-between">
            <header className="footer-title mb-1">Links</header>

            <ul className=" flex-col text-white">
              {footerData.map((val, j) => (
                <div className="mt-1" key={j}>
                  <a to={val.path} className="">
                    {val.title}
                  </a>
                </div>
              ))}
            </ul>
          </div>
          <nav>
            <header className="footer-title">Get In Contact</header>
            <ul className="flex w-[14rem] justify-between">
              <li>
                <MdLocalPhone className=" w-5 h-5" />
              </li>
              <a href="tel:+977 9857039400">9841148149</a>
              <li>|</li>
              <a href="tel:+977 9804429400">9804429400</a>
            </ul>
            <ul className="flex w-[10.5rem] justify-between items-center">
              <li>
                <FaLocationDot className=" h-[1rem]" />
              </li>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/wMtvogyU9AULmPk38"
              >
                Butwal, Milanchowk
              </a>
            </ul>
            <ul className="flex w-[9rem] justify-between items-center">
              <li>
                <MdEmail className=" h-[1rem] w-4" />
              </li>
              <a target="_blank" href="mailto:pratishbhandari2@gmail.com">
                info@carer.com
              </a>
            </ul>
          </nav>
        </footer>

        <footer className="footer footer-center p-4  text-gray-300 bg-[#6737c1] border-t-2">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()}- All right reserved by
              Carer
            </p>
            <p>
              Design and Developed By{" "}
              <a
                className="font-bold text-white"
                href="https://www.facebook.com/sanchitpandeyyy/"
              >
                HUB IT
              </a>
            </p>
          </aside>
        </footer>
      </div>
    </>
  );
};

export default Footer;
