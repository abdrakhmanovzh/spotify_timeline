import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { loginUrl } from "@/shared/constants";

export const MainLoginButton = () => {
  const router = useRouter();

  const buttonClickAnimations = {
    scale: [1, 0.9],
    transition: { duration: 0.2, ease: "easeInOut" }
  };

  const handleLogin = () => {
    router.push(loginUrl);
  };

  return (
    <motion.button
      onClick={handleLogin}
      whileTap={buttonClickAnimations}
      className="border-[3px] border-black bg-white px-4 py-2 text-2xl font-bold shadow-login-button-sm lg:text-3xl lg:font-semibold lg:shadow-login-button"
    >
      Try now
    </motion.button>
  );
};
