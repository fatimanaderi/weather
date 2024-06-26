import useDailyWeather from "../../hooks/useDailyWeather";
import { dayIcon } from "../../data/icon";
import getDate from "../../services/date";

const DailyWeather = ({ geo }) => {
  const { data, loading, err } = useDailyWeather(geo);
  const dayDate = (dt) => {
    const { day } = getDate(dt);
    return day;
  };
  if (err) return <></>;
  if (loading) return <></>;
  return (
    <div className="flex-center flex-wrap mb-6 w-full md:w-2/4">
      {data?.daily.map((item, index) => (
        <div
          key={index}
          className="w-20 ml-2 m-2 glassmorphism text-center p-2 rounded-2xl"
        >
          <div className="text-[11px] font-bold text-gray-400 pt-2">
            {dayDate(item.dt)}
          </div>
          <img src={dayIcon[item.weather[0].id]} className="w-16 h-16" />
          <div className="text-xl">{Math.round(item.temp.max - 273.15)}°</div>
        </div>
      ))}
    </div>
  );
};
export default DailyWeather;
