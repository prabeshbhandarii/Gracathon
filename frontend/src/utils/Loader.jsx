import React from "react";
import { DNA } from "react-loader-spinner";
const Loader = () => {
  return (
    <>
      <div className="flex justify-center items-center content-center mt-[45vh] ">
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    </>
  );
};

export default Loader;
