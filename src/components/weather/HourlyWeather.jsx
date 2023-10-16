import { dayIcon, nightIcon } from "../../data/icon";

const HourlyWeather = ({ data, checkTime }) => {
  return (
    <div className="flex-center flex-wrap my-3 w-full md:w-2/4 lg:w-full">
      {data?.list.map((item, index) => (
        <div key={index} className="w-32 m-1 glassmorphism p-3 rounded-2xl">
          <div className="text-xs font-bold text-gray-400"> {item.weather[0].description}</div>
          <div className="text-base">{item.dt_txt.slice(11, 16)}</div>
          <div className="flex-center">
            <div className="text-2xl font-bold">{Math.round(item.main.temp_max - 273.15)}°</div>
            <img
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
