import Cookies from "js-cookie";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { loginUrl } from "@/shared/constants";
import { useAuthStore } from "@/features/auth";

export const NavbarLoginButton = () => {
  const router = useRouter();

  const { user, logout } = useAuthStore();

  const buttonClickAnimations = {
    scale: [1, 0.9],
    transition: { duration: 0.2, ease: "easeInOut" }
  };

  const handleButton = () => {
    if (user) {
      Cookies.remove("access_token");
      Cookies.remove("refresh_token");
      logout();
      router.push("/");
    } else {
      router.push(loginUrl);
    }
  };

  return (
    <motion.button
      onClick={handleButton}
      whileTap={buttonClickAnimations}
      className="border-[3px] border-black p-1 text-base font-semibold shadow-login-button-sm lg:p-2 lg:text-lg lg:shadow-login-button"
    >
      {user ? "logout" : "login"}
    </motion.button>
  );
};
