import { MainHeader } from "./widgets/MainHeader";
import { MainLoginButton } from "./widgets/MainLoginButton";
import { MainLogo } from "./widgets/MainLogo";

export const Main = () => {
  return (
    <main className="flex flex-1 flex-col items-center justify-between bg-main-green px-4 pb-10 pt-[15%] lg:px-[16.5rem] lg:pt-20">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-36">
        <MainHeader />
        <MainLogo />
      </div>
      <MainLoginButton />
    </main>
  );
};
