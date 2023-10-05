import Image from "next/image";
import { Artist } from "@/shared/types";

interface Props {
  items: Artist[];
}

export const TopArtists = ({ items }: Props) => {
  return (
    <div className="flex w-full flex-col gap-2 border-[3px] border-black p-2">
      <h2 className="text-xl font-bold underline">top artists</h2>
      {items.map((item, index) => (
        <div key={item.id} className="flex items-center justify-between gap-2">
          <p className="font-semibold">
            #{index + 1}: <span className="font-medium">{item.name}</span>
          </p>
          <Image
            src={item.images[0].url}
            width={64}
            height={64}
            className="h-16 w-16 border-[3px] border-black object-cover"
            alt="artist image"
          />
        </div>
      ))}
    </div>
  );
};
