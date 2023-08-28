import { loginUrl } from "@/shared/constants";
import { useRouter } from "next/router";

export const MainLoginButton = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push(loginUrl);
  };

  return (
    <button
      onClick={handleLogin}
      className="border-2 border-black bg-white px-4 py-2 text-2xl font-bold shadow-login-button-sm lg:text-3xl lg:font-semibold lg:shadow-login-button"
    >
      Try now
    </button>
  );
};
