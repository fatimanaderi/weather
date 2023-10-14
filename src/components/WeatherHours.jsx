import { dayIcon, nightIcon } from "../data/icon";

const WeatherHours = ({ data, checkTime }) => {
  return (
    <div className="flex-center flex-wrap my-6 w-full sm:w-1/4 ">
      {data?.list.map((item, index) => (
        <div key={index} className="w-32 ml-3 mt-3 glassmorphism">
          <div className="text-xs"> {item.weather[0].description}</div>
          <div className="text-xs">{item.dt_txt.slice(11, 16)}</div>
          <div className="flex-center">
            <img
              src={`${
                checkTime(item.dt_txt)
                  ? dayIcon[item.weather[0].id]
                  : nightIcon[item.weather[0].id]
              }`}
            />
            <div>{Math.round(item.main.temp_max - 273.15)}°</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default WeatherHours;
