import { UserType } from "@/shared/types";

interface Props {
  user: UserType;
}

export const UserCard = ({ user }: Props) => {
  return (
    <div className="w-full border-[3px] border-black p-2">
      <h1 className="text-xl font-semibold underline">info</h1>
      <p className="font-semibold">
        name: <span className="font-medium">{user!.display_name}</span>
      </p>
      <p className="font-semibold">
        email:{" "}
        <span className="font-medium">{user!.email || "not defined"}</span>
      </p>
      <p className="font-semibold">
        country:{" "}
        <span className="font-medium">{user!.country || "not defined"}</span>
      </p>
    </div>
  );
};
