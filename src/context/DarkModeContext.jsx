import { createContext, useState } from "react";

const darkModeNoteContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const values = {
    dark,
    setDark,
  };

  return (
    <darkModeNoteContext.Provider value={values}>
      {children}
    </darkModeNoteContext.Provider>
  );
};

export { darkModeNoteContext, DarkModeProvider };
