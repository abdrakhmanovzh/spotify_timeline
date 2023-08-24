import { NavbarLogo } from "./widgets/NavbarLogo";
import { NavbarLoginButton } from "./widgets/NavbarLoginButton";

export const Navbar = () => {
  return (
    <nav className="flex h-20 w-full items-center justify-between border-b-2 border-black bg-white px-4 lg:h-24 lg:px-72">
      <NavbarLogo />
      <NavbarLoginButton />
    </nav>
  );
};
