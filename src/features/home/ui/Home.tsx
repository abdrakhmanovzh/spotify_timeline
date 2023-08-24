import { HomeHeader } from "./widgets/HomeHeader";
import { HomeLoginButton } from "./widgets/HomeLoginButton";
import { HomeLogo } from "./widgets/HomeLogo";

export const Home = () => {
  return (
    <main className="flex flex-1 flex-col items-center justify-between bg-main-green px-4 pb-10 pt-[20%] lg:px-[16.5rem] lg:pt-20">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-36">
        <HomeHeader />
        <HomeLogo />
      </div>
      <HomeLoginButton />
    </main>
  );
};
