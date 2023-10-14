import useData from "./useData";

const useWeather = () => {
  const { data, err } = useData("forecast", {
    lat: 34.0901,
    lon: -118.4065,
    country: "US",
    cnt: 8,
  });
  const checkTime = (itemDate) => {
    return (
      Number(itemDate.slice(11, 13)) > 2 && Number(itemDate.slice(11, 13)) < 18
    );
  };
  const getDay = () => {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let now = new Date(data?.list[0].dt_txt);
    return data
      ? days[now.getDay()] + " " + now.getDate() + " " + months[now.getMonth()]
      : "";
  };
  return { data, checkTime, err, getDay };
};
export default useWeather;
