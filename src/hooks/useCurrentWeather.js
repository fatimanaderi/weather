import useData from "./useData";
const useCurrentWeather = (geo) => {
  const { data, err, loading } = useData({endpoint:"weather",geo});
  return { data, err, loading };
};
export default useCurrentWeather;
