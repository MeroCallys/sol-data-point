import AddButton from "./add-button";
import SearchBar from "./search-bar";

interface FunctionBoxProps {
  header: string;
  placeholder: string;
  type: string;
  linkTo: string;
}

export default function ControlPanel({
  header,
  placeholder,
  type,
  linkTo,
}: FunctionBoxProps) {
  return (
    <div className="bg-white w-full shadow border-gray-300 rounded-lg p-5 flex flex-col gap-8 ">
      <h2 className="text-2xl font-bold text-gray-600">{header}</h2>
      <div className="relative flex">
        <div className="flex w-full justify-between items-center gap-5">
          <SearchBar placeholder={placeholder} />
          <AddButton linkTo={linkTo} type={type} />
        </div>
      </div>
    </div>
  );
}
