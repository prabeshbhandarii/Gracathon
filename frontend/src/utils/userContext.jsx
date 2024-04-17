import React, { createContext, useState } from "react";

// Step 1: Create a context to hold user data
const UserContext = createContext();

// Step 2: Create a provider component to update the context with user information
const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [hospitalData, setHospitalData] = useState(null);

  const updateUser = (data) => {
    setUserData(data);
  };

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
