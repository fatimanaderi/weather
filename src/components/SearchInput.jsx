import { BiSearchAlt } from "react-icons/bi";
const SearchInput = ({ city, country, date }) => {
  return (
    <>
      <div className="flex-center flex-wrap sm:flex-nowarp">
        <div className="w-full sm:w-1/5 my-5 sm:my-0">
          <h1 className="text-2xl font-bold">
            {city}, {country}
          </h1>
          <h2>{date}</h2>
        </div>
        <div className="relative w-full sm:w-3/4 glassmorphism">
          <input
            placeholder="Enter your City..."
            className="pr-4 pl-8 w-full bg-transparent outline-0"
          />
          <div className="absolute inset-y-0 left-0 px-3 flex-center text-2xl">
            <BiSearchAlt className="text-gray-400" />
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchInput;
