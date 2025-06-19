import { createContext } from "react";
import { doctors } from "../assets/assets";

// Create context
export const AppContext = createContext();

// Context Provider component
const AppContextProvider = (props) => {
  const currencySymbol='$'
  const value = {
    doctors,currencySymbol
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
