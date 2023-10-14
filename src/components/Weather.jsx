import useWeather from "../hooks/useWeather";
import SearchInput from "./SearchInput";
import WeatherHours from "./WeatherHours";

const Weather = () => {
  const { data, checkTime, err, getDay } = useWeather();
  if (err) return <></>;
  return (
    <div className="mt-6 mx-6">
      <SearchInput
        city={data?.city.name}
        country={data?.city.country}
        date={getDay()}
      />
      <WeatherHours data={data} checkTime={checkTime} />
    </div>
  );
};
export default Weather;
