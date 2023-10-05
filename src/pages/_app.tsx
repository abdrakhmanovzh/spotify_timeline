import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lexend_Deca } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const font = Lexend_Deca({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"]
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={font.className}>
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}
