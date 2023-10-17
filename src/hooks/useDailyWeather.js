import useData from "./useData";
const useDailyWeather = () => {
  const { data, err, loading } = useData("onecall", {
    lat: 34.0901,
    lon: -118.4065,
    cnt:7
  });
  return { data, err, loading };
};
export default useDailyWeather;
