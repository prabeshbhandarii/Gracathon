import React from "react";
import Hosp from "../assets/Butwalhos.jpg";
const Hospitalblog = () => {
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
        <div className="grid grid-cols-2 w-11/12 mx-auto bg-green-500">
          <div className="flex justify-center items-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            consequuntur, placeat iste praesentium fuga, laudantium asperiores
            tenetur error, minus quidem minima quis. Quis pariatur voluptatum
            ipsum ullam, obcaecati perspiciatis ea quod. Nobis dignissimos vero
            ratione quod quae, odio dolore mollitia cumque a debitis, facere
            vitae assumenda rerum cupiditate placeat laudantium repudiandae
            deserunt error reiciendis? Cupiditate distinctio culpa consectetur,
            mollitia natus illum non velit, quibusdam tempora illo
            exercitationem expedita voluptates ipsum sapiente, fugit impedit!
            Iure nisi alias praesentium porro accusamus possimus. Sit ducimus
            ipsa sed deserunt, iste temporibus debitis et rem quos inventore
            eius aut at corrupti eveniet commodi omnis sunt.
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
