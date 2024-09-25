import "@/assets/styles/globals.css";
import { DarkModeProvider } from "@/context/DarkModeContext";
import { Nunito } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const nunito = Nunito({
  subsets: ["latin"],
});

const App = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <main className={nunito.className}>
          <Component {...pageProps} />
        </main>
      </DarkModeProvider>
    </QueryClientProvider>
  );
};
export default App;
