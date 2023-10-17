const CurrentLoc = ({ city, country, date }) => {
  return (
    <div className="w-full sm:w-1/4 my-5 ">
      <h1 className="text-2xl font-bold mr-2 lg:ml-10">
        {city}, {country}
      </h1>
      <h2 className="lg:ml-10">{date}</h2>
    </div>
  );
};
export default CurrentLoc;
