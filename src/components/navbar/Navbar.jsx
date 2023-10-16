import CurrentLoc from "./CurrentLoc";
import SearchInput from "./SearchInput";
const Navbar = ({ city, country, date }) => {
  return (
    <>
      <div className="flex-center flex-wrap sm:flex-nowarp px-5">
        <CurrentLoc city={city} country={country} date={date}/>
        <SearchInput/>
      </div>
    </>
  );
};
export default Navbar;
