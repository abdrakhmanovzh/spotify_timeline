import Head from "next/head";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { GetServerSideProps } from "next";
import { Loading, Placeholder } from "@/shared/widgets";
import { User, useUser } from "@/features/user";
import { useAuthStore } from "@/features/auth";
import { Footer } from "@/features/footer";
import { Navbar } from "@/features/navbar";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const accessToken = req.cookies["access_token"];

  if (!accessToken) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    };
  }

  return {
    props: {}
  };
};

const HomePage = () => {
  // Getting the access token from the cookies
  const accessToken = Cookies.get("access_token");
  //Fetching the user from the spotify api
  const {
    data: userData,
    isLoading: userLoading,
    error: userError
  } = useUser();

  //Setting the user data to global state
  const { login, isLoading, setIsLoading } = useAuthStore();
  useEffect(() => {
    if (userData && accessToken) {
      setIsLoading(true);
      login(userData.data, accessToken);
      setIsLoading(false);
    }
  }, [accessToken, login, setIsLoading, userData]);

  //Getting the user from the global state
  const { user } = useAuthStore();

  //Rendering loading screen if the user is not loaded yet
  if (userLoading || !userData || userError || isLoading)
    return (
      <>
        <Head>
          <title>Spotify Timeline</title>
        </Head>
        <div className="flex min-h-[100svh] w-[100svw] items-center justify-center bg-main-green">
          <Loading />
        </div>
      </>
    );

  return (
    <>
      <Head>
        <title>Spotify Timeline</title>
      </Head>
      <div className="flex min-h-[100svh] max-w-[100svw] flex-col bg-main-green lg:h-[100svh]">
        <Navbar />
        {user ? <User /> : <Placeholder />}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
