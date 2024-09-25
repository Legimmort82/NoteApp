import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const darkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [dark, setDark] = useState(() => {
    const savedDarkMode = Cookies.get('darkMode');
    return savedDarkMode === 'true'; 
  });

  useEffect(() => {
    Cookies.set('darkMode', dark, { expires: 7 }); 
  }, [dark]);

  // Apply dark mode class to the body element
  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [dark]);

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
