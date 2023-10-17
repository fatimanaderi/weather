import CurrentLoc from "./CurrentLoc";
import SearchInput from "./SearchInput";
const Navbar = ({ city, country, date, onSearch }) => {
  return (
    <div className="flex-center flex-wrap sm:flex-nowarp px-5">
      <CurrentLoc city={city} country={country} date={date} />
      <SearchInput onSearch={onSearch} />
    </div>
  );
};
export default Navbar;
