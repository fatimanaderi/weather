import useCurrentWeather from "../../hooks/useCurrentWeather";
import { dayIcon } from "../../data/icon";
import { MdDewPoint } from "react-icons/md";
import { FaCloud, FaWind } from "react-icons/fa";
import { ImDroplet } from "react-icons/im";
const CurrentWeather = ({ geo }) => {
  const { data, err, loading } = useCurrentWeather(geo);
  if (err) return <></>;
  if (loading) return <></>;
  return (
    <div className="my-6 w-full md:w-2/4 px-3 flex-center ">
      <div className="glassmorphism w-fit rounded-2xl w-11/12 h-52 mx-5 p-5">
        <div className="text-2xl font-bold mx-3">
          Today
          <span className="mx-2 text-base font-normal text-gray-400">
            {data?.weather[0].description}
          </span>
        </div>
        <div className="flex items-center mt-2">
          <img src={dayIcon[data?.weather[0].id]} className="w-16 h-16" />
          <div className="text-3xl font-bold">
            {Math.round(data?.main.feels_like - 273.15)}°{" "}
          </div>
          <div className="px-3 text-md text-gray-400 font-bold">
            {data?.name}
          </div>
        </div>
        <div className="flex items-center text-2xl py-4">
          <div className="mx-3">
            <FaCloud />
            <div className="text-base">
              {data?.clouds.all == 0 ? "clear" : data?.clouds.all}
            </div>
          </div>
          <div className="mx-3">
            <MdDewPoint />
            <div className="text-base">{data?.main.pressure}</div>
          </div>
          <div className="mx-3">
            <FaWind />
            <div className="text-base">{data?.wind.speed}</div>
          </div>
          <div className="mx-3">
            <ImDroplet />
            <div className="text-base">{data?.main.humidity}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
