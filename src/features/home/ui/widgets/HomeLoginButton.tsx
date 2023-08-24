import { loginUrl } from "@/shared/constants";
import { useRouter } from "next/router";

export const HomeLoginButton = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push(loginUrl);
  };

  return (
    <button
      onClick={handleLogin}
      className="shadow-login-button-sm lg:shadow-login-button border-2 border-black bg-white px-4 py-2 text-2xl font-bold lg:text-3xl lg:font-semibold"
    >
      Try now
    </button>
  );
};
