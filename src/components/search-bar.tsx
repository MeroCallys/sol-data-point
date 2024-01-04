import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder: string;
}

export default function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <form className="grow">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search className="text-gray-300" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full px-4 py-4  outline-none ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
          placeholder={placeholder}
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 hidden md:block bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
}
