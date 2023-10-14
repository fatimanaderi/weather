import { dayIcon, nightIcon } from "../data/icon";

const WeatherHours = ({ data, checkTime }) => {
  return (
    <>
      {data?.list.map((item, index) => (
        <div key={index} className="mt-6 w-32 glassmorphism">
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
    </>
  );
};
export default WeatherHours;
