import { useAuthStore } from "@/features/auth";
import {
  TopArtists,
  TopTracks,
  useTopArtists,
  useTopTracks
} from "@/features/top";
import { UserCard } from "@/features/user";
import { Artist, Track } from "@/shared/types";
import { Loading } from "@/shared/widgets";
import Link from "next/link";

export const User = () => {
  const { user } = useAuthStore();

  const {
    data: topTracks,
    isLoading: topTracksLoading,
    error: topTracksError
  } = useTopTracks();

  const {
    data: topArtists,
    isLoading: topArtistsLoading,
    error: topArtistsError
  } = useTopArtists();

  if (
    topTracksLoading ||
    topTracksError ||
    topArtistsLoading ||
    topArtistsError
  ) {
    return (
      <div className="flex w-full flex-1 items-center justify-center bg-main-green">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col items-center gap-2 bg-main-green px-4 pb-4 pt-[5%] lg:px-[16.5rem] lg:pt-4">
      <UserCard user={user!} />
      <div className="flex w-full flex-col gap-4 lg:flex-row lg:justify-between">
        <TopTracks items={topTracks!.data.items as Track[]} />
        <TopArtists items={topArtists!.data.items as Artist[]} />
      </div>
      <Link
        href="/filters"
        className="w-full border-[3px] border-black p-1 text-center text-sm font-semibold lg:text-lg"
      >
        learn more
      </Link>
    </div>
  );
};
