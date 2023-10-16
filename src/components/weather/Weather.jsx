import useWeather from "../../hooks/useWeather";
import HourlyWeather from "./HourlyWeather";
import AirPollution from "../air-pollution/AirPollution";
import Navbar from "../navbar/Navbar";
const Weather = () => {
  const { data, checkTime, err, getDay } = useWeather();
  if (err) return <></>;
  return (
    <div className="mr-5 mb-5 frame z-[2]">
      <Navbar
        city={data?.city.name}
        country={data?.city.country}
        date={getDay()}
      />
      <div className="flex flex-row flex-wrap justify-center sm:justify-between justify-items-start">
        <HourlyWeather data={data} checkTime={checkTime} />
        <AirPollution />
      </div>
    </div>
  );
};
export default Weather;
