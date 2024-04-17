import React from "react";

const Datadoctor = () => {
  return (
    <>
      <div className="bg-white w-full h-screen  ">
        <div className="flex justify-start gap-5 ml-24 pt-24">
          <div className="card w-96 h-36 bg-blue-700 shadow-md shadow-white">
            <div className="card-body">
              <h2 className="flex justify-center font-bold text-3xl items-center text-white">
                <p>No. of Doctors</p>
              </h2>

              <div className=" flex  justify-center text-xl">
                <p className="text-3xl text-white">30+</p>
              </div>
            </div>
          </div>
          <div className="card w-96 h-36 bg-yellow-500 shadow-md shadow-white">
            <div className="card-body">
              <h2 className="flex justify-center font-bold text-3xl items-center text-white">
                <p>No. of Patient</p>
              </h2>

              <div className=" flex  justify-center text-xl">
                <p className="text-3xl text-white">100+</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="flex justify-center card w-96 h-36 bg-red-700 shadow-md shadow-white">
            <div className="card-body">
              <h2 className="flex justify-center font-bold text-3xl items-center text-white">
                <p>No. of Staff</p>
              </h2>

              <div className=" flex  justify-center text-xl">
                <p className="text-3xl text-white">30+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Datadoctor;
