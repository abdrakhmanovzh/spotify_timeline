import Image from "next/image";
import LoadingImage from "@/assets/images/loaders/loading.svg";

export const Loading = () => {
  return <Image src={LoadingImage} alt="loading..." width={100} height={100} />;
};
