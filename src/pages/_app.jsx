import "@/styles/globals.css";
import { DarkModeNoteProvider } from "@/context/DarkModeNoteContext";
import { Nunito } from 'next/font/google';

const nunito = Nunito({ 
    subsets : ["latin"]
 })

const App = ({ Component, pageProps }) => {
  return (
    <DarkModeNoteProvider>
      <main className={nunito.className}>
        <Component {...pageProps} />
      </main>
    </DarkModeNoteProvider>
  );
};
export default App;
