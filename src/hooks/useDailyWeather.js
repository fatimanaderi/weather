import useData from "./useData";
const useDailyWeather = (geo) => {
  const { data, err, loading } = useData({endpoint :"onecall",geo});
  return { data, err, loading };
};
export default useDailyWeather;
