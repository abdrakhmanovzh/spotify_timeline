import { axiosInstance } from "@/shared/utils";
import { UserType } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
  return useQuery(["user"], async () => {
    return await axiosInstance.get<UserType>("/me");
  });
};
