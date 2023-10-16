const CurrentLoc = ({ city, country, date }) => {
  return (
    <div className="w-full sm:w-1/4 my-5 ">
      <h1 className="text-2xl font-bold">
        {city}, {country}
      </h1>
      <h2>{date}</h2>
    </div>
  );
};
export default CurrentLoc;
