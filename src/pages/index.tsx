import { Main } from "@/features/main";
import { Footer } from "@/features/footer";
import { Navbar } from "@/features/navbar";
import Head from "next/head";

export default function MainPage() {
  return (
    <>
      <Head>
        <title>Spotify Timeline</title>
      </Head>
      <div className="flex min-h-[100svh] w-[100svw] flex-col bg-main-green">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </>
  );
}
