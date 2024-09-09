import { DarkModeNoteProvider } from "@/context/DarkModeNoteContext";
import "@/styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <DarkModeNoteProvider>
      <Component {...pageProps} />
    </DarkModeNoteProvider>
  );
};
export default App;
