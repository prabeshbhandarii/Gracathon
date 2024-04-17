import React, { createContext, useEffect, useState } from "react";

// Step 1: Create a context to hold user data
const UserContext = createContext();

// Step 2: Create a provider component to update the context with user information
const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [hospitalData, setHospitalData] = useState(null);

  const updateUser = (data) => {
    console.log(data);
    setUserData(data);
  };
  useEffect(() => {
    if (localStorage.getItem("user")) {
      let data = localStorage.getItem("user");
      let fil = JSON.parse(data);
      updateUser(fil);
    }
  }, [localStorage]);

  const updateHospital = (data) => {
    setHospitalData(data)
  }

  return (
    <UserContext.Provider value={{ userData, updateUser, hospitalData, updateHospital }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
