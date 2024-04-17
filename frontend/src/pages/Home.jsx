import React, { useContext } from "react";
import Searchbar from "../components/Searchbar";
import mainimg from "../assets/mainbanner.jpg";
import Hospital from "../components/Hospital";
import { UserContext } from "../utils/userContext";
const Home = () => {
  const { userData } = useContext(UserContext);

  console.log(userData)
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
