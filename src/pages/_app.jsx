import { DarkModeProvider } from "@/context/DarkModeContext";
import "@/styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
};
export default App;
