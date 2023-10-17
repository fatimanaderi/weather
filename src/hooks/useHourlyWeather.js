import useData from "./useData";
import days from "../data/daysWeak";
import months from "../data/months";
const useHourlyWeather = (searchInput) => {
  const { data, err,loading } = useData({endpoint :"forecast", params :{cnt: 8},searchInput});
  const checkTime = (itemDate) => {
    return (
      Number(itemDate.slice(11, 13)) > 2 && Number(itemDate.slice(11, 13)) < 18
    );
  };
  const getDay = () => {
    let now = new Date(data?.list[0].dt_txt);
    return data
      ? days[now.getDay()] + " " + now.getDate() + " " + months[now.getMonth()]
      : "";
  };
  return { data,loading,err ,checkTime, getDay };
};
export default useHourlyWeather;
