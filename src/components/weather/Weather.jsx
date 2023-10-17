import useHourlyWeather from "../../hooks/useHourlyWeather";
import HourlyWeather from "./HourlyWeather";
import AirPollution from "../air-pollution/AirPollution";
import Navbar from "../navbar/Navbar";
import DailyWeather from "./DailyWeather";
import CurrentWeather from "./CurrentWeather";
import { useState } from "react";
const Weather = () => {
  const [searchInput, setSearchInput] = useState(null);
  const { data, checkTime, loading, err, getDay } =
    useHourlyWeather(searchInput);
  if (err) return <></>;
  if (loading) return <></>;
  return (
    <div className="mr-5 mb-5 frame z-[2]">
      <Navbar
        city={data?.city.name}
        country={data?.city.country}
        date={getDay()}
        onSearch={(input) => setSearchInput(input)}
      />
      <div className="flex flex-wrap lg:flex-col">
        <HourlyWeather data={data} checkTime={checkTime} />
        <AirPollution searchInput={searchInput} />
        <CurrentWeather searchInput={searchInput} />
        <DailyWeather searchInput={searchInput} />
      </div>
    </div>
  );
};
export default Weather;
