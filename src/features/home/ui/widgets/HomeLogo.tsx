import Image from "next/image";
import Logo from "@/assets/images/base/logo.svg";

export const HomeLogo = () => {
  return (
    <div className="relative h-48 w-48 flex-none lg:h-64 lg:w-64">
      <Image src={Logo} fill alt="logo" />
    </div>
  );
};
