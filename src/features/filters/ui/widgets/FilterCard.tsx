import Image from "next/image";
import { Artist, FilterMode, Track } from "@/shared/types";

interface Props {
  selectedMode: FilterMode;
  selectedPeriod: string;
  items: Track[] | Artist[];
}

export const FilterCard = ({ selectedMode, selectedPeriod, items }: Props) => {
  return (
    <div className="flex w-full flex-col gap-2 border-[3px] border-black p-2">
      <h2 className="text-xl font-bold underline">
        top {selectedMode} in {selectedPeriod}
      </h2>
      {items.map((item, index) => (
        <div key={item.id} className="flex items-center justify-between gap-2">
          <p className="font-semibold ">
            #{index + 1}: <span className="font-medium">{item.name}</span>
          </p>
          <Image
            src={
              selectedMode === "tracks"
                ? (item as Track).album.images[0].url
                : (item as Artist).images[0].url
            }
            width={64}
            height={64}
            alt="track image"
            className="border-[3px] border-black"
          />
        </div>
      ))}
    </div>
  );
};
