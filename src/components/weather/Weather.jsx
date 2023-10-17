import HourlyWeather from "./HourlyWeather";
import AirPollution from "../air-pollution/AirPollution";
import Navbar from "../navbar/Navbar";
import DailyWeather from "./DailyWeather";
import CurrentWeather from "./CurrentWeather";
import { useState } from "react";
import useGeo from "../../hooks/useGeo";
const Weather = () => {
  const [searchInput, setSearchInput] = useState(null);
  const [city, setCity] = useState({ city: "", country: "", date: "" });
  const { geo , loading , err } = useGeo(searchInput);
  if(loading) return <></>
  else if(err) return <></>
  return (
    <div className="mr-5 mb-5 frame z-[2]">
      <Navbar
        city={city.city}
        country={city.country}
        date={city.date}
        onSearch={(input) => setSearchInput(input)}
      />
      <div className="flex flex-wrap lg:flex-col">
        <HourlyWeather geo={geo} getCity={(city) => setCity(city)} />
        <AirPollution geo={geo}/>
        <CurrentWeather geo={geo}/>
        <DailyWeather geo={geo}/>
      </div>
    </div>
  );
};
export default Weather;
