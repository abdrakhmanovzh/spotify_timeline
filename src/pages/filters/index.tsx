import Head from "next/head";
import { GetServerSideProps } from "next";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { Navbar } from "@/features/navbar";
import { Footer } from "@/features/footer";
import { Filters } from "@/features/filters";
import { useUser } from "@/features/user";
import { useAuthStore } from "@/features/auth";
import { Loading } from "@/shared/widgets";

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

const FiltersPage = () => {
  const accessToken = Cookies.get("access_token");

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
        <title>Filters | Spotify Timeline</title>
      </Head>
      <div className="flex min-h-[100svh] max-w-[100svw] flex-col bg-main-green">
        <Navbar />
        <Filters />
        <Footer />
      </div>
    </>
  );
};

export default FiltersPage;
