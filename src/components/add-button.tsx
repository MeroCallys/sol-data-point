import { Plus } from "lucide-react";

interface AddButtonProps {
  type: string;
}

export default function AddButton({ type }: AddButtonProps) {
  return (
    <button className="w-1/4 text-md px-4 py-4 border-none rounded-lg text-white  bg-blue-500 flex gap-2 justify-center items-center hover:bg-blue-600">
      <Plus /> <span className="hidden md:block">ADD {`${type}`}</span>
    </button>
  );
}
