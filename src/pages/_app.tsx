import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IBM_Plex_Mono } from "next/font/google";

const queryClient = new QueryClient();
const font = IBM_Plex_Mono({
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
