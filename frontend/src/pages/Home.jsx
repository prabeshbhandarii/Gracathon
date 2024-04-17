import React from "react";
import Searchbar from "../components/Searchbar";
import mainimg from "../assets/mainbanner.jpg";
import Hospital from "../components/Hospital";
const Home = () => {
  return (
    <>
      <div className="bg-white ">
        <div>
          <img src={mainimg} alt="" className="" />
        </div>
        <Searchbar />
        <Hospital />
      </div>
    </>
  );
};

export default Home;
