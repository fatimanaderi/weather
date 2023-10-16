import { BiSearchAlt } from "react-icons/bi";

const SearchInput = () => {
  return (
    <div className="relative w-full sm:w-3/4 glassmorphism p-3 rounded-2xl">
      <input
        placeholder="Enter your City..."
        className="pr-4 pl-8 w-full bg-transparent outline-0 "
      />
      <div className="absolute inset-y-0 left-0 px-3 flex-center text-2xl">
        <BiSearchAlt className="text-gray-400" />
      </div>
    </div>
  );
};
export default SearchInput;
