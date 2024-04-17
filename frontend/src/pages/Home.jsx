import React, { useContext, useState } from "react";
import Searchbar from "../components/Searchbar";
import mainimg from "../assets/mainbanner.jpg";
import Hospital from "../components/Hospital";
import { UserContext } from "../utils/userContext";
const Home = () => {
  const { userData } = useContext(UserContext);
  const [Search, setSearch] = useState("");
  const Filter = (options) => {
    return options.filter(
      (x) => x["name"].toLowerCase().indexOf(Search.toLowerCase()) > -1
    );
  };
  console.log(userData);
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
