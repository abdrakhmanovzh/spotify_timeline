import { FiltersResponse, TimeRange } from "@/shared/types";
import { axiosInstance } from "@/shared/utils";
import { useQuery } from "@tanstack/react-query";

export const useFilteredArtists = (timeRange: TimeRange) => {
  return useQuery(["filteredArtists", timeRange], async () => {
    return await axiosInstance.get<FiltersResponse>(
      `/me/top/artists?time_range=${timeRange}&limit=20`
    );
  });
};
