import useData from "./useData";
const useDailyWeather = () => {
  const { data, err, loading } = useData({endpoint :"onecall"});
  return { data, err, loading };
};
export default useDailyWeather;
