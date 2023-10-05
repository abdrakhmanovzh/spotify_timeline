import { Track } from "@/shared/types";
import Image from "next/image";

interface Props {
  items: Track[];
}

export const TopTracks = ({ items }: Props) => {
  return (
    <div className="flex w-full flex-col gap-2 border-[3px] border-black p-2">
      <h2 className="text-xl font-bold underline">top tracks</h2>
      {items.map((item, index) => (
        <div key={item.id} className="flex items-center justify-between gap-2">
          <p className="font-semibold ">
            #{index + 1}: <span className="font-medium">{item.name}</span>
          </p>
          <Image
            src={item.album.images[0].url}
            width={64}
            height={64}
            className="h-16 w-16 border-[3px] border-black object-cover"
            alt="track"
          />
        </div>
      ))}
    </div>
  );
};
