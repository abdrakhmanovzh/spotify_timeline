import { FiltersResponse, TimeRange } from "@/shared/types";
import { axiosInstance } from "@/shared/utils";
import { useQuery } from "@tanstack/react-query";

export const useFilteredTracks = (timeRange: TimeRange) => {
  return useQuery(["filteredTracks", timeRange], async () => {
    return await axiosInstance.get<FiltersResponse>(
      `/me/top/tracks?time_range=${timeRange}&limit=20`
    );
  });
};
