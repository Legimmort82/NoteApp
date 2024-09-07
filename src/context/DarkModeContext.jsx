import { createContext, useState } from "react";

const darkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const values = {
    dark,
    setDark,
  };
  return (
    <darkModeContext.Provider value={values}>
      {children}
    </darkModeContext.Provider>
  );
};

export { darkModeContext, DarkModeProvider };
