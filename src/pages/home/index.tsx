import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const HomePage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getToken() {
      try {
        const response = await axios.post("/api/spotify/authorize", {
          code: router.query.code
        });

        if (response.data) {
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getToken();
  }, []);

  if (isLoading) {
    return <h1 className="text-5xl">Loading...</h1>;
  }

  return (
    <>
      <Head>
        <title>Spotify Timeline</title>
      </Head>
      <div className="flex min-h-[100svh] w-[100svw] flex-col bg-main-green"></div>
    </>
  );
};

export default HomePage;
