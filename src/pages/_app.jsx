import "@/styles/globals.css";
import { DarkModeNoteProvider } from "@/context/DarkModeNoteContext";
import { Nunito } from 'next/font/google';
import { QueryClientProvider, QueryClient} from "react-query";

const queryClient = new QueryClient()

const nunito = Nunito({
  subsets: ["latin"]
})

const App = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeNoteProvider>
        <main className={nunito.className}>
          <Component {...pageProps} />
        </main>
      </DarkModeNoteProvider>
    </QueryClientProvider>

  );
};
export default App;
