import Link from "next/link";

export const NavbarLogo = () => {
  return (
    <Link href="/">
      <h2 className="text-xl font-semibold hover:underline lg:text-2xl">
        Spotify Timeline
      </h2>
    </Link>
  );
};
