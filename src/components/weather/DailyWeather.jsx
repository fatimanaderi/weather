import useDailyWeather from "../../hooks/useDailyWeather";
import { dayIcon, nightIcon } from "../../data/icon";
import getDate from "../../services/date";

const DailyWeather = () => {
  const { data, loading, err } = useDailyWeather();
  const dayDate = (dt) => {
    const { day } = getDate(dt);
    return day;
  };
  if (err) return <></>;
  return (
    <div className="flex-center flex-wrap h-32 my-3 w-full lg:w-2/4">
      {data?.daily.map((item, index) => (
        <div
          key={index}
          className="w-20 ml-2 m-2 glassmorphism text-center p-2 rounded-2xl"
        >
          <div className="text-[11px] font-bold text-gray-400 pt-2">
            {dayDate(item.dt)}
          </div>
          <img src={dayIcon[item.weather[0].id]} />
          <div className="text-xl">{Math.round(item.temp.max - 273.15)}°</div>
        </div>
      ))}
    </div>
  );
};
export default DailyWeather;
