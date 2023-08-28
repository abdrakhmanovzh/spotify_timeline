import { Main } from "@/features/main";
import { Footer } from "@/features/footer";
import { Navbar } from "@/features/navbar";
import Head from "next/head";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const accessToken = req.cookies["access_token"];

  if (accessToken) {
    return {
      redirect: {
        destination: "/home",
        permanent: false
      }
    };
  }

  return {
    props: {}
  };
};

export default function MainPage() {
  return (
    <>
      <Head>
        <title>Spotify Timeline</title>
      </Head>
      <div className="flex h-[100svh] max-w-[100svw] flex-col bg-main-green">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </>
  );
}
