import { DNA } from "react-loader-spinner";
import React from "react";

const Loader = () => {
  return (
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
  );
};

export default Loader;
