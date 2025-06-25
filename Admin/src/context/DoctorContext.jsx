import { createContext } from "react";

export const DoctorContext = createContext();

const DoctorContextProvider = (props) => {

  const value = {
    // Add context values here
  };

  return (
    <DoctorContext.Provider value={value}>
      {props.children}
    </DoctorContext.Provider>
  );
};

export default DoctorContextProvider;
