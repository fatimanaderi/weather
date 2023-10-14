import useWeather from "../hooks/useWeather";
import SearchInput from "./SearchInput";
import WeatherHours from "./WeatherHours";
import AirPollution from "./AirPollution";
const Weather = () => {
  const { data, checkTime, err, getDay } = useWeather();
  if (err) return <></>;
  return (
    <div className="mr-5 mb-5 weather">
      <SearchInput
        city={data?.city.name}
        country={data?.city.country}
        date={getDay()}
      />
      <div className="flex flex-row justify-between justify-items-start">
        <WeatherHours data={data} checkTime={checkTime} />
        <AirPollution />
      </div>
    </div>
  );
};
export default Weather;
