import { axiosInstance } from "@/shared/utils";
import { TopItemResponse } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";

export const useTopArtists = () => {
  return useQuery(["topArtists"], async () => {
    return await axiosInstance.get<TopItemResponse>("/me/top/artists", {
      params: {
        limit: 5
      }
    });
  });
};
