import { useEffect } from "react";
import { dayIcon, nightIcon } from "../../data/icon";
import useHourlyWeather from "../../hooks/useHourlyWeather";

const HourlyWeather = ({ geo, getCity }) => {
  const { data, checkTime, loading, err, getDay } =
    useHourlyWeather(geo);
  useEffect(() => {
    if (loading) return <></>;
    else if (err) return <></>;
    else if (data) {
      getCity({
        city: data?.city.name,
        country: data?.city.country,
        date: getDay(),
      });
    }
  }, [data]);
  return (
    <div className="flex-center flex-wrap my-3 w-full md:w-2/4 lg:w-full">
      {data?.list.map((item, index) => (
        <div key={index} className="w-32 m-1 glassmorphism p-3 rounded-2xl">
          <div className="text-xs font-bold text-gray-400">
            {item.weather[0].description}
          </div>
          <div className="text-base">{item.dt_txt.slice(11, 16)}</div>
          <div className="flex-center">
            <div className="text-2xl font-bold">
              {Math.round(item.main.temp_max - 273.15)}°
            </div>
            <img
            className="w-16 h-16"
              src={`${
                checkTime(item.dt_txt)
                  ? dayIcon[item.weather[0].id]
                  : nightIcon[item.weather[0].id]
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default HourlyWeather;
