import { loginUrl } from "@/shared/constants/constants";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export const NavbarLoginButton = () => {
  const router = useRouter();

  const buttonClickAnimations = {
    scale: 0.3,
    transition: { duration: 0.2, ease: "easeInOut" }
  };

  const handleLogin = () => {
    router.push(loginUrl);
  };

  return (
    <motion.button
      onClick={handleLogin}
      whileTap={buttonClickAnimations}
      className="shadow-login-button-sm lg:shadow-login-button border-2 border-black p-1 text-base font-semibold lg:p-2 lg:text-lg"
    >
      login
    </motion.button>
  );
};
