import Head from "next/head";
import { useState } from "react";
import { Loading } from "@/shared/widgets";
import { FilterMode, TimeRange } from "@/shared/types";
import {
  FilterCard,
  getSelectedPeriod,
  useFilteredArtists,
  useFilteredTracks
} from "@/features/filters";

export const Filters = () => {
  const [selectedMode, setSelectedMode] = useState<FilterMode>("tracks");
  const [selectedTimeRange, setSelectedTimeRange] =
    useState<TimeRange>("short_term");

  const {
    data: filteredTracks,
    isLoading: filteredTracksLoading,
    error: filteredTracksError
  } = useFilteredTracks(selectedTimeRange);

  const {
    data: filteredArtists,
    isLoading: filteredArtistsLoading,
    error: filteredArtistsError
  } = useFilteredArtists(selectedTimeRange);

  return (
    <>
      <Head>
        <title>Filters | Spotify Timeline</title>
      </Head>
      <div className="flex flex-1 flex-col items-center gap-4 bg-main-green px-4 pb-4 pt-[5%] lg:px-[16.5rem] lg:pt-4">
        <div className="flex flex-col items-center gap-4 lg:w-full lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-2 lg:gap-4">
            <h1 className="text-justify text-xl font-semibold">
              select which filter you wanna see:
            </h1>
            <div className="flex w-full flex-row gap-4 lg:flex-row">
              <button
                onClick={() => setSelectedMode("tracks")}
                className={`border-2 border-black p-1 text-base font-semibold shadow-login-button-sm lg:p-2 lg:text-lg lg:shadow-login-button ${
                  selectedMode === "tracks" ? "bg-black text-white" : ""
                }`}
              >
                tracks
              </button>
              <button
                onClick={() => setSelectedMode("artists")}
                className={`border-2 border-black p-1 text-base font-semibold shadow-login-button-sm lg:p-2 lg:text-lg lg:shadow-login-button ${
                  selectedMode === "artists" ? "bg-black text-white" : ""
                }`}
              >
                artists
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:gap-4">
            <h1 className="text-justify text-xl  font-semibold">
              select which period you wanna see:
            </h1>
            <div className="flex w-full flex-row justify-between gap-4 lg:flex-row">
              <button
                onClick={() => setSelectedTimeRange("short_term")}
                className={`border-2 border-black p-1 text-base font-semibold shadow-login-button-sm lg:p-2 lg:text-lg lg:shadow-login-button ${
                  selectedTimeRange === "short_term"
                    ? "bg-black text-white"
                    : ""
                }`}
              >
                last month
              </button>
              <button
                onClick={() => setSelectedTimeRange("medium_term")}
                className={`border-2 border-black p-1 text-base font-semibold shadow-login-button-sm lg:p-2 lg:text-lg lg:shadow-login-button ${
                  selectedTimeRange === "medium_term"
                    ? "bg-black text-white"
                    : ""
                }`}
              >
                last 6 months
              </button>
              <button
                onClick={() => setSelectedTimeRange("long_term")}
                className={`border-2 border-black p-1 text-base font-semibold shadow-login-button-sm lg:p-2 lg:text-lg lg:shadow-login-button ${
                  selectedTimeRange === "long_term" ? "bg-black text-white" : ""
                }`}
              >
                all time
              </button>
            </div>
          </div>
        </div>
        {filteredTracksLoading ||
        filteredTracksError ||
        filteredArtistsLoading ||
        filteredArtistsError ? (
          <div className="flex flex-1 items-center justify-center bg-main-green">
            <Loading />
          </div>
        ) : (
          <div className="mt-4 w-full">
            <FilterCard
              selectedMode={selectedMode}
              selectedPeriod={getSelectedPeriod(selectedTimeRange)}
              items={
                selectedMode === "tracks"
                  ? filteredTracks!.data.items
                  : filteredArtists!.data.items
              }
            />
          </div>
        )}
      </div>
    </>
  );
};
