import { axiosInstance } from "@/shared/utils";
import { TopItemResponse } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";

export const useTopTracks = () => {
  return useQuery(["topTracks"], async () => {
    return await axiosInstance.get<TopItemResponse>("/me/top/tracks", {
      params: {
        limit: 5
      }
    });
  });
};
