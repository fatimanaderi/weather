import useHourlyWeather from "../../hooks/useHourlyWeather";
import HourlyWeather from "./HourlyWeather";
import AirPollution from "../air-pollution/AirPollution";
import Navbar from "../navbar/Navbar";
import DailyWeather from "./DailyWeather";
import CurrentWeather from "./CurrentWeather";
const Weather = () => {
  const { data, checkTime, err, getDay } = useHourlyWeather();
  if (err) return <></>;
  return (
    <div className="mr-5 mb-5 frame z-[2]">
      <Navbar
        city={data?.city.name}
        country={data?.city.country}
        date={getDay()}
      />
      <div className="flex flex-wrap lg:flex-col">
        <HourlyWeather data={data} checkTime={checkTime} />
        <AirPollution />
        <CurrentWeather />
        <DailyWeather />
      </div>
    </div>
  );
};
export default Weather;
